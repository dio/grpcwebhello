// package: dio.hellogrpcweb.v1
// file: hello.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "./google/api/annotations_pb";

export class ToJSONRequest extends jspb.Message {
  getYaml(): string;
  setYaml(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ToJSONRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ToJSONRequest): ToJSONRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ToJSONRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ToJSONRequest;
  static deserializeBinaryFromReader(message: ToJSONRequest, reader: jspb.BinaryReader): ToJSONRequest;
}

export namespace ToJSONRequest {
  export type AsObject = {
    yaml: string,
  }
}

export class ToJSONResponse extends jspb.Message {
  getJson(): string;
  setJson(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ToJSONResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ToJSONResponse): ToJSONResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ToJSONResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ToJSONResponse;
  static deserializeBinaryFromReader(message: ToJSONResponse, reader: jspb.BinaryReader): ToJSONResponse;
}

export namespace ToJSONResponse {
  export type AsObject = {
    json: string,
  }
}

export class ToJSONBytesRequest extends jspb.Message {
  getYaml(): Uint8Array | string;
  getYaml_asU8(): Uint8Array;
  getYaml_asB64(): string;
  setYaml(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ToJSONBytesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ToJSONBytesRequest): ToJSONBytesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ToJSONBytesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ToJSONBytesRequest;
  static deserializeBinaryFromReader(message: ToJSONBytesRequest, reader: jspb.BinaryReader): ToJSONBytesRequest;
}

export namespace ToJSONBytesRequest {
  export type AsObject = {
    yaml: Uint8Array | string,
  }
}

export class ToJSONBytesResponse extends jspb.Message {
  getJson(): Uint8Array | string;
  getJson_asU8(): Uint8Array;
  getJson_asB64(): string;
  setJson(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ToJSONBytesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ToJSONBytesResponse): ToJSONBytesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ToJSONBytesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ToJSONBytesResponse;
  static deserializeBinaryFromReader(message: ToJSONBytesResponse, reader: jspb.BinaryReader): ToJSONBytesResponse;
}

export namespace ToJSONBytesResponse {
  export type AsObject = {
    json: Uint8Array | string,
  }
}

