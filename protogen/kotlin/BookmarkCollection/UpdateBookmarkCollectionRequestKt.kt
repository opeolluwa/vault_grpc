// Generated by the protocol buffer compiler. DO NOT EDIT!
// NO CHECKED-IN PROTOBUF GENCODE
// source: bookmark_collections.proto

// Generated files should ignore deprecation warnings
@file:Suppress("DEPRECATION")
package BookmarkCollection;

@kotlin.jvm.JvmName("-initializeupdateBookmarkCollectionRequest")
public inline fun updateBookmarkCollectionRequest(block: BookmarkCollection.UpdateBookmarkCollectionRequestKt.Dsl.() -> kotlin.Unit): BookmarkCollection.BookmarkCollections.UpdateBookmarkCollectionRequest =
  BookmarkCollection.UpdateBookmarkCollectionRequestKt.Dsl._create(BookmarkCollection.BookmarkCollections.UpdateBookmarkCollectionRequest.newBuilder()).apply { block() }._build()
/**
 * Protobuf type `BookmarkCollection.UpdateBookmarkCollectionRequest`
 */
public object UpdateBookmarkCollectionRequestKt {
  @kotlin.OptIn(com.google.protobuf.kotlin.OnlyForUseByGeneratedProtoCode::class)
  @com.google.protobuf.kotlin.ProtoDslMarker
  public class Dsl private constructor(
    private val _builder: BookmarkCollection.BookmarkCollections.UpdateBookmarkCollectionRequest.Builder
  ) {
    public companion object {
      @kotlin.jvm.JvmSynthetic
      @kotlin.PublishedApi
      internal fun _create(builder: BookmarkCollection.BookmarkCollections.UpdateBookmarkCollectionRequest.Builder): Dsl = Dsl(builder)
    }

    @kotlin.jvm.JvmSynthetic
    @kotlin.PublishedApi
    internal fun _build(): BookmarkCollection.BookmarkCollections.UpdateBookmarkCollectionRequest = _builder.build()

    /**
     * `string BookmarkCollection_id = 1;`
     */
    public var bookmarkCollectionId: kotlin.String
      @JvmName("getBookmarkCollectionId")
      get() = _builder.bookmarkCollectionId
      @JvmName("setBookmarkCollectionId")
      set(value) {
        _builder.bookmarkCollectionId = value
      }
    /**
     * `string BookmarkCollection_id = 1;`
     */
    public fun clearBookmarkCollectionId() {
      _builder.clearBookmarkCollectionId()
    }

    /**
     * `optional string name = 2;`
     */
    public var name: kotlin.String
      @JvmName("getName")
      get() = _builder.name
      @JvmName("setName")
      set(value) {
        _builder.name = value
      }
    /**
     * `optional string name = 2;`
     */
    public fun clearName() {
      _builder.clearName()
    }
    /**
     * `optional string name = 2;`
     * @return Whether the name field is set.
     */
    public fun hasName(): kotlin.Boolean {
      return _builder.hasName()
    }

    /**
     * `optional string description = 3;`
     */
    public var description: kotlin.String
      @JvmName("getDescription")
      get() = _builder.description
      @JvmName("setDescription")
      set(value) {
        _builder.description = value
      }
    /**
     * `optional string description = 3;`
     */
    public fun clearDescription() {
      _builder.clearDescription()
    }
    /**
     * `optional string description = 3;`
     * @return Whether the description field is set.
     */
    public fun hasDescription(): kotlin.Boolean {
      return _builder.hasDescription()
    }
  }
}
@kotlin.jvm.JvmSynthetic
public inline fun BookmarkCollection.BookmarkCollections.UpdateBookmarkCollectionRequest.copy(block: `BookmarkCollection`.UpdateBookmarkCollectionRequestKt.Dsl.() -> kotlin.Unit): BookmarkCollection.BookmarkCollections.UpdateBookmarkCollectionRequest =
  `BookmarkCollection`.UpdateBookmarkCollectionRequestKt.Dsl._create(this.toBuilder()).apply { block() }._build()

