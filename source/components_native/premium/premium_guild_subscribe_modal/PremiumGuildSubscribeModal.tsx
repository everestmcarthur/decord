// Module ID: 5449
// Function ID: 5450
// Name: PremiumGuildSubscribeModal
// Dependencies: [32, 19, 1183, 5450, 1074, 21, 5451, 5638, 5448, 7391, 4425, 7392, 7393, 7394, 1114, 7009, 7396, 1178, 7398, 13633, 5612, 4986, 7014, 2]
// Exports: default

// Module 5449 (PremiumGuildSubscribeModal)
import util from "util" /* 1114 */;
import useBackPressHandlerDefault from "useBackPressHandler" /* 4986 */;
import actions_BoostingActionCreators from "actions/BoostingActionCreators" /* 5448 */;
import useInitialValueDefault from "useInitialValue" /* 5612 */;
import NavigatorHeader from "NavigatorHeader" /* 5638 */;
import Navigator from "Navigator" /* 7014 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ThemeStore from "ThemeStore" /* 1183 */;

require = fn;
let closure_6 = fn(5450).PremiumGuildSubscribeModalScenes;
const UserSettingsSections = fn(1074).UserSettingsSections;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("components_native/premium/premium_guild_subscribe_modal/PremiumGuildSubscribeModal.tsx");

export default function PremiumGuildSubscribeModal(arg0) {
  ({ guildId: require, guildBoostSlots: importDefault, intent: dependencyMap, onResult: _slicedToArray } = arg0);
  first = undefined;
  closure_5 = undefined;
  let tmp = useInitialValueDefault(() => {
    const items = [];
    if (null != closure_1_0) {
      if (null != guildBoostSlots) {
        if (arr2.length > 0) {
          let obj2 = { name: constants.CONFIRMATION, params: null };
          let obj3 = { guildId: tmp, guildBoostSlots: arr2, intent, onResult };
          obj2.params = obj3;
          items.push(obj2);
        }
        const obj4 = { initialStack: items, screens: null };
        const obj5 = {};
        const obj6 = {
          headerShown: false,
          render(arg0) {
                const merged = Object.assign(arg0);
                return closure_1_8(guildBoostSlots(5451), {});
              }
        };
        obj5[constants.GUILD_SELECT] = obj6;
        const obj7 = {
          headerLeft: NavigatorHeader.getHeaderCloseButton(actions_BoostingActionCreators.closeApplyBoostModal),
          headerRight() {
                if (obj.isThemeDark(theme.theme)) {
                  let tmp4Result = tmp4(7392);
                } else {
                  tmp4Result = tmp4(7393);
                }
                let obj2 = { source: tmp4Result, IconComponent: closure_1_0(7394).SettingsIcon, accessibilityLabel: null, accessibilityHint: null, onPress: null };
                const intl = tmp2(1114).intl;
                obj2.accessibilityLabel = intl.string(closure_1_0(1114).t["3D5yo/"]);
                const intl2 = tmp2(1114).intl;
                obj2.accessibilityHint = intl2.string(closure_1_0(1114).t["+CbP2v"]);
                obj2.onPress = function onPress() {
                  const result = closure_1_0(7009).trackUserSettingsPaneViewed({ destinationPane: constants.GUILD_BOOSTING });
                  const obj = closure_1_0(7009);
                  const obj2 = { destinationPane: constants.GUILD_BOOSTING };
                  closure_1_0(5448).closeApplyBoostModal();
                  const obj3 = closure_1_0(5448);
                  closure_1_0(7396).openUserSettings({ screen: constants.GUILD_BOOSTING });
                };
                return closure_1_8(closure_1_0(7391).HeaderActionButton, obj2);
              },
          headerTitle(children) {
                children = children.children;
                const obj = { title: null, subtitle: null };
                const intl = closure_1_0(1114).intl;
                obj.title = intl.string(closure_1_0(1114).t.VJEVbu);
                let tmpResult = null;
                if (children.length > 0) {
                  const obj2 = { children };
                  tmpResult = tmp(closure_1_0(1178).LegacyText, obj2);
                }
                obj.subtitle = tmpResult;
                return closure_1_8(closure_1_0(5638).NavigatorHeader, obj);
              },
          render(arg0) {
                const merged = Object.assign(arg0);
                return closure_1_8(guildBoostSlots(7398), {});
              }
        };
        obj5[constants.OVERVIEW] = obj7;
        const obj8 = { headerLeft: null, headerTitle: null, render: null };
        obj8.headerLeft = NavigatorHeader.getHeaderCloseButton(actions_BoostingActionCreators.closeApplyBoostModal);
        let intl = util.intl;
        obj8.headerTitle = intl.string(util.t.VJEVbu);
        obj8.render = function render(arg0) {
          const merged = Object.assign(arg0);
          return closure_1_8(guildBoostSlots(13633), {});
        };
        obj5[constants.CONFIRMATION] = obj8;
        obj4.screens = obj5;
        return obj4;
      }
    }
    if (null != closure_1_0) {
      const obj9 = { name: constants.OVERVIEW, params: null };
      const obj10 = { guildId: tmp, guildBoostSlots, intent, onResult };
      obj9.params = obj10;
      items.push(obj9);
    } else {
      let obj = { name: constants.GUILD_SELECT, params: null };
      const obj12 = { guildBoostSlots, intent, onResult };
      obj.params = obj12;
      items.push(obj);
    }
  });
  const initialStack = tmp.initialStack;
  [first, closure_5] = first.useState(initialStack[0].name);
  let items = [first];
  useBackPressHandlerDefault(first.useCallback(() => {
    let flag = first === constants.GUILD_SELECT;
    if (flag) {
      actions_BoostingActionCreators.closeApplyBoostModal();
      flag = true;
    }
    return flag;
  }, items));
  let obj = { screens: tmp.screens, initialRouteStack: initialStack, headerBackTitle: null, onStateChange: null };
  let intl = util.intl;
  obj.headerBackTitle = intl.string(util.t["13/7kX"]);
  obj.onStateChange = function onStateChange(arg0) {
    let tmp;
    if (arg0 != null) {
      tmp = arg0.routes[arg0.index];
    }
    if (null != tmp) {
      closure_5(tmp.name);
    }
  };
  return jsx(Navigator.Navigator, { screens: tmp.screens, initialRouteStack: initialStack, headerBackTitle: null, onStateChange: null });
};
