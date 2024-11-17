// Generated by the protocol buffer compiler.  DO NOT EDIT!
// NO CHECKED-IN PROTOBUF GENCODE
// source: health_check.proto
// Protobuf C++ Version: 5.28.3

#ifndef GOOGLE_PROTOBUF_INCLUDED_health_5fcheck_2eproto_2epb_2eh
#define GOOGLE_PROTOBUF_INCLUDED_health_5fcheck_2eproto_2epb_2eh

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
#include "google/protobuf/generated_message_bases.h"
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

#define PROTOBUF_INTERNAL_EXPORT_health_5fcheck_2eproto

namespace google {
namespace protobuf {
namespace internal {
class AnyMetadata;
}  // namespace internal
}  // namespace protobuf
}  // namespace google

// Internal implementation detail -- do not use these members.
struct TableStruct_health_5fcheck_2eproto {
  static const ::uint32_t offsets[];
};
extern const ::google::protobuf::internal::DescriptorTable
    descriptor_table_health_5fcheck_2eproto;
namespace health_check {
class HealthCheckRequest;
struct HealthCheckRequestDefaultTypeInternal;
extern HealthCheckRequestDefaultTypeInternal _HealthCheckRequest_default_instance_;
class HealthCheckResponse;
struct HealthCheckResponseDefaultTypeInternal;
extern HealthCheckResponseDefaultTypeInternal _HealthCheckResponse_default_instance_;
}  // namespace health_check
namespace google {
namespace protobuf {
}  // namespace protobuf
}  // namespace google

