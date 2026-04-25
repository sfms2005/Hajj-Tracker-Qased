/// Represents a single supplication (Dua).
///
/// `isFavorite` is informational on the model itself; the source of truth
/// for favorites lives in [FavoritesService] (backed by shared_preferences).
class Dua {
  final String id;
  final String text;
  final String category;
  final bool isFavorite;

  const Dua({
    required this.id,
    required this.text,
    required this.category,
    this.isFavorite = false,
  });

  Dua copyWith({String? id, String? text, String? category, bool? isFavorite}) {
    return Dua(
      id: id ?? this.id,
      text: text ?? this.text,
      category: category ?? this.category,
      isFavorite: isFavorite ?? this.isFavorite,
    );
  }

  @override
  bool operator ==(Object other) =>
      identical(this, other) || (other is Dua && other.id == id);

  @override
  int get hashCode => id.hashCode;
}
