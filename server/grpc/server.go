package grpc

import (
	"net"

	"github.com/spf13/cobra"
	"github.com/spf13/pflag"
	"google.golang.org/grpc"
)

// Server ...
type Server interface {
	Serve() error
	Server() *grpc.Server
	GracefulStop()
}

// Config ...
type Config struct {
	GrpcAddress string

	listen func() (net.Listener, error)
}

type server struct {
	s           *grpc.Server
	grpcAddress string

	listen func() (net.Listener, error)
}

// DefaultConfig ...
func DefaultConfig() (c *Config) {
	return &Config{
		listen: func() (net.Listener, error) {
			return net.Listen("tcp", c.GrpcAddress)
		},
	}
}

// New ...
func New(c *Config) (Server, error) {
	return server{
		s:           grpc.NewServer(),
		grpcAddress: c.GrpcAddress,
		listen:      c.listen,
	}, nil
}

func (s server) Server() *grpc.Server {
	return s.s
}

// AttachFlags ...
func AttachFlags(cmd *cobra.Command) *Config {
	c := DefaultConfig()
	flags := pflag.NewFlagSet("options", pflag.ExitOnError)
	flags.StringVarP(&c.GrpcAddress, "listen", "l", ":9901", "gRPC listen address")
	cmd.PersistentFlags().AddFlagSet(flags)
	return c
}

func (s server) Serve() error {
	l, err := s.listen()
	if err != nil {
		return err
	}

	return s.s.Serve(l)
}

func (s server) GracefulStop() {
	s.s.GracefulStop()
}

