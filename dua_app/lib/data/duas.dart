import 'dart:math';

import '../models/dua.dart';

/// Canonical category keys + their Arabic display names.
class DuaCategory {
  static const all = 'All';
  static const general = 'General';
  static const arafah = 'Arafah';
  static const forgiveness = 'Forgiveness';
  static const rizq = 'Rizq';
  static const comfort = 'Comfort';
  static const family = 'Family';
  static const short = 'Short';

  /// Order matters — used to render chips.
  static const List<String> values = [
    general,
    arafah,
    forgiveness,
    rizq,
    comfort,
    family,
    short,
  ];

  static const Map<String, String> arabicNames = {
    all: 'الكل',
    general: 'عامة',
    arafah: 'عرفة',
    forgiveness: 'الاستغفار',
    rizq: 'الرزق',
    comfort: 'الطمأنينة',
    family: 'الأهل',
    short: 'قصيرة',
  };

  static String displayName(String key) => arabicNames[key] ?? key;
}

/// Predefined catalog of duas.
const List<Dua> duas = [
  // ─── General ─────────────────────────────────────────────
  Dua(
    id: 'g1',
    category: DuaCategory.general,
    text:
        'ربنا آتنا في الدنيا حسنة وفي الآخرة حسنة وقنا عذاب النار',
  ),
  Dua(
    id: 'g2',
    category: DuaCategory.general,
    text:
        'اللهم إني أسألك من الخير كله عاجله وآجله، ما علمت منه وما لم أعلم',
  ),
  Dua(
    id: 'g3',
    category: DuaCategory.general,
    text: 'اللهم اجعلنا من عبادك المخلصين، وأصلح لنا شأننا كله',
  ),
  Dua(
    id: 'g4',
    category: DuaCategory.general,
    text:
        'اللهم إني أسألك العافية في الدنيا والآخرة، اللهم إني أسألك العفو والعافية في ديني ودنياي وأهلي ومالي',
  ),

  // ─── Arafah ──────────────────────────────────────────────
  Dua(
    id: 'a1',
    category: DuaCategory.arafah,
    text:
        'لا إله إلا الله وحده لا شريك له، له الملك وله الحمد، وهو على كل شيء قدير',
  ),
  Dua(
    id: 'a2',
    category: DuaCategory.arafah,
    text: 'اللهم إنك عفو تحب العفو فاعف عني',
  ),
  Dua(
    id: 'a3',
    category: DuaCategory.arafah,
    text: 'اللهم إني أسألك الجنة وما قرب إليها من قول وعمل',
  ),
  Dua(
    id: 'a4',
    category: DuaCategory.arafah,
    text: 'اللهم اعتق رقبتي من النار، ووسع علي من الرزق الحلال',
  ),

  // ─── Forgiveness ─────────────────────────────────────────
  Dua(
    id: 'f1',
    category: DuaCategory.forgiveness,
    text:
        'أستغفر الله العظيم الذي لا إله إلا هو الحي القيوم وأتوب إليه',
  ),
  Dua(
    id: 'f2',
    category: DuaCategory.forgiveness,
    text:
        'اللهم اغفر لي ذنبي كله، دقه وجله، أوله وآخره، علانيته وسره',
  ),
  Dua(
    id: 'f3',
    category: DuaCategory.forgiveness,
    text: 'ربنا اغفر لنا ذنوبنا وإسرافنا في أمرنا وثبت أقدامنا',
  ),
  Dua(
    id: 'f4',
    category: DuaCategory.forgiveness,
    text:
        'اللهم أنت ربي لا إله إلا أنت، خلقتني وأنا عبدك، أبوء لك بنعمتك علي وأبوء بذنبي فاغفر لي',
  ),

  // ─── Rizq ────────────────────────────────────────────────
  Dua(
    id: 'r1',
    category: DuaCategory.rizq,
    text: 'اللهم ارزقني رزقاً حلالاً طيباً مباركاً فيه',
  ),
  Dua(
    id: 'r2',
    category: DuaCategory.rizq,
    text: 'اللهم اكفني بحلالك عن حرامك، وأغنني بفضلك عمن سواك',
  ),
  Dua(
    id: 'r3',
    category: DuaCategory.rizq,
    text:
        'اللهم إني أسألك علماً نافعاً، ورزقاً طيباً، وعملاً متقبلاً',
  ),
  Dua(
    id: 'r4',
    category: DuaCategory.rizq,
    text: 'اللهم إني أسألك من فضلك ورحمتك، فإنه لا يملكها إلا أنت',
  ),

  // ─── Comfort ─────────────────────────────────────────────
  Dua(
    id: 'c1',
    category: DuaCategory.comfort,
    text:
        'اللهم لا سهل إلا ما جعلته سهلاً، وأنت تجعل الحزن إذا شئت سهلاً',
  ),
  Dua(
    id: 'c2',
    category: DuaCategory.comfort,
    text: 'حسبي الله ونعم الوكيل',
  ),
  Dua(
    id: 'c3',
    category: DuaCategory.comfort,
    text:
        'اللهم إني أعوذ بك من الهم والحزن، والعجز والكسل، والبخل والجبن',
  ),
  Dua(
    id: 'c4',
    category: DuaCategory.comfort,
    text:
        'اللهم رحمتك أرجو فلا تكلني إلى نفسي طرفة عين، وأصلح لي شأني كله',
  ),

  // ─── Family ──────────────────────────────────────────────
  Dua(
    id: 'fa1',
    category: DuaCategory.family,
    text:
        'ربنا هب لنا من أزواجنا وذرياتنا قرة أعين واجعلنا للمتقين إماماً',
  ),
  Dua(
    id: 'fa2',
    category: DuaCategory.family,
    text:
        'رب اغفر لي ولوالدي وللمؤمنين يوم يقوم الحساب',
  ),
  Dua(
    id: 'fa3',
    category: DuaCategory.family,
    text: 'اللهم احفظ أهلي وذريتي من كل سوء، وبارك لي فيهم',
  ),
  Dua(
    id: 'fa4',
    category: DuaCategory.family,
    text:
        'رب أوزعني أن أشكر نعمتك التي أنعمت علي وعلى والدي وأن أعمل صالحاً ترضاه',
  ),

  // ─── Short ───────────────────────────────────────────────
  Dua(
    id: 's1',
    category: DuaCategory.short,
    text: 'سبحان الله وبحمده، سبحان الله العظيم',
  ),
  Dua(
    id: 's2',
    category: DuaCategory.short,
    text: 'لا حول ولا قوة إلا بالله',
  ),
  Dua(
    id: 's3',
    category: DuaCategory.short,
    text: 'اللهم صل وسلم على نبينا محمد',
  ),
  Dua(
    id: 's4',
    category: DuaCategory.short,
    text: 'استغفر الله',
  ),
  Dua(
    id: 's5',
    category: DuaCategory.short,
    text: 'اللهم بارك',
  ),
];

/// Returns all duas matching [category]. Pass `null` or [DuaCategory.all] for
/// the whole catalog.
List<Dua> duasByCategory(String? category) {
  if (category == null || category == DuaCategory.all) return duas;
  return duas.where((d) => d.category == category).toList(growable: false);
}

/// Returns a random dua, optionally restricted to a single [category].
///
/// Falls back to the whole catalog if the chosen category has no entries.
Dua randomDua({String? category, Random? random}) {
  final pool = duasByCategory(category);
  final list = pool.isEmpty ? duas : pool;
  final rng = random ?? Random();
  return list[rng.nextInt(list.length)];
}
