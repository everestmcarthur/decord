// Module ID: 12731
// Function ID: 12732
// Name: HubEmailConnectionModal
// Dependencies: [19, 12723, 21, 4560, 5682, 5624, 12732, 1250, 12735, 12738, 12740, 12741, 12742, 12745, 7123, 1483, 5598, 12747, 7000, 1114, 2]
// Exports: HubEmailConnectionScreen, default

// Module 12731 (HubEmailConnectionModal)
import util from "util" /* 1114 */;
import useNavigation from "useNavigation" /* 1483 */;
import useInitialValueDefault from "useInitialValue" /* 5598 */;
import NavigatorHeader from "NavigatorHeader" /* 5624 */;
import Navigator from "Navigator" /* 7000 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7123 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const HubEmailConnectionSteps = fn(12723).HubEmailConnectionSteps;
let jsx = fn(21).jsx;
const createStyles = fn(4560);
let obj2 = { safeArea: { marginTop: fn(5682).NAV_BAR_HEIGHT, flex: 1 } };
let closure_5 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/hub/native/components/HubEmailConnectionModal.tsx");

export default function HubEmailConnectionModal(arg0) {
  ({ isNestedNavigator: require, onCloseExtra: importDefault, invite: dependencyMap, displayStudentPrompt: HubEmailConnectionSteps } = arg0);
  jsx = useNavigation.useNavigation();
  ({ screens, initialRouteStack } = useInitialValueDefault(() => {
    function handleClose() {
      let flag = arg0;
      if (arg0 === undefined) {
        flag = false;
      }
      if (closure_1_1 != null) {
        tmp(true === flag);
      }
      if (closure_1_0) {
        navigation.goBack();
      } else {
        require("HubEmailConnectionModalActionCreators").close();
        const obj = require("HubEmailConnectionModalActionCreators");
      }
    }
    const items = [];
    const push = items.push;
    let obj = { name: null, params: null };
    if (closure_1_3) {
      obj.name = tmp.STUDENT_PROMPT;
      const obj2 = { onClose: handleClose };
      obj.params = obj2;
      push(obj);
    } else {
      obj.name = tmp.VERIFY_EMAIL;
      const obj3 = { invite, onClose: handleClose };
      obj.params = obj3;
      push(obj);
    }
    const obj4 = NavigatorHeader;
    if (closure_1_0) {
      let headerBackButton = obj4.getHeaderBackButton(handleClose);
      let tmp9 = tmp5;
    } else {
      headerBackButton = obj4.getHeaderCloseButton(handleClose);
      tmp9 = tmp5;
    }
    const obj5 = { screens: null, initialRouteStack: null };
    const obj6 = { [closure_2_3.STUDENT_PROMPT]: obj7 };
    obj6[HubEmailConnectionSteps.VERIFY_EMAIL] = {
      impressionName: tmp9(1250).ImpressionNames.HUB_EMAIL_SIGNUP,
      impressionProperties(invite) {
        return { has_invite: null != invite.invite };
      },
      fullscreen: true,
      headerLeft: headerBackButton,
      headerTitle() {
        return null;
      },
      render(arg0) {
        const merged = Object.assign(arg0);
        return navigation(closure_1_1(12735), {});
      }
    };
    obj6[HubEmailConnectionSteps.EMAIL_WAITLIST] = {
      fullscreen: true,
      headerTitle() {
        return null;
      },
      render(arg0) {
        const merged = Object.assign(arg0);
        return navigation(closure_1_1(12738), {});
      }
    };
    obj6[HubEmailConnectionSteps.SUBMIT_SCHOOL] = {
      fullscreen: true,
      headerTitle() {
        return null;
      },
      render(arg0) {
        const merged = Object.assign(arg0);
        return navigation(closure_1_1(12740), {});
      }
    };
    obj6[HubEmailConnectionSteps.SELECT_SCHOOL] = {
      fullscreen: true,
      headerTitle() {
        return null;
      },
      render(arg0) {
        const merged = Object.assign(arg0);
        return navigation(closure_1_1(12741), {});
      }
    };
    obj6[HubEmailConnectionSteps.VERIFY_PIN] = {
      fullscreen: true,
      headerTitle() {
        return null;
      },
      render(arg0) {
        const merged = Object.assign(arg0);
        return navigation(closure_1_1(12742), {});
      }
    };
    obj6[HubEmailConnectionSteps.SELECT_SCHOOL_SEARCH] = {
      fullscreen: true,
      headerShown: false,
      render(arg0) {
        const merged = Object.assign(arg0);
        return navigation(closure_1_1(12745), {});
      }
    };
    obj5.screens = obj6;
    obj5.initialRouteStack = items;
    return obj5;
  }));
  let obj2 = { screens, initialRouteStack, headerBackTitle: null };
  const intl = util.intl;
  obj2.headerBackTitle = intl.string(util.t["13/7kX"]);
  return jsx(Navigator.Navigator, { screens, initialRouteStack, headerBackTitle: null });
};
export const HubEmailConnectionScreen = function HubEmailConnectionScreen(children) {
  const tmp = closure_5();
  return jsx(common_SafeAreaView.SafeAreaPaddingView, { top: true, style: closure_5().safeArea, children: children.children });
};
