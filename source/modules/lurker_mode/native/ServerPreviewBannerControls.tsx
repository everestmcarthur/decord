// Module ID: 16249
// Function ID: 16250
// Name: ServerPreviewBannerControls
// Dependencies: [19, 17, 1074, 21, 4606, 576, 7415, 8172, 5680, 1114, 16250, 2]
// Exports: default

// Module 16249 (ServerPreviewBannerControls)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import _modDef5680 from "module_5680" /* 5680 */;
import transitionToGuild from "transitionToGuild" /* 7415 */;
import IconButton from "IconButton" /* 8172 */;
import ServerPreviewPillDefault from "ServerPreviewPill" /* 16250 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const MOBILE_GUILD_UPSELL_LIST = fn(1074).MOBILE_GUILD_UPSELL_LIST;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4606);
let obj2 = { row: null };
const rect = { position: "absolute", top: nativeDefault.space.PX_16, left: nativeDefault.space.PX_16, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.row = rect;
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/lurker_mode/native/ServerPreviewBannerControls.tsx");

export default function ServerPreviewBannerControls() {
  const obj = { style: closure_8().row, children: null };
  const callback = noop.useCallback(() => {
    transitionToGuild.transitionToGuild(MOBILE_GUILD_UPSELL_LIST);
  }, []);
  const obj2 = { size: "md", variant: "secondary-overlay", icon: _modDef5680, onPress: callback, accessibilityLabel: null, maxFontSizeMultiplier: 1.5 };
  const intl = util.intl;
  obj2.accessibilityLabel = intl.string(util.t["13/7kX"]);
  const items = [timestampProducer(IconButton.IconButton, obj2), timestampProducer(ServerPreviewPillDefault, {})];
  obj.children = items;
  return React5(View, obj);
};
