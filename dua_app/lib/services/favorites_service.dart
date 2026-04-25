import 'package:flutter/foundation.dart';
import 'package:shared_preferences/shared_preferences.dart';

/// App-wide favorites store, persisted via [SharedPreferences].
///
/// Singleton + [ChangeNotifier] so any widget can observe with
/// `ListenableBuilder` and react instantly across screens.
class FavoritesService extends ChangeNotifier {
  FavoritesService._();
  static final FavoritesService instance = FavoritesService._();

  static const _storageKey = 'favorite_dua_ids';

  final Set<String> _ids = <String>{};
  bool _loaded = false;

  bool get isLoaded => _loaded;

  /// Read-only view of favorite ids.
  Set<String> get ids => Set<String>.unmodifiable(_ids);

  /// Loads persisted favorites. Safe to call multiple times.
  Future<void> load() async {
    if (_loaded) return;
    final prefs = await SharedPreferences.getInstance();
    _ids
      ..clear()
      ..addAll(prefs.getStringList(_storageKey) ?? const <String>[]);
    _loaded = true;
    notifyListeners();
  }

  bool contains(String id) => _ids.contains(id);

  /// Toggles a dua's favorite state. Returns `true` if it was added,
  /// `false` if removed.
  Future<bool> toggle(String id) async {
    final isAdding = !_ids.contains(id);
    if (isAdding) {
      _ids.add(id);
    } else {
      _ids.remove(id);
    }
    notifyListeners();
    final prefs = await SharedPreferences.getInstance();
    await prefs.setStringList(_storageKey, _ids.toList(growable: false));
    return isAdding;
  }

  Future<void> clear() async {
    _ids.clear();
    notifyListeners();
    final prefs = await SharedPreferences.getInstance();
    await prefs.remove(_storageKey);
  }
}
