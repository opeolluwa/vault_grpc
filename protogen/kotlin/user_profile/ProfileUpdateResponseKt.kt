// Generated by the protocol buffer compiler. DO NOT EDIT!
// NO CHECKED-IN PROTOBUF GENCODE
// source: user_profile.proto

// Generated files should ignore deprecation warnings
@file:Suppress("DEPRECATION")
package user_profile;

@kotlin.jvm.JvmName("-initializeprofileUpdateResponse")
public inline fun profileUpdateResponse(block: user_profile.ProfileUpdateResponseKt.Dsl.() -> kotlin.Unit): user_profile.UserProfileOuterClass.ProfileUpdateResponse =
  user_profile.ProfileUpdateResponseKt.Dsl._create(user_profile.UserProfileOuterClass.ProfileUpdateResponse.newBuilder()).apply { block() }._build()
/**
 * Protobuf type `user_profile.ProfileUpdateResponse`
 */
public object ProfileUpdateResponseKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  public class Dsl private constructor(
    private val _builder: user_profile.UserProfileOuterClass.ProfileUpdateResponse.Builder
  ) {
    public companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: user_profile.UserProfileOuterClass.ProfileUpdateResponse.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): user_profile.UserProfileOuterClass.ProfileUpdateResponse = _builder.build()

    /**
     * `string id = 1;`
     */
    public var id: kotlin.String
      @JvmName("getId")
      get() = _builder.id
      @JvmName("setId")
      set(value) {
        _builder.id = value
      }
    /**
     * `string id = 1;`
     */
    public fun clearId() {
      _builder.clearId()
    }

    /**
     * `string last_name = 2;`
     */
    public var lastName: kotlin.String
      @JvmName("getLastName")
      get() = _builder.lastName
      @JvmName("setLastName")
      set(value) {
        _builder.lastName = value
      }
    /**
     * `string last_name = 2;`
     */
    public fun clearLastName() {
      _builder.clearLastName()
    }

    /**
     * `string first_name = 3;`
     */
    public var firstName: kotlin.String
      @JvmName("getFirstName")
      get() = _builder.firstName
      @JvmName("setFirstName")
      set(value) {
        _builder.firstName = value
      }
    /**
     * `string first_name = 3;`
     */
    public fun clearFirstName() {
      _builder.clearFirstName()
    }

    /**
     * `string email = 4;`
     */
    public var email: kotlin.String
      @JvmName("getEmail")
      get() = _builder.email
      @JvmName("setEmail")
      set(value) {
        _builder.email = value
      }
    /**
     * `string email = 4;`
     */
    public fun clearEmail() {
      _builder.clearEmail()
    }
  }
}
@kotlin.jvm.JvmSynthetic
public inline fun user_profile.UserProfileOuterClass.ProfileUpdateResponse.copy(block: `user_profile`.ProfileUpdateResponseKt.Dsl.() -> kotlin.Unit): user_profile.UserProfileOuterClass.ProfileUpdateResponse =
  `user_profile`.ProfileUpdateResponseKt.Dsl._create(this.toBuilder()).apply { block() }._build()

