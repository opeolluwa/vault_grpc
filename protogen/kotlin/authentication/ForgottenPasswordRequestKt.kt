// Generated by the protocol buffer compiler. DO NOT EDIT!
// NO CHECKED-IN PROTOBUF GENCODE
// source: authentication.proto

// Generated files should ignore deprecation warnings
@file:Suppress("DEPRECATION")
package authentication;

@kotlin.jvm.JvmName("-initializeforgottenPasswordRequest")
public inline fun forgottenPasswordRequest(block: authentication.ForgottenPasswordRequestKt.Dsl.() -> kotlin.Unit): authentication.AuthenticationOuterClass.ForgottenPasswordRequest =
  authentication.ForgottenPasswordRequestKt.Dsl._create(authentication.AuthenticationOuterClass.ForgottenPasswordRequest.newBuilder()).apply { block() }._build()
/**
 * Protobuf type `authentication.ForgottenPasswordRequest`
 */
public object ForgottenPasswordRequestKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  public class Dsl private constructor(
    private val _builder: authentication.AuthenticationOuterClass.ForgottenPasswordRequest.Builder
  ) {
    public companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: authentication.AuthenticationOuterClass.ForgottenPasswordRequest.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): authentication.AuthenticationOuterClass.ForgottenPasswordRequest = _builder.build()

    /**
     * `string email = 1;`
     */
    public var email: kotlin.String
      @JvmName("getEmail")
      get() = _builder.email
      @JvmName("setEmail")
      set(value) {
        _builder.email = value
      }
    /**
     * `string email = 1;`
     */
    public fun clearEmail() {
      _builder.clearEmail()
    }
  }
}
@kotlin.jvm.JvmSynthetic
public inline fun authentication.AuthenticationOuterClass.ForgottenPasswordRequest.copy(block: `authentication`.ForgottenPasswordRequestKt.Dsl.() -> kotlin.Unit): authentication.AuthenticationOuterClass.ForgottenPasswordRequest =
  `authentication`.ForgottenPasswordRequestKt.Dsl._create(this.toBuilder()).apply { block() }._build()

