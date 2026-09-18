// Module ID: 16284
// Function ID: 16285
// Name: HomePanelContent
// Dependencies: [19, 17, 16026, 1074, 21, 4560, 16025, 16285, 16030, 7875, 4262, 576, 4296, 2]

// Module 16284 (HomePanelContent)
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;
import GuildsBarDefault from "GuildsBar" /* 16285 */;
import noop from "module_19" /* 19 */;
import HomeDrawerStore from "HomeDrawerStore" /* 16026 */;

require = fn;
function HomeDrawerPanelContent() {
  const tmp = closure_7();
  const drawerOpen = panelTranslateX(isClientThemeOrCustomThemeActive[8]).useDrawerOpen();
  let obj = panelTranslateX(isClientThemeOrCustomThemeActive[8]);
  const tmp2 = isClientThemeOrCustomThemeActive;
  const homeDrawerState = panelTranslateX(isClientThemeOrCustomThemeActive[6]).useHomeDrawerState();
  panelTranslateX = homeDrawerState.panelTranslateX;
  const tmp5 = token1((maxX) => maxX.maxX);
  importDefault = tmp5;
  let obj2 = panelTranslateX(isClientThemeOrCustomThemeActive[6]);
  isClientThemeOrCustomThemeActive = panelTranslateX(isClientThemeOrCustomThemeActive[9]).useIsClientThemeOrCustomThemeActive();
  const obj3 = panelTranslateX(isClientThemeOrCustomThemeActive[9]);
  const token = panelTranslateX(isClientThemeOrCustomThemeActive[10]).useToken(require("native").colors.BACKGROUND_BASE_LOWEST);
  const obj4 = panelTranslateX(isClientThemeOrCustomThemeActive[10]);
  const tmp7 = importDefault;
  token1 = panelTranslateX(isClientThemeOrCustomThemeActive[10]).useToken(require("native").colors.PANEL_BG);
  const obj5 = panelTranslateX(isClientThemeOrCustomThemeActive[10]);
  const fn = function t() {
    if (!isClientThemeOrCustomThemeActive) {
      if (closure_1 > 0) {
        let obj = { backgroundColor: null };
        const items = [0, tmp];
        const items1 = [token, token1];
        obj.backgroundColor = ReanimatedRexport.interpolateColor(panelTranslateX.get(), items, items1);
      }
      return obj;
    }
    obj = { backgroundColor: "transparent" };
  };
  const obj6 = panelTranslateX(isClientThemeOrCustomThemeActive[12]);
  fn.__closure = { isGradientTheme: isClientThemeOrCustomThemeActive, maxX: tmp5, interpolateColor: panelTranslateX(isClientThemeOrCustomThemeActive[12]).interpolateColor, panelTranslateX, baseLowest: token, panelBg: token1 };
  fn.__workletHash = 10232644858711;
  fn.__initData = __initData;
  const animatedStyle = obj6.useAnimatedStyle(fn);
  const obj8 = { style: null, children: null };
  let items = [tmp.container, animatedStyle];
  obj8.style = items;
  const obj9 = { style: null, children: jsx(tmp7(tmp2[7]), { enableHome: true }) };
  let items1 = [drawerOpen ? tmp.guildsListContainerGestured : tmp.guildLisetContainerDefault, homeDrawerState.guildsBarDrawerStyle];
  obj9.style = items1;
  obj8.children = jsx(require("ReanimatedRexport").View, { style: null, children: jsx(tmp7(tmp2[7]), { enableHome: true }) });
  return jsx(require("ReanimatedRexport").View, { style: null, children: null });
}
const View = fn(17).View;
const DM_WIDTH = fn(1074).DM_WIDTH;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_7 = createStyles.createStyles((width) => {
  const obj = { container: { flex: 1 }, guildsListContainerGestured: { flex: 1 }, guildLisetContainerDefault: { flex: 1, width } };
  return obj;
});
const __initData = { code: "function HomePanelContentTsx1(){const{isGradientTheme,maxX,interpolateColor,panelTranslateX,baseLowest,panelBg}=this.__closure;if(isGradientTheme||maxX<=0){return{backgroundColor:'transparent'};}return{backgroundColor:interpolateColor(panelTranslateX.get(),[0,maxX],[baseLowest,panelBg])};}" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/HomePanelContent.tsx");

export const HomePanelContent = noop.memo(() => {
  const tmp = closure_7(DM_WIDTH);
  if (obj.useIsHomeDrawerEnabled()) {
    let tmp3Result = tmp3(HomeDrawerPanelContent, {});
  } else {
    const obj2 = { style: tmp.container, children: null };
    const obj3 = { style: tmp.guildLisetContainerDefault, children: tmp3(GuildsBarDefault, {}) };
    obj2.children = tmp3(View, obj3);
    tmp3Result = tmp3(View, obj2);
  }
  return tmp3Result;
});
