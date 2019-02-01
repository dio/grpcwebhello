package ui

import (
	"context"
	"net"
	"net/http"
	"os"

	"github.com/gobuffalo/packr"
	"github.com/spf13/cobra"
	"github.com/spf13/pflag"
)

// Server ...
type Server interface {
	Serve() error
	Server() *http.Server
	GracefulStop()
}

// Config describes the configuration required to run a file server.
type Config struct {
	HTTPAddress string
	Fs          http.FileSystem
	// for testing
	listen func() (net.Listener, error)
}

type server struct {
	listen      func() (net.Listener, error)
	s           *http.Server
	httpAddress string
}

// DefaultConfig is the server's default config instance.
func DefaultConfig() (c *Config) {
	return &Config{
		Fs: packr.NewBox("../../ui/build"),
		listen: func() (net.Listener, error) {
			return net.Listen("tcp", c.HTTPAddress)
		},
	}
}

// AttachFlags maps a server.Config into flags.
func AttachFlags(cmd *cobra.Command) *Config {
	c := DefaultConfig()

	flags := pflag.NewFlagSet("options", pflag.ExitOnError)
	flags.StringVarP(&c.HTTPAddress, "ui-listen", "s", ":8080", "HTTP listen address")
	cmd.PersistentFlags().AddFlagSet(flags)

	return c
}

// New returns a new server from the provided config.
func New(c *Config) (Server, error) {
	staticServer := http.FileServer(c.Fs)
	return server{
		s: &http.Server{
			Handler: http.HandlerFunc(func(resp http.ResponseWriter, req *http.Request) {
				staticServer.ServeHTTP(resp, req)
			}),
		},
		httpAddress: c.HTTPAddress,
		listen:      c.listen,
	}, nil
}

func (s server) Server() *http.Server {
	return s.s
}

func (s server) Serve() error {
	l, err := s.listen()
	if err != nil {
		return err
	}

	return s.s.Serve(l)
}

// GracefulStop shutdowns the HTTP server gracefully.
func (s server) GracefulStop() {
	err := s.s.Shutdown(context.Background())
	if err != nil {
		// If failed to gracefully shutdowns the server, do force exit.
		os.Exit(1)
	}
}
