// Module ID: 11913
// Function ID: 11914
// Name: AppealIngestionSpam
// Dependencies: [19, 17, 21, 4560, 11891, 7123, 1178, 2]
// Exports: default

// Module 11913 (AppealIngestionSpam)
import native from "native" /* 1178 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7123 */;
import AppealIngestionModal from "AppealIngestionModal" /* 11891 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_4 = createStyles.createStyles({ container: { flex: 1, alignItems: "center", justifyContent: "center" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_hub/native/AppealIngestionSpam.tsx");

export default function AppealIngestionSpam() {
  const tmp = closure_4();
  const obj = { children: null };
  const obj2 = { style: tmp.container, children: jsx(common_SafeAreaView.SafeAreaPaddingView, { bottom: true, style: tmp.container, children: jsx(native.LegacyText, { children: "TODO - SPAM" }) }) };
  obj.children = <View style={tmp.container}>{jsx(common_SafeAreaView.SafeAreaPaddingView, { bottom: true, style: tmp.container, children: jsx(native.LegacyText, { children: "TODO - SPAM" }) })}</View>;
  return jsx(AppealIngestionModal.AppealIngestionModalScreen, { children: null });
};
