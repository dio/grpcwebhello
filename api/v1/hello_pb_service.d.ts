// package: dio.hellogrpcweb.v1
// file: hello.proto

import * as hello_pb from "./hello_pb";
import {grpc} from "@improbable-eng/grpc-web";

type YAMLServiceToJSON = {
  readonly methodName: string;
  readonly service: typeof YAMLService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof hello_pb.ToJSONRequest;
  readonly responseType: typeof hello_pb.ToJSONResponse;
};

type YAMLServiceToJSONBytes = {
  readonly methodName: string;
  readonly service: typeof YAMLService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof hello_pb.ToJSONBytesRequest;
  readonly responseType: typeof hello_pb.ToJSONBytesResponse;
};

export class YAMLService {
  static readonly serviceName: string;
  static readonly ToJSON: YAMLServiceToJSON;
  static readonly ToJSONBytes: YAMLServiceToJSONBytes;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: () => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: () => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: () => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class YAMLServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  toJSON(
    requestMessage: hello_pb.ToJSONRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: hello_pb.ToJSONResponse|null) => void
  ): UnaryResponse;
  toJSON(
    requestMessage: hello_pb.ToJSONRequest,
    callback: (error: ServiceError|null, responseMessage: hello_pb.ToJSONResponse|null) => void
  ): UnaryResponse;
  toJSONBytes(
    requestMessage: hello_pb.ToJSONBytesRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: hello_pb.ToJSONBytesResponse|null) => void
  ): UnaryResponse;
  toJSONBytes(
    requestMessage: hello_pb.ToJSONBytesRequest,
    callback: (error: ServiceError|null, responseMessage: hello_pb.ToJSONBytesResponse|null) => void
  ): UnaryResponse;
}

