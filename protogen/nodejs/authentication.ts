// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.3.0
//   protoc               v5.28.3
// source: authentication.proto

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

export const protobufPackage = "authentication";

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

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  message: string;
}

export interface SignUpRequest {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface SignUpResponse {
  message: string;
  status: Status;
}

export interface ForgottenPasswordRequest {
  email: string;
}

export interface ForgottenPasswordResponse {
  status: Status;
  message: string;
}

export interface SetNewPasswordRequest {
  password: string;
  confirmPassword: string;
}

export interface SetNewPasswordResponse {
  status: Status;
  message: string;
}

function createBaseLoginRequest(): LoginRequest {
  return { email: "", password: "" };
}

export const LoginRequest: MessageFns<LoginRequest> = {
  encode(message: LoginRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.email !== "") {
      writer.uint32(10).string(message.email);
    }
    if (message.password !== "") {
      writer.uint32(18).string(message.password);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): LoginRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoginRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.email = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.password = reader.string();
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

  fromJSON(object: any): LoginRequest {
    return {
      email: isSet(object.email) ? globalThis.String(object.email) : "",
      password: isSet(object.password) ? globalThis.String(object.password) : "",
    };
  },

  toJSON(message: LoginRequest): unknown {
    const obj: any = {};
    if (message.email !== "") {
      obj.email = message.email;
    }
    if (message.password !== "") {
      obj.password = message.password;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LoginRequest>, I>>(base?: I): LoginRequest {
    return LoginRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LoginRequest>, I>>(object: I): LoginRequest {
    const message = createBaseLoginRequest();
    message.email = object.email ?? "";
    message.password = object.password ?? "";
    return message;
  },
};

function createBaseLoginResponse(): LoginResponse {
  return { token: "", message: "" };
}

export const LoginResponse: MessageFns<LoginResponse> = {
  encode(message: LoginResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): LoginResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoginResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.token = reader.string();
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

  fromJSON(object: any): LoginResponse {
    return {
      token: isSet(object.token) ? globalThis.String(object.token) : "",
      message: isSet(object.message) ? globalThis.String(object.message) : "",
    };
  },

  toJSON(message: LoginResponse): unknown {
    const obj: any = {};
    if (message.token !== "") {
      obj.token = message.token;
    }
    if (message.message !== "") {
      obj.message = message.message;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LoginResponse>, I>>(base?: I): LoginResponse {
    return LoginResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LoginResponse>, I>>(object: I): LoginResponse {
    const message = createBaseLoginResponse();
    message.token = object.token ?? "";
    message.message = object.message ?? "";
    return message;
  },
};

function createBaseSignUpRequest(): SignUpRequest {
  return { email: "", password: "", firstName: "", lastName: "" };
}

export const SignUpRequest: MessageFns<SignUpRequest> = {
  encode(message: SignUpRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.email !== "") {
      writer.uint32(10).string(message.email);
    }
    if (message.password !== "") {
      writer.uint32(18).string(message.password);
    }
    if (message.firstName !== "") {
      writer.uint32(26).string(message.firstName);
    }
    if (message.lastName !== "") {
      writer.uint32(34).string(message.lastName);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SignUpRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignUpRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.email = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.password = reader.string();
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.firstName = reader.string();
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }

          message.lastName = reader.string();
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

  fromJSON(object: any): SignUpRequest {
    return {
      email: isSet(object.email) ? globalThis.String(object.email) : "",
      password: isSet(object.password) ? globalThis.String(object.password) : "",
      firstName: isSet(object.firstName) ? globalThis.String(object.firstName) : "",
      lastName: isSet(object.lastName) ? globalThis.String(object.lastName) : "",
    };
  },

  toJSON(message: SignUpRequest): unknown {
    const obj: any = {};
    if (message.email !== "") {
      obj.email = message.email;
    }
    if (message.password !== "") {
      obj.password = message.password;
    }
    if (message.firstName !== "") {
      obj.firstName = message.firstName;
    }
    if (message.lastName !== "") {
      obj.lastName = message.lastName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SignUpRequest>, I>>(base?: I): SignUpRequest {
    return SignUpRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SignUpRequest>, I>>(object: I): SignUpRequest {
    const message = createBaseSignUpRequest();
    message.email = object.email ?? "";
    message.password = object.password ?? "";
    message.firstName = object.firstName ?? "";
    message.lastName = object.lastName ?? "";
    return message;
  },
};

function createBaseSignUpResponse(): SignUpResponse {
  return { message: "", status: 0 };
}

export const SignUpResponse: MessageFns<SignUpResponse> = {
  encode(message: SignUpResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SignUpResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignUpResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.message = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.status = reader.int32() as any;
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

  fromJSON(object: any): SignUpResponse {
    return {
      message: isSet(object.message) ? globalThis.String(object.message) : "",
      status: isSet(object.status) ? statusFromJSON(object.status) : 0,
    };
  },

  toJSON(message: SignUpResponse): unknown {
    const obj: any = {};
    if (message.message !== "") {
      obj.message = message.message;
    }
    if (message.status !== 0) {
      obj.status = statusToJSON(message.status);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SignUpResponse>, I>>(base?: I): SignUpResponse {
    return SignUpResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SignUpResponse>, I>>(object: I): SignUpResponse {
    const message = createBaseSignUpResponse();
    message.message = object.message ?? "";
    message.status = object.status ?? 0;
    return message;
  },
};

function createBaseForgottenPasswordRequest(): ForgottenPasswordRequest {
  return { email: "" };
}

export const ForgottenPasswordRequest: MessageFns<ForgottenPasswordRequest> = {
  encode(message: ForgottenPasswordRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.email !== "") {
      writer.uint32(10).string(message.email);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ForgottenPasswordRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseForgottenPasswordRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.email = reader.string();
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

  fromJSON(object: any): ForgottenPasswordRequest {
    return { email: isSet(object.email) ? globalThis.String(object.email) : "" };
  },

  toJSON(message: ForgottenPasswordRequest): unknown {
    const obj: any = {};
    if (message.email !== "") {
      obj.email = message.email;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ForgottenPasswordRequest>, I>>(base?: I): ForgottenPasswordRequest {
    return ForgottenPasswordRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ForgottenPasswordRequest>, I>>(object: I): ForgottenPasswordRequest {
    const message = createBaseForgottenPasswordRequest();
    message.email = object.email ?? "";
    return message;
  },
};

function createBaseForgottenPasswordResponse(): ForgottenPasswordResponse {
  return { status: 0, message: "" };
}

export const ForgottenPasswordResponse: MessageFns<ForgottenPasswordResponse> = {
  encode(message: ForgottenPasswordResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ForgottenPasswordResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseForgottenPasswordResponse();
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

  fromJSON(object: any): ForgottenPasswordResponse {
    return {
      status: isSet(object.status) ? statusFromJSON(object.status) : 0,
      message: isSet(object.message) ? globalThis.String(object.message) : "",
    };
  },

  toJSON(message: ForgottenPasswordResponse): unknown {
    const obj: any = {};
    if (message.status !== 0) {
      obj.status = statusToJSON(message.status);
    }
    if (message.message !== "") {
      obj.message = message.message;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ForgottenPasswordResponse>, I>>(base?: I): ForgottenPasswordResponse {
    return ForgottenPasswordResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ForgottenPasswordResponse>, I>>(object: I): ForgottenPasswordResponse {
    const message = createBaseForgottenPasswordResponse();
    message.status = object.status ?? 0;
    message.message = object.message ?? "";
    return message;
  },
};

function createBaseSetNewPasswordRequest(): SetNewPasswordRequest {
  return { password: "", confirmPassword: "" };
}

export const SetNewPasswordRequest: MessageFns<SetNewPasswordRequest> = {
  encode(message: SetNewPasswordRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.password !== "") {
      writer.uint32(10).string(message.password);
    }
    if (message.confirmPassword !== "") {
      writer.uint32(18).string(message.confirmPassword);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SetNewPasswordRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetNewPasswordRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.password = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.confirmPassword = reader.string();
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

  fromJSON(object: any): SetNewPasswordRequest {
    return {
      password: isSet(object.password) ? globalThis.String(object.password) : "",
      confirmPassword: isSet(object.confirmPassword) ? globalThis.String(object.confirmPassword) : "",
    };
  },

  toJSON(message: SetNewPasswordRequest): unknown {
    const obj: any = {};
    if (message.password !== "") {
      obj.password = message.password;
    }
    if (message.confirmPassword !== "") {
      obj.confirmPassword = message.confirmPassword;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SetNewPasswordRequest>, I>>(base?: I): SetNewPasswordRequest {
    return SetNewPasswordRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SetNewPasswordRequest>, I>>(object: I): SetNewPasswordRequest {
    const message = createBaseSetNewPasswordRequest();
    message.password = object.password ?? "";
    message.confirmPassword = object.confirmPassword ?? "";
    return message;
  },
};

function createBaseSetNewPasswordResponse(): SetNewPasswordResponse {
  return { status: 0, message: "" };
}

export const SetNewPasswordResponse: MessageFns<SetNewPasswordResponse> = {
  encode(message: SetNewPasswordResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SetNewPasswordResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetNewPasswordResponse();
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

  fromJSON(object: any): SetNewPasswordResponse {
    return {
      status: isSet(object.status) ? statusFromJSON(object.status) : 0,
      message: isSet(object.message) ? globalThis.String(object.message) : "",
    };
  },

  toJSON(message: SetNewPasswordResponse): unknown {
    const obj: any = {};
    if (message.status !== 0) {
      obj.status = statusToJSON(message.status);
    }
    if (message.message !== "") {
      obj.message = message.message;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SetNewPasswordResponse>, I>>(base?: I): SetNewPasswordResponse {
    return SetNewPasswordResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SetNewPasswordResponse>, I>>(object: I): SetNewPasswordResponse {
    const message = createBaseSetNewPasswordResponse();
    message.status = object.status ?? 0;
    message.message = object.message ?? "";
    return message;
  },
};

export type AuthenticationService = typeof AuthenticationService;
export const AuthenticationService = {
  signUp: {
    path: "/authentication.Authentication/SignUp",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: SignUpRequest) => Buffer.from(SignUpRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => SignUpRequest.decode(value),
    responseSerialize: (value: SignUpResponse) => Buffer.from(SignUpResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => SignUpResponse.decode(value),
  },
  login: {
    path: "/authentication.Authentication/Login",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: LoginRequest) => Buffer.from(LoginRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => LoginRequest.decode(value),
    responseSerialize: (value: LoginResponse) => Buffer.from(LoginResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => LoginResponse.decode(value),
  },
  forgottenPassword: {
    path: "/authentication.Authentication/ForgottenPassword",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ForgottenPasswordRequest) => Buffer.from(ForgottenPasswordRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ForgottenPasswordRequest.decode(value),
    responseSerialize: (value: ForgottenPasswordResponse) =>
      Buffer.from(ForgottenPasswordResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ForgottenPasswordResponse.decode(value),
  },
  setNewPassword: {
    path: "/authentication.Authentication/SetNewPassword",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: SetNewPasswordRequest) => Buffer.from(SetNewPasswordRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => SetNewPasswordRequest.decode(value),
    responseSerialize: (value: SetNewPasswordResponse) => Buffer.from(SetNewPasswordResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => SetNewPasswordResponse.decode(value),
  },
} as const;

export interface AuthenticationServer extends UntypedServiceImplementation {
  signUp: handleUnaryCall<SignUpRequest, SignUpResponse>;
  login: handleUnaryCall<LoginRequest, LoginResponse>;
  forgottenPassword: handleUnaryCall<ForgottenPasswordRequest, ForgottenPasswordResponse>;
  setNewPassword: handleUnaryCall<SetNewPasswordRequest, SetNewPasswordResponse>;
}

export interface AuthenticationClient extends Client {
  signUp(
    request: SignUpRequest,
    callback: (error: ServiceError | null, response: SignUpResponse) => void,
  ): ClientUnaryCall;
  signUp(
    request: SignUpRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: SignUpResponse) => void,
  ): ClientUnaryCall;
  signUp(
    request: SignUpRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: SignUpResponse) => void,
  ): ClientUnaryCall;
  login(
    request: LoginRequest,
    callback: (error: ServiceError | null, response: LoginResponse) => void,
  ): ClientUnaryCall;
  login(
    request: LoginRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: LoginResponse) => void,
  ): ClientUnaryCall;
  login(
    request: LoginRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: LoginResponse) => void,
  ): ClientUnaryCall;
  forgottenPassword(
    request: ForgottenPasswordRequest,
    callback: (error: ServiceError | null, response: ForgottenPasswordResponse) => void,
  ): ClientUnaryCall;
  forgottenPassword(
    request: ForgottenPasswordRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ForgottenPasswordResponse) => void,
  ): ClientUnaryCall;
  forgottenPassword(
    request: ForgottenPasswordRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ForgottenPasswordResponse) => void,
  ): ClientUnaryCall;
  setNewPassword(
    request: SetNewPasswordRequest,
    callback: (error: ServiceError | null, response: SetNewPasswordResponse) => void,
  ): ClientUnaryCall;
  setNewPassword(
    request: SetNewPasswordRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: SetNewPasswordResponse) => void,
  ): ClientUnaryCall;
  setNewPassword(
    request: SetNewPasswordRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: SetNewPasswordResponse) => void,
  ): ClientUnaryCall;
}

export const AuthenticationClient = makeGenericClientConstructor(
  AuthenticationService,
  "authentication.Authentication",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): AuthenticationClient;
  service: typeof AuthenticationService;
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
