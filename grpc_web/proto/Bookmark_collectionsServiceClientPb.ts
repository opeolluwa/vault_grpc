/**
 * @fileoverview gRPC-Web generated client stub for BookmarkCollection
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v5.26.1
// source: proto/bookmark_collections.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as proto_bookmark_collections_pb from '../proto/bookmark_collections_pb'; // proto import: "proto/bookmark_collections.proto"


export class BookmarkCollectionManagerClient {
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

  methodDescriptorCreateNewBookmarkCollection = new grpcWeb.MethodDescriptor(
    '/BookmarkCollection.BookmarkCollectionManager/CreateNewBookmarkCollection',
    grpcWeb.MethodType.UNARY,
    proto_bookmark_collections_pb.NewBookmarkCollectionRequest,
    proto_bookmark_collections_pb.NewBookmarkCollectionResponse,
    (request: proto_bookmark_collections_pb.NewBookmarkCollectionRequest) => {
      return request.serializeBinary();
    },
    proto_bookmark_collections_pb.NewBookmarkCollectionResponse.deserializeBinary
  );

  createNewBookmarkCollection(
    request: proto_bookmark_collections_pb.NewBookmarkCollectionRequest,
    metadata?: grpcWeb.Metadata | null): Promise<proto_bookmark_collections_pb.NewBookmarkCollectionResponse>;

  createNewBookmarkCollection(
    request: proto_bookmark_collections_pb.NewBookmarkCollectionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: proto_bookmark_collections_pb.NewBookmarkCollectionResponse) => void): grpcWeb.ClientReadableStream<proto_bookmark_collections_pb.NewBookmarkCollectionResponse>;

  createNewBookmarkCollection(
    request: proto_bookmark_collections_pb.NewBookmarkCollectionRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: proto_bookmark_collections_pb.NewBookmarkCollectionResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/BookmarkCollection.BookmarkCollectionManager/CreateNewBookmarkCollection',
        request,
        metadata || {},
        this.methodDescriptorCreateNewBookmarkCollection,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/BookmarkCollection.BookmarkCollectionManager/CreateNewBookmarkCollection',
    request,
    metadata || {},
    this.methodDescriptorCreateNewBookmarkCollection);
  }

  methodDescriptorGetBookmarkCollection = new grpcWeb.MethodDescriptor(
    '/BookmarkCollection.BookmarkCollectionManager/GetBookmarkCollection',
    grpcWeb.MethodType.UNARY,
    proto_bookmark_collections_pb.GetBookmarkCollectionRequest,
    proto_bookmark_collections_pb.GetBookmarkCollectionResponse,
    (request: proto_bookmark_collections_pb.GetBookmarkCollectionRequest) => {
      return request.serializeBinary();
    },
    proto_bookmark_collections_pb.GetBookmarkCollectionResponse.deserializeBinary
  );

  getBookmarkCollection(
    request: proto_bookmark_collections_pb.GetBookmarkCollectionRequest,
    metadata?: grpcWeb.Metadata | null): Promise<proto_bookmark_collections_pb.GetBookmarkCollectionResponse>;

  getBookmarkCollection(
    request: proto_bookmark_collections_pb.GetBookmarkCollectionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: proto_bookmark_collections_pb.GetBookmarkCollectionResponse) => void): grpcWeb.ClientReadableStream<proto_bookmark_collections_pb.GetBookmarkCollectionResponse>;

  getBookmarkCollection(
    request: proto_bookmark_collections_pb.GetBookmarkCollectionRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: proto_bookmark_collections_pb.GetBookmarkCollectionResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/BookmarkCollection.BookmarkCollectionManager/GetBookmarkCollection',
        request,
        metadata || {},
        this.methodDescriptorGetBookmarkCollection,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/BookmarkCollection.BookmarkCollectionManager/GetBookmarkCollection',
    request,
    metadata || {},
    this.methodDescriptorGetBookmarkCollection);
  }

  methodDescriptorUpdateBookmarkCollection = new grpcWeb.MethodDescriptor(
    '/BookmarkCollection.BookmarkCollectionManager/UpdateBookmarkCollection',
    grpcWeb.MethodType.UNARY,
    proto_bookmark_collections_pb.UpdateBookmarkCollectionRequest,
    proto_bookmark_collections_pb.GetBookmarkCollectionResponse,
    (request: proto_bookmark_collections_pb.UpdateBookmarkCollectionRequest) => {
      return request.serializeBinary();
    },
    proto_bookmark_collections_pb.GetBookmarkCollectionResponse.deserializeBinary
  );

  updateBookmarkCollection(
    request: proto_bookmark_collections_pb.UpdateBookmarkCollectionRequest,
    metadata?: grpcWeb.Metadata | null): Promise<proto_bookmark_collections_pb.GetBookmarkCollectionResponse>;

  updateBookmarkCollection(
    request: proto_bookmark_collections_pb.UpdateBookmarkCollectionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: proto_bookmark_collections_pb.GetBookmarkCollectionResponse) => void): grpcWeb.ClientReadableStream<proto_bookmark_collections_pb.GetBookmarkCollectionResponse>;

  updateBookmarkCollection(
    request: proto_bookmark_collections_pb.UpdateBookmarkCollectionRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: proto_bookmark_collections_pb.GetBookmarkCollectionResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/BookmarkCollection.BookmarkCollectionManager/UpdateBookmarkCollection',
        request,
        metadata || {},
        this.methodDescriptorUpdateBookmarkCollection,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/BookmarkCollection.BookmarkCollectionManager/UpdateBookmarkCollection',
    request,
    metadata || {},
    this.methodDescriptorUpdateBookmarkCollection);
  }

  methodDescriptorDeleteBookmarkCollection = new grpcWeb.MethodDescriptor(
    '/BookmarkCollection.BookmarkCollectionManager/DeleteBookmarkCollection',
    grpcWeb.MethodType.UNARY,
    proto_bookmark_collections_pb.DeleteBookmarkCollectionRequest,
    proto_bookmark_collections_pb.DeleteBookmarkCollectionResponse,
    (request: proto_bookmark_collections_pb.DeleteBookmarkCollectionRequest) => {
      return request.serializeBinary();
    },
    proto_bookmark_collections_pb.DeleteBookmarkCollectionResponse.deserializeBinary
  );

  deleteBookmarkCollection(
    request: proto_bookmark_collections_pb.DeleteBookmarkCollectionRequest,
    metadata?: grpcWeb.Metadata | null): Promise<proto_bookmark_collections_pb.DeleteBookmarkCollectionResponse>;

  deleteBookmarkCollection(
    request: proto_bookmark_collections_pb.DeleteBookmarkCollectionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: proto_bookmark_collections_pb.DeleteBookmarkCollectionResponse) => void): grpcWeb.ClientReadableStream<proto_bookmark_collections_pb.DeleteBookmarkCollectionResponse>;

  deleteBookmarkCollection(
    request: proto_bookmark_collections_pb.DeleteBookmarkCollectionRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: proto_bookmark_collections_pb.DeleteBookmarkCollectionResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/BookmarkCollection.BookmarkCollectionManager/DeleteBookmarkCollection',
        request,
        metadata || {},
        this.methodDescriptorDeleteBookmarkCollection,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/BookmarkCollection.BookmarkCollectionManager/DeleteBookmarkCollection',
    request,
    metadata || {},
    this.methodDescriptorDeleteBookmarkCollection);
  }

  methodDescriptorListBookmarkCollections = new grpcWeb.MethodDescriptor(
    '/BookmarkCollection.BookmarkCollectionManager/ListBookmarkCollections',
    grpcWeb.MethodType.UNARY,
    proto_bookmark_collections_pb.ListBookmarkCollectionsRequest,
    proto_bookmark_collections_pb.ListBookmarkCollectionsResponse,
    (request: proto_bookmark_collections_pb.ListBookmarkCollectionsRequest) => {
      return request.serializeBinary();
    },
    proto_bookmark_collections_pb.ListBookmarkCollectionsResponse.deserializeBinary
  );

  listBookmarkCollections(
    request: proto_bookmark_collections_pb.ListBookmarkCollectionsRequest,
    metadata?: grpcWeb.Metadata | null): Promise<proto_bookmark_collections_pb.ListBookmarkCollectionsResponse>;

  listBookmarkCollections(
    request: proto_bookmark_collections_pb.ListBookmarkCollectionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: proto_bookmark_collections_pb.ListBookmarkCollectionsResponse) => void): grpcWeb.ClientReadableStream<proto_bookmark_collections_pb.ListBookmarkCollectionsResponse>;

  listBookmarkCollections(
    request: proto_bookmark_collections_pb.ListBookmarkCollectionsRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: proto_bookmark_collections_pb.ListBookmarkCollectionsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/BookmarkCollection.BookmarkCollectionManager/ListBookmarkCollections',
        request,
        metadata || {},
        this.methodDescriptorListBookmarkCollections,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/BookmarkCollection.BookmarkCollectionManager/ListBookmarkCollections',
    request,
    metadata || {},
    this.methodDescriptorListBookmarkCollections);
  }

  methodDescriptorListBookmarkCollectionEntries = new grpcWeb.MethodDescriptor(
    '/BookmarkCollection.BookmarkCollectionManager/ListBookmarkCollectionEntries',
    grpcWeb.MethodType.UNARY,
    proto_bookmark_collections_pb.ListBookmarkCollectionEntryRequest,
    proto_bookmark_collections_pb.ListBookmarkCollectionEntryResponse,
    (request: proto_bookmark_collections_pb.ListBookmarkCollectionEntryRequest) => {
      return request.serializeBinary();
    },
    proto_bookmark_collections_pb.ListBookmarkCollectionEntryResponse.deserializeBinary
  );

  listBookmarkCollectionEntries(
    request: proto_bookmark_collections_pb.ListBookmarkCollectionEntryRequest,
    metadata?: grpcWeb.Metadata | null): Promise<proto_bookmark_collections_pb.ListBookmarkCollectionEntryResponse>;

  listBookmarkCollectionEntries(
    request: proto_bookmark_collections_pb.ListBookmarkCollectionEntryRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: proto_bookmark_collections_pb.ListBookmarkCollectionEntryResponse) => void): grpcWeb.ClientReadableStream<proto_bookmark_collections_pb.ListBookmarkCollectionEntryResponse>;

  listBookmarkCollectionEntries(
    request: proto_bookmark_collections_pb.ListBookmarkCollectionEntryRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: proto_bookmark_collections_pb.ListBookmarkCollectionEntryResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/BookmarkCollection.BookmarkCollectionManager/ListBookmarkCollectionEntries',
        request,
        metadata || {},
        this.methodDescriptorListBookmarkCollectionEntries,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/BookmarkCollection.BookmarkCollectionManager/ListBookmarkCollectionEntries',
    request,
    metadata || {},
    this.methodDescriptorListBookmarkCollectionEntries);
  }

}

