// Module ID: 16682
// Function ID: 16683
// Name: GuildsBarFooterWrapper
// Dependencies: [16615, 21, 4756, 576, 4457, 16355, 5801, 2]
// Exports: default

// Module 16682 (GuildsBarFooterWrapper)
import jsxProd from "jsxProd" /* 21 */;
import nativeDefault from "native" /* 576 */;
import useToken from "useToken" /* 4457 */;
import NativeViewDefault from "NativeView" /* 5801 */;
import useHomeDrawerGesture from "useHomeDrawerGesture" /* 16355 */;
import GuildsBarConstants from "GuildsBarConstants" /* 16615 */;
import createStyles from "createStyles" /* 4756 */;
import size from "module_2" /* 2 */;

const GUILD_ITEM_HIT_SLOP = GuildsBarConstants.GUILD_ITEM_HIT_SLOP;
const jsx = jsxProd.jsx;
let obj = { footerWrapper: { display: "flex", alignSelf: "stretch", alignItems: "center", gap: nativeDefault.modules.mobile.GUILD_BAR_ITEM_PADDING } };
let closure_5 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarFooterWrapper.tsx");

export default function GuildsBarFooterWrapper(children) {
  const token = useToken.useToken(nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE);
  const tmp2 = closure_5();
  const isHomeDrawerEnabled = useHomeDrawerGesture.useIsHomeDrawerEnabled();
  const style = [tmp2.footerWrapper, ];
  let tmp6 = null;
  const tmp4 = jsx;
  if (!isHomeDrawerEnabled) {
    const obj3 = { width: token + GUILD_ITEM_HIT_SLOP.left + GUILD_ITEM_HIT_SLOP.right };
    tmp6 = obj3;
  }
  style[1] = tmp6;
  return tmp4(NativeViewDefault, { style, children: children.children });
};