namespace health_check {
enum Status : int {
  Ok = 0,
  Bad = 1,
  Status_INT_MIN_SENTINEL_DO_NOT_USE_ =
      std::numeric_limits<::int32_t>::min(),
  Status_INT_MAX_SENTINEL_DO_NOT_USE_ =
      std::numeric_limits<::int32_t>::max(),
};

bool Status_IsValid(int value);
extern const uint32_t Status_internal_data_[];
constexpr Status Status_MIN = static_cast<Status>(0);
constexpr Status Status_MAX = static_cast<Status>(1);
constexpr int Status_ARRAYSIZE = 1 + 1;
const ::google::protobuf::EnumDescriptor*
Status_descriptor();
template <typename T>
const std::string& Status_Name(T value) {
  static_assert(std::is_same<T, Status>::value ||
                    std::is_integral<T>::value,
                "Incorrect type passed to Status_Name().");
  return Status_Name(static_cast<Status>(value));
}
template <>
inline const std::string& Status_Name(Status value) {
  return ::google::protobuf::internal::NameOfDenseEnum<Status_descriptor,
                                                 0, 1>(
      static_cast<int>(value));
}
inline bool Status_Parse(absl::string_view name, Status* value) {
  return ::google::protobuf::internal::ParseNamedEnum<Status>(
      Status_descriptor(), name, value);
}

// ===================================================================


// -------------------------------------------------------------------

class HealthCheckResponse final : public ::google::protobuf::Message
/* @@protoc_insertion_point(class_definition:health_check.HealthCheckResponse) */ {
 public:
  inline HealthCheckResponse() : HealthCheckResponse(nullptr) {}
  ~HealthCheckResponse() PROTOBUF_FINAL;
  template <typename = void>
  explicit PROTOBUF_CONSTEXPR HealthCheckResponse(
      ::google::protobuf::internal::ConstantInitialized);

  inline HealthCheckResponse(const HealthCheckResponse& from) : HealthCheckResponse(nullptr, from) {}
  inline HealthCheckResponse(HealthCheckResponse&& from) noexcept
      : HealthCheckResponse(nullptr, std::move(from)) {}
  inline HealthCheckResponse& operator=(const HealthCheckResponse& from) {
    CopyFrom(from);
    return *this;
  }
  inline HealthCheckResponse& operator=(HealthCheckResponse&& from) noexcept {
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
  static const HealthCheckResponse& default_instance() {
    return *internal_default_instance();
  }
  static inline const HealthCheckResponse* internal_default_instance() {
    return reinterpret_cast<const HealthCheckResponse*>(
        &_HealthCheckResponse_default_instance_);
  }
  static constexpr int kIndexInFileMessages = 1;
  friend void swap(HealthCheckResponse& a, HealthCheckResponse& b) { a.Swap(&b); }
  inline void Swap(HealthCheckResponse* other) {
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
  void UnsafeArenaSwap(HealthCheckResponse* other) {
    if (other == this) return;
    ABSL_DCHECK(GetArena() == other->GetArena());
    InternalSwap(other);
  }

  // implements Message ----------------------------------------------

  HealthCheckResponse* New(::google::protobuf::Arena* arena = nullptr) const PROTOBUF_FINAL {
    return ::google::protobuf::Message::DefaultConstruct<HealthCheckResponse>(arena);
  }
  using ::google::protobuf::Message::CopyFrom;
  void CopyFrom(const HealthCheckResponse& from);
  using ::google::protobuf::Message::MergeFrom;
  void MergeFrom(const HealthCheckResponse& from) { HealthCheckResponse::MergeImpl(*this, from); }

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
  void InternalSwap(HealthCheckResponse* other);
 private:
  friend class ::google::protobuf::internal::AnyMetadata;
  static ::absl::string_view FullMessageName() { return "health_check.HealthCheckResponse"; }

 protected:
  explicit HealthCheckResponse(::google::protobuf::Arena* arena);
  HealthCheckResponse(::google::protobuf::Arena* arena, const HealthCheckResponse& from);
  HealthCheckResponse(::google::protobuf::Arena* arena, HealthCheckResponse&& from) noexcept
      : HealthCheckResponse(arena) {
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
    kStatusFieldNumber = 1,
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
  // .health_check.Status status = 1;
  void clear_status() ;
  ::health_check::Status status() const;
  void set_status(::health_check::Status value);

  private:
  ::health_check::Status _internal_status() const;
  void _internal_set_status(::health_check::Status value);

  public:
  // @@protoc_insertion_point(class_scope:health_check.HealthCheckResponse)
 private:
  class _Internal;
  friend class ::google::protobuf::internal::TcParser;
  static const ::google::protobuf::internal::TcParseTable<
      1, 2, 0,
      48, 2>
      _table_;

  static constexpr const void* _raw_default_instance_ =
      &_HealthCheckResponse_default_instance_;

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
                          const HealthCheckResponse& from_msg);
    ::google::protobuf::internal::ArenaStringPtr message_;
    int status_;
    mutable ::google::protobuf::internal::CachedSize _cached_size_;
    PROTOBUF_TSAN_DECLARE_MEMBER
  };
  union { Impl_ _impl_; };
  friend struct ::TableStruct_health_5fcheck_2eproto;
};
// -------------------------------------------------------------------

class HealthCheckRequest final : public ::google::protobuf::internal::ZeroFieldsBase
/* @@protoc_insertion_point(class_definition:health_check.HealthCheckRequest) */ {
 public:
  inline HealthCheckRequest() : HealthCheckRequest(nullptr) {}
  template <typename = void>
  explicit PROTOBUF_CONSTEXPR HealthCheckRequest(
      ::google::protobuf::internal::ConstantInitialized);

  inline HealthCheckRequest(const HealthCheckRequest& from) : HealthCheckRequest(nullptr, from) {}
  inline HealthCheckRequest(HealthCheckRequest&& from) noexcept
      : HealthCheckRequest(nullptr, std::move(from)) {}
  inline HealthCheckRequest& operator=(const HealthCheckRequest& from) {
    CopyFrom(from);
    return *this;
  }
  inline HealthCheckRequest& operator=(HealthCheckRequest&& from) noexcept {
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
  static const HealthCheckRequest& default_instance() {
    return *internal_default_instance();
  }
  static inline const HealthCheckRequest* internal_default_instance() {
    return reinterpret_cast<const HealthCheckRequest*>(
        &_HealthCheckRequest_default_instance_);
  }
  static constexpr int kIndexInFileMessages = 0;
  friend void swap(HealthCheckRequest& a, HealthCheckRequest& b) { a.Swap(&b); }
  inline void Swap(HealthCheckRequest* other) {
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
  void UnsafeArenaSwap(HealthCheckRequest* other) {
    if (other == this) return;
    ABSL_DCHECK(GetArena() == other->GetArena());
    InternalSwap(other);
  }

  // implements Message ----------------------------------------------

  HealthCheckRequest* New(::google::protobuf::Arena* arena = nullptr) const PROTOBUF_FINAL {
    return ::google::protobuf::internal::ZeroFieldsBase::DefaultConstruct<HealthCheckRequest>(arena);
  }
  using ::google::protobuf::internal::ZeroFieldsBase::CopyFrom;
  inline void CopyFrom(const HealthCheckRequest& from) {
    ::google::protobuf::internal::ZeroFieldsBase::CopyImpl(*this, from);
  }
  using ::google::protobuf::internal::ZeroFieldsBase::MergeFrom;
  void MergeFrom(const HealthCheckRequest& from) {
    ::google::protobuf::internal::ZeroFieldsBase::MergeImpl(*this, from);
  }

  public:
  bool IsInitialized() const {
    return true;
  }
 private:
  friend class ::google::protobuf::internal::AnyMetadata;
  static ::absl::string_view FullMessageName() { return "health_check.HealthCheckRequest"; }

 protected:
  explicit HealthCheckRequest(::google::protobuf::Arena* arena);
  HealthCheckRequest(::google::protobuf::Arena* arena, const HealthCheckRequest& from);
  HealthCheckRequest(::google::protobuf::Arena* arena, HealthCheckRequest&& from) noexcept
      : HealthCheckRequest(arena) {
    *this = ::std::move(from);
  }
  const ::google::protobuf::internal::ZeroFieldsBase::ClassData* GetClassData() const PROTOBUF_FINAL;
  static const ::google::protobuf::internal::ZeroFieldsBase::ClassDataFull _class_data_;

 public:
  ::google::protobuf::Metadata GetMetadata() const;
  // nested types ----------------------------------------------------

  // accessors -------------------------------------------------------
  // @@protoc_insertion_point(class_scope:health_check.HealthCheckRequest)
 private:
  class _Internal;
  friend class ::google::protobuf::internal::TcParser;
  static const ::google::protobuf::internal::TcParseTable<
      0, 0, 0,
      0, 2>
      _table_;

  static constexpr const void* _raw_default_instance_ =
      &_HealthCheckRequest_default_instance_;

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
                          const HealthCheckRequest& from_msg);
    PROTOBUF_TSAN_DECLARE_MEMBER
  };
  friend struct ::TableStruct_health_5fcheck_2eproto;
};

// ===================================================================




// ===================================================================


#ifdef __GNUC__
#pragma GCC diagnostic push
#pragma GCC diagnostic ignored "-Wstrict-aliasing"
#endif  // __GNUC__
// -------------------------------------------------------------------

// HealthCheckRequest

// -------------------------------------------------------------------

// HealthCheckResponse

// .health_check.Status status = 1;
inline void HealthCheckResponse::clear_status() {
  ::google::protobuf::internal::TSanWrite(&_impl_);
  _impl_.status_ = 0;
}
inline ::health_check::Status HealthCheckResponse::status() const {
  // @@protoc_insertion_point(field_get:health_check.HealthCheckResponse.status)
  return _internal_status();
}
inline void HealthCheckResponse::set_status(::health_check::Status value) {
  _internal_set_status(value);
  // @@protoc_insertion_point(field_set:health_check.HealthCheckResponse.status)
}
inline ::health_check::Status HealthCheckResponse::_internal_status() const {
  ::google::protobuf::internal::TSanRead(&_impl_);
  return static_cast<::health_check::Status>(_impl_.status_);
}
inline void HealthCheckResponse::_internal_set_status(::health_check::Status value) {
  ::google::protobuf::internal::TSanWrite(&_impl_);
  _impl_.status_ = value;
}

// string message = 2;
inline void HealthCheckResponse::clear_message() {
  ::google::protobuf::internal::TSanWrite(&_impl_);
  _impl_.message_.ClearToEmpty();
}
inline const std::string& HealthCheckResponse::message() const
    ABSL_ATTRIBUTE_LIFETIME_BOUND {
  // @@protoc_insertion_point(field_get:health_check.HealthCheckResponse.message)
  return _internal_message();
}
template <typename Arg_, typename... Args_>
inline PROTOBUF_ALWAYS_INLINE void HealthCheckResponse::set_message(Arg_&& arg,
                                                     Args_... args) {
  ::google::protobuf::internal::TSanWrite(&_impl_);
  _impl_.message_.Set(static_cast<Arg_&&>(arg), args..., GetArena());
  // @@protoc_insertion_point(field_set:health_check.HealthCheckResponse.message)
}
inline std::string* HealthCheckResponse::mutable_message() ABSL_ATTRIBUTE_LIFETIME_BOUND {
  std::string* _s = _internal_mutable_message();
  // @@protoc_insertion_point(field_mutable:health_check.HealthCheckResponse.message)
  return _s;
}
inline const std::string& HealthCheckResponse::_internal_message() const {
  ::google::protobuf::internal::TSanRead(&_impl_);
  return _impl_.message_.Get();
}
inline void HealthCheckResponse::_internal_set_message(const std::string& value) {
  ::google::protobuf::internal::TSanWrite(&_impl_);
  _impl_.message_.Set(value, GetArena());
}
inline std::string* HealthCheckResponse::_internal_mutable_message() {
  ::google::protobuf::internal::TSanWrite(&_impl_);
  return _impl_.message_.Mutable( GetArena());
}
inline std::string* HealthCheckResponse::release_message() {
  ::google::protobuf::internal::TSanWrite(&_impl_);
  // @@protoc_insertion_point(field_release:health_check.HealthCheckResponse.message)
  return _impl_.message_.Release();
}
inline void HealthCheckResponse::set_allocated_message(std::string* value) {
  ::google::protobuf::internal::TSanWrite(&_impl_);
  _impl_.message_.SetAllocated(value, GetArena());
  #ifdef PROTOBUF_FORCE_COPY_DEFAULT_STRING
        if (_impl_.message_.IsDefault()) {
          _impl_.message_.Set("", GetArena());
        }
  #endif  // PROTOBUF_FORCE_COPY_DEFAULT_STRING
  // @@protoc_insertion_point(field_set_allocated:health_check.HealthCheckResponse.message)
}

#ifdef __GNUC__
#pragma GCC diagnostic pop
#endif  // __GNUC__

// @@protoc_insertion_point(namespace_scope)
}  // namespace health_check


namespace google {
namespace protobuf {

template <>
struct is_proto_enum<::health_check::Status> : std::true_type {};
template <>
inline const EnumDescriptor* GetEnumDescriptor<::health_check::Status>() {
  return ::health_check::Status_descriptor();
}

}  // namespace protobuf
}  // namespace google

// @@protoc_insertion_point(global_scope)

#include "google/protobuf/port_undef.inc"

#endif  // GOOGLE_PROTOBUF_INCLUDED_health_5fcheck_2eproto_2epb_2eh
