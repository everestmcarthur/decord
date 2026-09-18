// Module ID: 16398
// Function ID: 16399
// Name: YouBarFloatingShade
// Dependencies: [19, 17, 4379, 15101, 16288, 21, 4560, 504, 4262, 576, 15103, 1477, 4420, 16020, 4296, 4378, 1091, 4987, 2]

// Module 16398 (YouBarFloatingShade)
import initialize from "initialize" /* 504 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1091 */;
import useToken from "useToken" /* 4262 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;
import client_themes_ClientThemesUtils from "client_themes/ClientThemesUtils" /* 4378 */;
import useYouBarTotalHeight from "useYouBarTotalHeight" /* 15103 */;
import noop from "module_19" /* 19 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 4379 */;

require = fn;
const View = fn(17).View;
let closure_5 = fn(15101).YOU_BAR_GRADIENT_EXTRA_HEIGHT;
const GUILD_LIST_WIDTH = fn(16288).GUILD_LIST_WIDTH;
const jsxProd = fn(21);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4560);
let closure_10 = createStyles.createStyles({ container: { position: "absolute", bottom: 0, left: 0, right: 0 } });
const __initData = { code: "function YouBarFloatingShadeTsx1(){const{gradientHeight,drawerWidth}=this.__closure;return{height:gradientHeight,opacity:1,width:drawerWidth};}" };
let size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarFloatingShade.tsx");

export default noop.memo(function YouBarFloatingShade() {
  const tmp = closure_10();
  const youBarTotalHeight = useYouBarTotalHeight.useYouBarTotalHeight();
  const sum = youBarTotalHeight + closure_5;
  require = sum;
  width = width(1477)().width;
  if (width(4420)().isChatBesideChannelList) {
    width = tmp7 + GUILD_LIST_WIDTH;
  }
  const fn = function t() {
    const size = { height: sum, opacity: 1, width };
    return size;
  };
  fn.__closure = { gradientHeight: sum, drawerWidth: width };
  fn.__workletHash = 7609004216185;
  fn.__initData = __initData;
  const animatedStyle = ReanimatedRexport.useAnimatedStyle(fn);
  const tmp2Result = ReanimatedRexport;
  const gradientValue = client_themes_ClientThemesUtils.useGradientValue(tmp2(4378).GradientPercentage.END);
  const tmp2Result7 = client_themes_ClientThemesUtils;
  const token = useToken.useToken(tmp6(576).colors.BACKGROUND_BASE_LOWER);
  const tmp2Result8 = useToken;
  const items = [ClientThemesBackgroundStore];
  const stateFromStores = initialize.useStateFromStores(items, () => gradientPreset.gradientPreset);
  const tmp2Result9 = initialize;
  let token1 = null;
  if (null != stateFromStores) {
    token1 = tmp2Result10.useToken(tmp6(576).colors.MOBILE_FLOATINGBAR_BACKGROUND_SCRIM);
  }
  if (null == token1) {
    token1 = token;
    if (null != gradientValue) {
      token1 = gradientValue;
    }
  }
  tmp2Result10 = useToken;
  let str = utils_ColorUtils.hex2rgb(token1, 1);
  if (str == null) {
    str = "transparent";
  }
  const tmp2Result11 = utils_ColorUtils;
  let str2 = utils_ColorUtils.hex2rgb(token1, 0);
  if (str2 == null) {
    str2 = "transparent";
  }
  const obj2 = { children: null };
  const obj3 = { style: null, pointerEvents: "box-only" };
  const items1 = [tmp.container, animatedStyle, { height: youBarTotalHeight, opacity: 0 }];
  obj3.style = items1;
  const items2 = [closure_7(View, obj3), , ];
  const obj4 = { style: null, colors: null, start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, locations: [0, 1], pointerEvents: "none" };
  const items3 = [tmp.container, ];
  let size = { bottom: sum / 2, height: sum / 2, width };
  items3[1] = size;
  obj4.style = items3;
  const items4 = [str2, str];
  obj4.colors = items4;
  items2[1] = closure_7(width(4987), obj4);
  const obj5 = { style: null };
  const items5 = [tmp.container, { width, height: sum / 2, backgroundColor: str }];
  obj5.style = items5;
  items2[2] = closure_7(View, obj5);
  obj2.children = items2;
  return closure_9(closure_8, obj2);
});
