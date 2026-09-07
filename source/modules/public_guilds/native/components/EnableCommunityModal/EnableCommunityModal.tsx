// Module ID: 17665
// Function ID: 17666
// Name: onModalClose
// Dependencies: [19, 21, 17664, 5630, 5624, 1114, 7377, 6992, 17666, 17667, 17679, 17680, 7000, 2]
// Exports: default

// Module 17665 (onModalClose)
import getSystemLocale from "getSystemLocale" /* 1114 */;
import HeaderBackImage from "HeaderBackImage" /* 5624 */;
import useNavigatorBackPressHandler from "useNavigatorBackPressHandler" /* 5630 */;
import NavigationStack from "NavigationStack" /* 7000 */;
import _modDef17664 from "module_17664" /* 17664 */;
import EnableCommunityModalSteps from "EnableCommunityModalSteps" /* 17666 */;
import closure_3 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
function onModalClose() {
  _modDef17664.close();
}
function HeaderBackButton(arg0) {
  useNavigatorBackPressHandler.useNavigatorBackPressHandler(() => {
    callback(table[2]).close();
    return true;
  });
  const obj = useNavigatorBackPressHandler;
  const intl = getSystemLocale.intl;
  return HeaderBackImage.getHeaderTextButton(intl.string(getSystemLocale.t["13/7kX"]), onModalClose)(arg0);
}
const result = require("set").fileFinishedImporting("modules/public_guilds/native/components/EnableCommunityModal/EnableCommunityModal.tsx");

export default function EnableCommunityModal() {
  const memo = React.useMemo(() => {
    function headerRight() {
      const obj = { source: callback2(6992), onPress: closure_5, accessibilityLabel: null };
      const intl = callback(1114).intl;
      obj[2] = intl.string(callback(1114).t.cpT0Cq);
      return callback3(callback(7377).HeaderActionButton, obj);
    }
    let obj = {
      headerRight,
      headerLeft: closure_6,
      headerTitle() {
        return null;
      },
      render() {
        return callback3(callback2(17667), {});
      }
    };
    obj = {
      headerRight,
      headerTitle() {
        return null;
      },
      render() {
        return callback3(callback2(17679), {});
      }
    };
    obj = {
      headerRight,
      headerTitle() {
        return null;
      },
      render() {
        return callback3(callback2(17680), {});
      }
    };
    return { [closure_0(closure_2[8]).EnableCommunityModalSteps.STEP_1]: obj, [closure_0(closure_2[8]).EnableCommunityModalSteps.STEP_2]: obj, [closure_0(closure_2[8]).EnableCommunityModalSteps.STEP_3]: obj };
  }, []);
  let obj = { screens: memo, initialRouteName: EnableCommunityModalSteps.EnableCommunityModalSteps.STEP_1, headerBackTitle: null };
  let intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t["13/7kX"]);
  return jsx(NavigationStack.Navigator, { screens: memo, initialRouteName: EnableCommunityModalSteps.EnableCommunityModalSteps.STEP_1, headerBackTitle: null });
};
