package main

import (
	"log"

	"github.com/pkg/errors"
	"github.com/spf13/cobra"

	"github.com/dio/hellogrpcweb/server/grpc"
	"github.com/dio/hellogrpcweb/server/ui"
	"github.com/dio/hellogrpcweb/api/v1"
	yamlservice "github.com/dio/hellogrpcweb/server"
)

// Config ...
type Config struct {
	grpcServer *grpc.Config
	uiServer *ui.Config
}

func main() {
	var config *Config
	cmd := &cobra.Command{
		Use: "hello",
		Short: "hello",
		Long: "hello",
		SilenceUsage: true,
		RunE: func(cmd *cobra.Command, args []string) error {
			uiServer, err := ui.New(config.uiServer)
			if err != nil {
				return errors.Wrap(err, "failed to create ui server")
			}

			grpcServer, err := grpc.New(config.grpcServer)
			if err != nil {
				return errors.Wrap(err, "failed to create grpc server")
			}

			v1.RegisterYAMLServiceServer(grpcServer.Server(), yamlservice.New())
			return Serve(uiServer, grpcServer)
		},
	}

	config = AttachFlags(cmd)
	if err := cmd.Execute(); err != nil {
		log.Fatalf("%v", err)
	}
}

// AttachFlags ...
func AttachFlags(cmd *cobra.Command) *Config {
	var config Config
	config.grpcServer = grpc.AttachFlags(cmd)
	config.uiServer = ui.AttachFlags(cmd)
	return &config
}

type server interface {
	Serve() error
	GracefulStop()
}

// Serve serves all servers.
func Serve(servers ...server) error {
	n := len(servers)
	status := make(chan map[int]error, n)
	for i, s := range servers {
		go func(i int, s server, c chan<- map[int]error) {
			c <- map[int]error{i: s.Serve()}
		}(i, s, status)
	}

	for range servers {
		m := <-status
		for k := range m {
			if m[k] != nil {
				// Iterate over other servers and call GracefulStop() on it.
				for j, s := range servers {
					if j != k {
						s.GracefulStop()
					}
				}
				return m[k]
			}
		}
	}
	return nil
}