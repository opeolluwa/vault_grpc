// Generated by the protocol buffer compiler.  DO NOT EDIT!
// NO CHECKED-IN PROTOBUF GENCODE
// source: common.proto
// Protobuf C++ Version: 5.28.3

#ifndef GOOGLE_PROTOBUF_INCLUDED_common_2eproto_2epb_2eh
#define GOOGLE_PROTOBUF_INCLUDED_common_2eproto_2epb_2eh

#include <limits>
#include <string>
#include <type_traits>
#include <utility>

#include "google/protobuf/runtime_version.h"
#if PROTOBUF_VERSION != 5028003
#error "Protobuf C++ gencode is built with an incompatible version of"
#error "Protobuf C++ headers/runtime. See"
#error "https://protobuf.dev/support/cross-version-runtime-guarantee/#cpp"
#endif
#include "google/protobuf/io/coded_stream.h"
#include "google/protobuf/arena.h"
#include "google/protobuf/arenastring.h"
#include "google/protobuf/generated_message_tctable_decl.h"
#include "google/protobuf/generated_message_util.h"
#include "google/protobuf/metadata_lite.h"
#include "google/protobuf/generated_message_reflection.h"
#include "google/protobuf/message.h"
#include "google/protobuf/repeated_field.h"  // IWYU pragma: export
#include "google/protobuf/extension_set.h"  // IWYU pragma: export
#include "google/protobuf/generated_enum_reflection.h"
#include "google/protobuf/unknown_field_set.h"
// @@protoc_insertion_point(includes)

// Must be included last.
#include "google/protobuf/port_def.inc"

#define PROTOBUF_INTERNAL_EXPORT_common_2eproto

namespace google {
namespace protobuf {
namespace internal {
class AnyMetadata;
}  // namespace internal
}  // namespace protobuf
}  // namespace google

// Internal implementation detail -- do not use these members.
struct TableStruct_common_2eproto {
  static const ::uint32_t offsets[];
};
extern const ::google::protobuf::internal::DescriptorTable
    descriptor_table_common_2eproto;
namespace common {
class ErrorResponse;
struct ErrorResponseDefaultTypeInternal;
extern ErrorResponseDefaultTypeInternal _ErrorResponse_default_instance_;
}  // namespace common
namespace google {
namespace protobuf {
}  // namespace protobuf
}  // namespace google

