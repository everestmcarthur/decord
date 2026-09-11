// Module ID: 12003
// Function ID: 12004
// Name: AppealIngestionThanks
// Dependencies: [19, 17, 21, 4607, 11982, 7197, 1178, 2]
// Exports: default

// Module 12003 (AppealIngestionThanks)
import native from "native" /* 1178 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7197 */;
import AppealIngestionModal from "AppealIngestionModal" /* 11982 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4607);
let closure_4 = createStyles.createStyles({ container: { flex: 1, alignItems: "center", justifyContent: "center" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_hub/native/AppealIngestionThanks.tsx");

export default function AppealIngestionThanks() {
  const tmp = closure_4();
  const obj = { children: null };
  const obj2 = { style: tmp.container, children: jsx(common_SafeAreaView.SafeAreaPaddingView, { bottom: true, style: tmp.container, children: jsx(native.LegacyText, { children: "TODO - Thanks" }) }) };
  obj.children = <View style={tmp.container}>{jsx(common_SafeAreaView.SafeAreaPaddingView, { bottom: true, style: tmp.container, children: jsx(native.LegacyText, { children: "TODO - Thanks" }) })}</View>;
  return jsx(AppealIngestionModal.AppealIngestionModalScreen, { children: null });
};
