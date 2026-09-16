// Module ID: 12255
// Function ID: 12256
// Name: NoPermsState
// Dependencies: [19, 17, 21, 4638, 576, 4489, 4572, 12256, 12257, 12193, 9552, 4634, 1115, 2]
// Exports: default

// Module 12255 (NoPermsState)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import shared from "shared" /* 4489 */;
import useThemeDefault from "useTheme" /* 4572 */;
import Text_Text from "Text/Text" /* 4634 */;
import AppLauncherNativeUtils from "AppLauncherNativeUtils" /* 12193 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, Image: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4638);
let obj2 = { container: { paddingVertical: 16, paddingHorizontal: 24, gap: 12, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.lg, alignItems: "center", justifyContent: "flex-start", display: "flex", flexDirection: "row" }, textContainer: { flexShrink: 1 }, image: { width: 64, height: 64 } };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/screens/home/NoPermsState.tsx");

export default function EmptyState() {
  const tmp = closure_7();
  const tmp4Result = importDefault(shared.isThemeLight(useThemeDefault()) ? 12256 : 12257);
  const logAppLauncherEmptyStateView = AppLauncherNativeUtils.useLogAppLauncherEmptyStateView(tmp2(9552).AppLauncherEmptyStateType.HOME_NO_PERMISSIONS);
  const obj2 = { style: tmp.container, children: null };
  const items = [hasOwnProperty(React4, { style: tmp.image, resizeMode: "contain", source: tmp4Result }), ];
  const obj4 = { style: tmp.textContainer, variant: "text-sm/medium", color: "text-muted", children: null };
  const intl = tmp2(1115).intl;
  obj4.children = intl.string(util.t.uDnXXj);
  items[1] = hasOwnProperty(Text_Text.Text, obj4);
  obj2.children = items;
  return timestampProducer(React3, obj2);
};
