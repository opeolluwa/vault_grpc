// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.3.0
//   protoc               v5.28.3
// source: health_check.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import {
  type CallOptions,
  ChannelCredentials,
  Client,
  type ClientOptions,
  type ClientUnaryCall,
  type handleUnaryCall,
  makeGenericClientConstructor,
  Metadata,
  type ServiceError,
  type UntypedServiceImplementation,
} from "@grpc/grpc-js";

export const protobufPackage = "health_check";

export enum Status {
  Ok = 0,
  Bad = 1,
  UNRECOGNIZED = -1,
}

export function statusFromJSON(object: any): Status {
  switch (object) {
    case 0:
    case "Ok":
      return Status.Ok;
    case 1:
    case "Bad":
      return Status.Bad;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Status.UNRECOGNIZED;
  }
}

export function statusToJSON(object: Status): string {
  switch (object) {
    case Status.Ok:
      return "Ok";
    case Status.Bad:
      return "Bad";
    case Status.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface HealthCheckRequest {
}

export interface HealthCheckResponse {
  status: Status;
  message: string;
}

function createBaseHealthCheckRequest(): HealthCheckRequest {
  return {};
}

export const HealthCheckRequest: MessageFns<HealthCheckRequest> = {
  encode(_: HealthCheckRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): HealthCheckRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHealthCheckRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): HealthCheckRequest {
    return {};
  },

  toJSON(_: HealthCheckRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<HealthCheckRequest>, I>>(base?: I): HealthCheckRequest {
    return HealthCheckRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<HealthCheckRequest>, I>>(_: I): HealthCheckRequest {
    const message = createBaseHealthCheckRequest();
    return message;
  },
};

function createBaseHealthCheckResponse(): HealthCheckResponse {
  return { status: 0, message: "" };
}

export const HealthCheckResponse: MessageFns<HealthCheckResponse> = {
  encode(message: HealthCheckResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): HealthCheckResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHealthCheckResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.message = reader.string();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): HealthCheckResponse {
    return {
      status: isSet(object.status) ? statusFromJSON(object.status) : 0,
      message: isSet(object.message) ? globalThis.String(object.message) : "",
    };
  },

  toJSON(message: HealthCheckResponse): unknown {
    const obj: any = {};
    if (message.status !== 0) {
      obj.status = statusToJSON(message.status);
    }
    if (message.message !== "") {
      obj.message = message.message;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<HealthCheckResponse>, I>>(base?: I): HealthCheckResponse {
    return HealthCheckResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<HealthCheckResponse>, I>>(object: I): HealthCheckResponse {
    const message = createBaseHealthCheckResponse();
    message.status = object.status ?? 0;
    message.message = object.message ?? "";
    return message;
  },
};

export type HealthCheckService = typeof HealthCheckService;
export const HealthCheckService = {
  checkServiceHealth: {
    path: "/health_check.HealthCheck/CheckServiceHealth",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: HealthCheckRequest) => Buffer.from(HealthCheckRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => HealthCheckRequest.decode(value),
    responseSerialize: (value: HealthCheckResponse) => Buffer.from(HealthCheckResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => HealthCheckResponse.decode(value),
  },
} as const;

export interface HealthCheckServer extends UntypedServiceImplementation {
  checkServiceHealth: handleUnaryCall<HealthCheckRequest, HealthCheckResponse>;
}

export interface HealthCheckClient extends Client {
  checkServiceHealth(
    request: HealthCheckRequest,
    callback: (error: ServiceError | null, response: HealthCheckResponse) => void,
  ): ClientUnaryCall;
  checkServiceHealth(
    request: HealthCheckRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: HealthCheckResponse) => void,
  ): ClientUnaryCall;
  checkServiceHealth(
    request: HealthCheckRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: HealthCheckResponse) => void,
  ): ClientUnaryCall;
}

export const HealthCheckClient = makeGenericClientConstructor(
  HealthCheckService,
  "health_check.HealthCheck",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): HealthCheckClient;
  service: typeof HealthCheckService;
  serviceName: string;
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create<I extends Exact<DeepPartial<T>, I>>(base?: I): T;
  fromPartial<I extends Exact<DeepPartial<T>, I>>(object: I): T;
}
