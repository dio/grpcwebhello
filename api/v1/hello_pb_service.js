// package: dio.hellogrpcweb.v1
// file: hello.proto

var hello_pb = require("./hello_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var YAMLService = (function () {
  function YAMLService() {}
  YAMLService.serviceName = "dio.hellogrpcweb.v1.YAMLService";
  return YAMLService;
}());

YAMLService.ToJSON = {
  methodName: "ToJSON",
  service: YAMLService,
  requestStream: false,
  responseStream: false,
  requestType: hello_pb.ToJSONRequest,
  responseType: hello_pb.ToJSONResponse
};

YAMLService.ToJSONBytes = {
  methodName: "ToJSONBytes",
  service: YAMLService,
  requestStream: false,
  responseStream: false,
  requestType: hello_pb.ToJSONBytesRequest,
  responseType: hello_pb.ToJSONBytesResponse
};

exports.YAMLService = YAMLService;

function YAMLServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

YAMLServiceClient.prototype.toJSON = function toJSON(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(YAMLService.ToJSON, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

YAMLServiceClient.prototype.toJSONBytes = function toJSONBytes(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(YAMLService.ToJSONBytes, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.YAMLServiceClient = YAMLServiceClient;

