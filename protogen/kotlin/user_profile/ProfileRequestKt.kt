// Generated by the protocol buffer compiler. DO NOT EDIT!
// NO CHECKED-IN PROTOBUF GENCODE
// source: user_profile.proto

// Generated files should ignore deprecation warnings
@file:Suppress("DEPRECATION")
package user_profile;

@kotlin.jvm.JvmName("-initializeprofileRequest")
public inline fun profileRequest(block: user_profile.ProfileRequestKt.Dsl.() -> kotlin.Unit): user_profile.UserProfileOuterClass.ProfileRequest =
  user_profile.ProfileRequestKt.Dsl._create(user_profile.UserProfileOuterClass.ProfileRequest.newBuilder()).apply { block() }._build()
/**
 * Protobuf type `user_profile.ProfileRequest`
 */
public object ProfileRequestKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  public class Dsl private constructor(
    private val _builder: user_profile.UserProfileOuterClass.ProfileRequest.Builder
  ) {
    public companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: user_profile.UserProfileOuterClass.ProfileRequest.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): user_profile.UserProfileOuterClass.ProfileRequest = _builder.build()
  }
}
@kotlin.jvm.JvmSynthetic
public inline fun user_profile.UserProfileOuterClass.ProfileRequest.copy(block: `user_profile`.ProfileRequestKt.Dsl.() -> kotlin.Unit): user_profile.UserProfileOuterClass.ProfileRequest =
  `user_profile`.ProfileRequestKt.Dsl._create(this.toBuilder()).apply { block() }._build()

