// Module ID: 9681
// Function ID: 9682
// Name: StageViewWithPrompts
// Dependencies: [19, 17, 1085, 21, 9682, 4560, 1611, 9683, 8408, 4556, 2]
// Exports: default

// Module 9681 (StageViewWithPrompts)
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1611 */;
import Text_Text from "Text/Text" /* 4556 */;
import StageSparkleDefault from "StageSparkle" /* 8408 */;
import FocusedControls from "FocusedControls" /* 9683 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ ScrollView: c3, View: closure_4 } = get_ActivityIndicator);
const ThemeTypes = fn(1085).ThemeTypes;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let closure_8 = fn(9682).CALL_ACTION_BAR_HEIGHT + 8;
const createStyles = fn(4560);
const styles = createStyles.createStyles({ scrollView: { flex: 1 }, container: { paddingHorizontal: 16, alignItems: "center" }, sparkle: { marginTop: 48, marginBottom: 16 }, title: { marginTop: 16, marginBottom: 8, textAlign: "center" }, body: { fontSize: 14, textAlign: "center" }, prompts: { marginTop: 24, display: "flex", flexDirection: "column", width: "100%" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/native/components/StageViewWithPrompts.tsx");

export default function StageViewWithPrompts(arg0) {
  ({ title, body, children } = arg0);
  const tmp = styles();
  const obj = { style: tmp.scrollView, contentContainerStyle: null, alwaysBounceVertical: false, children: null };
  const items = [tmp.container, ];
  const tmp2 = useSafeAreaInsetsDefault();
  ({ top, bottom } = tmp2);
  items[1] = { paddingTop: top + FocusedControls.FOCUSED_CONTROLS_HEADER_HEIGHT, paddingBottom: bottom + closure_8 };
  obj.contentContainerStyle = items;
  const items1 = [timestampProducer(StageSparkleDefault, { style: tmp.sparkle, theme: ThemeTypes.DARK }), timestampProducer(Text_Text.Text, { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "text-overlay-light", children: title }), timestampProducer(Text_Text.Text, { style: tmp.body, variant: "text-sm/medium", color: "text-overlay-light", children: body }), timestampProducer(React4, { style: tmp.prompts, children })];
  obj.children = items1;
  return React5(React3, obj);
};
export const useStyles = styles;
