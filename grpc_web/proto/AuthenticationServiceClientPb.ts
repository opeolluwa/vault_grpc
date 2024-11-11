/**
 * @fileoverview gRPC-Web generated client stub for authentication
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v5.26.1
// source: proto/authentication.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as proto_authentication_pb from '../proto/authentication_pb'; // proto import: "proto/authentication.proto"


export class AuthenticationClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname.replace(/\/+$/, '');
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorSignUp = new grpcWeb.MethodDescriptor(
    '/authentication.Authentication/SignUp',
    grpcWeb.MethodType.UNARY,
    proto_authentication_pb.SignUpRequest,
    proto_authentication_pb.SignUpResponse,
    (request: proto_authentication_pb.SignUpRequest) => {
      return request.serializeBinary();
    },
    proto_authentication_pb.SignUpResponse.deserializeBinary
  );

  signUp(
    request: proto_authentication_pb.SignUpRequest,
    metadata?: grpcWeb.Metadata | null): Promise<proto_authentication_pb.SignUpResponse>;

  signUp(
    request: proto_authentication_pb.SignUpRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: proto_authentication_pb.SignUpResponse) => void): grpcWeb.ClientReadableStream<proto_authentication_pb.SignUpResponse>;

  signUp(
    request: proto_authentication_pb.SignUpRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: proto_authentication_pb.SignUpResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/authentication.Authentication/SignUp',
        request,
        metadata || {},
        this.methodDescriptorSignUp,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/authentication.Authentication/SignUp',
    request,
    metadata || {},
    this.methodDescriptorSignUp);
  }

  methodDescriptorLogin = new grpcWeb.MethodDescriptor(
    '/authentication.Authentication/Login',
    grpcWeb.MethodType.UNARY,
    proto_authentication_pb.LoginRequest,
    proto_authentication_pb.LoginResponse,
    (request: proto_authentication_pb.LoginRequest) => {
      return request.serializeBinary();
    },
    proto_authentication_pb.LoginResponse.deserializeBinary
  );

  login(
    request: proto_authentication_pb.LoginRequest,
    metadata?: grpcWeb.Metadata | null): Promise<proto_authentication_pb.LoginResponse>;

  login(
    request: proto_authentication_pb.LoginRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: proto_authentication_pb.LoginResponse) => void): grpcWeb.ClientReadableStream<proto_authentication_pb.LoginResponse>;

  login(
    request: proto_authentication_pb.LoginRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: proto_authentication_pb.LoginResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/authentication.Authentication/Login',
        request,
        metadata || {},
        this.methodDescriptorLogin,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/authentication.Authentication/Login',
    request,
    metadata || {},
    this.methodDescriptorLogin);
  }

}

