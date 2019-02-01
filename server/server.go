package server

import (
	"context"

	"github.com/ghodss/yaml"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	"github.com/dio/hellogrpcweb/api/v1"
)

// New ...
func New() v1.YAMLServiceServer {
	return &handler{}
}

type handler struct{}

var _ v1.YAMLServiceServer = &handler{}

func (h *handler) ToJSON(ctx context.Context, req *v1.ToJSONRequest) (*v1.ToJSONResponse, error) {
	json, err := yaml.YAMLToJSON([]byte(req.Yaml))
	if err != nil {
		return nil, status.New(codes.Internal, err.Error()).Err()
	}
	return &v1.ToJSONResponse{
		Json: string(json),
	}, nil
}

func (h *handler) ToJSONBytes(ctx context.Context, req *v1.ToJSONBytesRequest) (*v1.ToJSONBytesResponse, error) {
	json, err := yaml.YAMLToJSON(req.Yaml)
	if err != nil {
		return nil, status.New(codes.Internal, err.Error()).Err()
	}
	return &v1.ToJSONBytesResponse{
		Json: json,
	}, nil
}
