import 'package:flutter_test/flutter_test.dart';
import 'package:hajj_tracker_flutter/main.dart';

void main() {
  testWidgets('Home shows أدعيتي and مواقع المشاعر', (WidgetTester tester) async {
    await tester.pumpWidget(const HajjTrackerApp());
    await tester.pumpAndSettle();

    expect(find.textContaining('أدعيتي'), findsOneWidget);
    expect(find.textContaining('مواقع المشاعر'), findsOneWidget);
  });
}