namespace common {
enum RequestStatus : int {
  Success = 0,
  Failed = 1,
  RequestStatus_INT_MIN_SENTINEL_DO_NOT_USE_ =
      std::numeric_limits<::int32_t>::min(),
  RequestStatus_INT_MAX_SENTINEL_DO_NOT_USE_ =
      std::numeric_limits<::int32_t>::max(),
};

bool RequestStatus_IsValid(int value);
extern const uint32_t RequestStatus_internal_data_[];
constexpr RequestStatus RequestStatus_MIN = static_cast<RequestStatus>(0);
constexpr RequestStatus RequestStatus_MAX = static_cast<RequestStatus>(1);
constexpr int RequestStatus_ARRAYSIZE = 1 + 1;
const ::google::protobuf::EnumDescriptor*
RequestStatus_descriptor();
template <typename T>
const std::string& RequestStatus_Name(T value) {
  static_assert(std::is_same<T, RequestStatus>::value ||
                    std::is_integral<T>::value,
                "Incorrect type passed to RequestStatus_Name().");
  return RequestStatus_Name(static_cast<RequestStatus>(value));
}
template <>
inline const std::string& RequestStatus_Name(RequestStatus value) {
  return ::google::protobuf::internal::NameOfDenseEnum<RequestStatus_descriptor,
                                                 0, 1>(
      static_cast<int>(value));
}
inline bool RequestStatus_Parse(absl::string_view name, RequestStatus* value) {
  return ::google::protobuf::internal::ParseNamedEnum<RequestStatus>(
      RequestStatus_descriptor(), name, value);
}

// ===================================================================


// -------------------------------------------------------------------

class ErrorResponse final : public ::google::protobuf::Message
/* @@protoc_insertion_point(class_definition:common.ErrorResponse) */ {
 public:
  inline ErrorResponse() : ErrorResponse(nullptr) {}
  ~ErrorResponse() PROTOBUF_FINAL;
  template <typename = void>
  explicit PROTOBUF_CONSTEXPR ErrorResponse(
      ::google::protobuf::internal::ConstantInitialized);

  inline ErrorResponse(const ErrorResponse& from) : ErrorResponse(nullptr, from) {}
  inline ErrorResponse(ErrorResponse&& from) noexcept
      : ErrorResponse(nullptr, std::move(from)) {}
  inline ErrorResponse& operator=(const ErrorResponse& from) {
    CopyFrom(from);
    return *this;
  }
  inline ErrorResponse& operator=(ErrorResponse&& from) noexcept {
    if (this == &from) return *this;
    if (GetArena() == from.GetArena()
#ifdef PROTOBUF_FORCE_COPY_IN_MOVE
        && GetArena() != nullptr
#endif  // !PROTOBUF_FORCE_COPY_IN_MOVE
    ) {
      InternalSwap(&from);
    } else {
      CopyFrom(from);
    }
    return *this;
  }

  inline const ::google::protobuf::UnknownFieldSet& unknown_fields() const
      ABSL_ATTRIBUTE_LIFETIME_BOUND {
    return _internal_metadata_.unknown_fields<::google::protobuf::UnknownFieldSet>(::google::protobuf::UnknownFieldSet::default_instance);
  }
  inline ::google::protobuf::UnknownFieldSet* mutable_unknown_fields()
      ABSL_ATTRIBUTE_LIFETIME_BOUND {
    return _internal_metadata_.mutable_unknown_fields<::google::protobuf::UnknownFieldSet>();
  }

  static const ::google::protobuf::Descriptor* descriptor() {
    return GetDescriptor();
  }
  static const ::google::protobuf::Descriptor* GetDescriptor() {
    return default_instance().GetMetadata().descriptor;
  }
  static const ::google::protobuf::Reflection* GetReflection() {
    return default_instance().GetMetadata().reflection;
  }
  static const ErrorResponse& default_instance() {
    return *internal_default_instance();
  }
  static inline const ErrorResponse* internal_default_instance() {
    return reinterpret_cast<const ErrorResponse*>(
        &_ErrorResponse_default_instance_);
  }
  static constexpr int kIndexInFileMessages = 0;
  friend void swap(ErrorResponse& a, ErrorResponse& b) { a.Swap(&b); }
  inline void Swap(ErrorResponse* other) {
    if (other == this) return;
#ifdef PROTOBUF_FORCE_COPY_IN_SWAP
    if (GetArena() != nullptr && GetArena() == other->GetArena()) {
#else   // PROTOBUF_FORCE_COPY_IN_SWAP
    if (GetArena() == other->GetArena()) {
#endif  // !PROTOBUF_FORCE_COPY_IN_SWAP
      InternalSwap(other);
    } else {
      ::google::protobuf::internal::GenericSwap(this, other);
    }
  }
  void UnsafeArenaSwap(ErrorResponse* other) {
    if (other == this) return;
    ABSL_DCHECK(GetArena() == other->GetArena());
    InternalSwap(other);
  }

  // implements Message ----------------------------------------------

  ErrorResponse* New(::google::protobuf::Arena* arena = nullptr) const PROTOBUF_FINAL {
    return ::google::protobuf::Message::DefaultConstruct<ErrorResponse>(arena);
  }
  using ::google::protobuf::Message::CopyFrom;
  void CopyFrom(const ErrorResponse& from);
  using ::google::protobuf::Message::MergeFrom;
  void MergeFrom(const ErrorResponse& from) { ErrorResponse::MergeImpl(*this, from); }

  private:
  static void MergeImpl(
      ::google::protobuf::MessageLite& to_msg,
      const ::google::protobuf::MessageLite& from_msg);

  public:
  bool IsInitialized() const {
    return true;
  }
  ABSL_ATTRIBUTE_REINITIALIZES void Clear() PROTOBUF_FINAL;
  #if defined(PROTOBUF_CUSTOM_VTABLE)
  private:
  static ::size_t ByteSizeLong(const ::google::protobuf::MessageLite& msg);
  static ::uint8_t* _InternalSerialize(
      const MessageLite& msg, ::uint8_t* target,
      ::google::protobuf::io::EpsCopyOutputStream* stream);

  public:
  ::size_t ByteSizeLong() const { return ByteSizeLong(*this); }
  ::uint8_t* _InternalSerialize(
      ::uint8_t* target,
      ::google::protobuf::io::EpsCopyOutputStream* stream) const {
    return _InternalSerialize(*this, target, stream);
  }
  #else   // PROTOBUF_CUSTOM_VTABLE
  ::size_t ByteSizeLong() const final;
  ::uint8_t* _InternalSerialize(
      ::uint8_t* target,
      ::google::protobuf::io::EpsCopyOutputStream* stream) const final;
  #endif  // PROTOBUF_CUSTOM_VTABLE
  int GetCachedSize() const { return _impl_._cached_size_.Get(); }

  private:
  void SharedCtor(::google::protobuf::Arena* arena);
  void SharedDtor();
  void InternalSwap(ErrorResponse* other);
 private:
  friend class ::google::protobuf::internal::AnyMetadata;
  static ::absl::string_view FullMessageName() { return "common.ErrorResponse"; }

 protected:
  explicit ErrorResponse(::google::protobuf::Arena* arena);
  ErrorResponse(::google::protobuf::Arena* arena, const ErrorResponse& from);
  ErrorResponse(::google::protobuf::Arena* arena, ErrorResponse&& from) noexcept
      : ErrorResponse(arena) {
    *this = ::std::move(from);
  }
  const ::google::protobuf::Message::ClassData* GetClassData() const PROTOBUF_FINAL;
  static const ::google::protobuf::Message::ClassDataFull _class_data_;

 public:
  ::google::protobuf::Metadata GetMetadata() const;
  // nested types ----------------------------------------------------

  // accessors -------------------------------------------------------
  enum : int {
    kMessageFieldNumber = 2,
    kCodeFieldNumber = 1,
  };
  // string message = 2;
  void clear_message() ;
  const std::string& message() const;
  template <typename Arg_ = const std::string&, typename... Args_>
  void set_message(Arg_&& arg, Args_... args);
  std::string* mutable_message();
  PROTOBUF_NODISCARD std::string* release_message();
  void set_allocated_message(std::string* value);

  private:
  const std::string& _internal_message() const;
  inline PROTOBUF_ALWAYS_INLINE void _internal_set_message(
      const std::string& value);
  std::string* _internal_mutable_message();

  public:
  // int32 code = 1;
  void clear_code() ;
  ::int32_t code() const;
  void set_code(::int32_t value);

  private:
  ::int32_t _internal_code() const;
  void _internal_set_code(::int32_t value);

  public:
  // @@protoc_insertion_point(class_scope:common.ErrorResponse)
 private:
  class _Internal;
  friend class ::google::protobuf::internal::TcParser;
  static const ::google::protobuf::internal::TcParseTable<
      1, 2, 0,
      36, 2>
      _table_;

  static constexpr const void* _raw_default_instance_ =
      &_ErrorResponse_default_instance_;

  friend class ::google::protobuf::MessageLite;
  friend class ::google::protobuf::Arena;
  template <typename T>
  friend class ::google::protobuf::Arena::InternalHelper;
  using InternalArenaConstructable_ = void;
  using DestructorSkippable_ = void;
  struct Impl_ {
    inline explicit constexpr Impl_(
        ::google::protobuf::internal::ConstantInitialized) noexcept;
    inline explicit Impl_(::google::protobuf::internal::InternalVisibility visibility,
                          ::google::protobuf::Arena* arena);
    inline explicit Impl_(::google::protobuf::internal::InternalVisibility visibility,
                          ::google::protobuf::Arena* arena, const Impl_& from,
                          const ErrorResponse& from_msg);
    ::google::protobuf::internal::ArenaStringPtr message_;
    ::int32_t code_;
    mutable ::google::protobuf::internal::CachedSize _cached_size_;
    PROTOBUF_TSAN_DECLARE_MEMBER
  };
  union { Impl_ _impl_; };
  friend struct ::TableStruct_common_2eproto;
};

// ===================================================================




// ===================================================================


#ifdef __GNUC__
#pragma GCC diagnostic push
#pragma GCC diagnostic ignored "-Wstrict-aliasing"
#endif  // __GNUC__
// -------------------------------------------------------------------

// ErrorResponse

// int32 code = 1;
inline void ErrorResponse::clear_code() {
  ::google::protobuf::internal::TSanWrite(&_impl_);
  _impl_.code_ = 0;
}
inline ::int32_t ErrorResponse::code() const {
  // @@protoc_insertion_point(field_get:common.ErrorResponse.code)
  return _internal_code();
}
inline void ErrorResponse::set_code(::int32_t value) {
  _internal_set_code(value);
  // @@protoc_insertion_point(field_set:common.ErrorResponse.code)
}
inline ::int32_t ErrorResponse::_internal_code() const {
  ::google::protobuf::internal::TSanRead(&_impl_);
  return _impl_.code_;
}
inline void ErrorResponse::_internal_set_code(::int32_t value) {
  ::google::protobuf::internal::TSanWrite(&_impl_);
  _impl_.code_ = value;
}

// string message = 2;
inline void ErrorResponse::clear_message() {
  ::google::protobuf::internal::TSanWrite(&_impl_);
  _impl_.message_.ClearToEmpty();
}
inline const std::string& ErrorResponse::message() const
    ABSL_ATTRIBUTE_LIFETIME_BOUND {
  // @@protoc_insertion_point(field_get:common.ErrorResponse.message)
  return _internal_message();
}
template <typename Arg_, typename... Args_>
inline PROTOBUF_ALWAYS_INLINE void ErrorResponse::set_message(Arg_&& arg,
                                                     Args_... args) {
  ::google::protobuf::internal::TSanWrite(&_impl_);
  _impl_.message_.Set(static_cast<Arg_&&>(arg), args..., GetArena());
  // @@protoc_insertion_point(field_set:common.ErrorResponse.message)
}
inline std::string* ErrorResponse::mutable_message() ABSL_ATTRIBUTE_LIFETIME_BOUND {
  std::string* _s = _internal_mutable_message();
  // @@protoc_insertion_point(field_mutable:common.ErrorResponse.message)
  return _s;
}
inline const std::string& ErrorResponse::_internal_message() const {
  ::google::protobuf::internal::TSanRead(&_impl_);
  return _impl_.message_.Get();
}
inline void ErrorResponse::_internal_set_message(const std::string& value) {
  ::google::protobuf::internal::TSanWrite(&_impl_);
  _impl_.message_.Set(value, GetArena());
}
inline std::string* ErrorResponse::_internal_mutable_message() {
  ::google::protobuf::internal::TSanWrite(&_impl_);
  return _impl_.message_.Mutable( GetArena());
}
inline std::string* ErrorResponse::release_message() {
  ::google::protobuf::internal::TSanWrite(&_impl_);
  // @@protoc_insertion_point(field_release:common.ErrorResponse.message)
  return _impl_.message_.Release();
}
inline void ErrorResponse::set_allocated_message(std::string* value) {
  ::google::protobuf::internal::TSanWrite(&_impl_);
  _impl_.message_.SetAllocated(value, GetArena());
  #ifdef PROTOBUF_FORCE_COPY_DEFAULT_STRING
        if (_impl_.message_.IsDefault()) {
          _impl_.message_.Set("", GetArena());
        }
  #endif  // PROTOBUF_FORCE_COPY_DEFAULT_STRING
  // @@protoc_insertion_point(field_set_allocated:common.ErrorResponse.message)
}

#ifdef __GNUC__
#pragma GCC diagnostic pop
#endif  // __GNUC__

// @@protoc_insertion_point(namespace_scope)
}  // namespace common


namespace google {
namespace protobuf {

template <>
struct is_proto_enum<::common::RequestStatus> : std::true_type {};
template <>
inline const EnumDescriptor* GetEnumDescriptor<::common::RequestStatus>() {
  return ::common::RequestStatus_descriptor();
}

}  // namespace protobuf
}  // namespace google

// @@protoc_insertion_point(global_scope)

#include "google/protobuf/port_undef.inc"

#endif  // GOOGLE_PROTOBUF_INCLUDED_common_2eproto_2epb_2eh
