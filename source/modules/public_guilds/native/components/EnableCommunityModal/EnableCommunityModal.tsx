// Module ID: 17749
// Function ID: 17750
// Name: EnableCommunityModal
// Dependencies: [19, 21, 17748, 5682, 5676, 1114, 7451, 7066, 17750, 17751, 17763, 17764, 7074, 2]
// Exports: default

// Module 17749 (EnableCommunityModal)
import util from "util" /* 1114 */;
import NavigatorHeader from "NavigatorHeader" /* 5676 */;
import useNavigatorBackPressHandler from "useNavigatorBackPressHandler" /* 5682 */;
import Navigator from "Navigator" /* 7074 */;
import EnableCommunityModalActionCreatorsDefault from "EnableCommunityModalActionCreators" /* 17748 */;
import EnableCommunitySharedNavigation from "EnableCommunitySharedNavigation" /* 17750 */;
import noop from "module_19" /* 19 */;

require = fn;
function onModalClose() {
  EnableCommunityModalActionCreatorsDefault.close();
}
function HeaderBackButton(arg0) {
  useNavigatorBackPressHandler.useNavigatorBackPressHandler(() => {
    EnableCommunityModalActionCreatorsDefault.close();
    return true;
  });
  const intl = util.intl;
  return NavigatorHeader.getHeaderTextButton(intl.string(util.t["13/7kX"]), onModalClose)(arg0);
}
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/public_guilds/native/components/EnableCommunityModal/EnableCommunityModal.tsx");

export default function EnableCommunityModal() {
  const memo = noop.useMemo(() => {
    function headerRight() {
      const obj = { source: closure_1_1(7066), onPress, accessibilityLabel: null };
      const intl = closure_1_0(1114).intl;
      obj.accessibilityLabel = intl.string(closure_1_0(1114).t.cpT0Cq);
      return closure_1_4(closure_1_0(7451).HeaderActionButton, obj);
    }
    return {
      [closure_1_0(closure_1_2[8]).EnableCommunityModalSteps.STEP_1]: {
        headerRight,
        headerLeft,
        headerTitle() {
          return null;
        },
        render() {
          return closure_1_4(closure_1_1(17751), {});
        }
      },
      [closure_1_0(closure_1_2[8]).EnableCommunityModalSteps.STEP_2]: {
        headerRight,
        headerTitle() {
          return null;
        },
        render() {
          return closure_1_4(closure_1_1(17763), {});
        }
      },
      [closure_1_0(closure_1_2[8]).EnableCommunityModalSteps.STEP_3]: {
        headerRight,
        headerTitle() {
          return null;
        },
        render() {
          return closure_1_4(closure_1_1(17764), {});
        }
      }
    };
  }, []);
  let obj = { screens: memo, initialRouteName: EnableCommunitySharedNavigation.EnableCommunityModalSteps.STEP_1, headerBackTitle: null };
  let intl = util.intl;
  obj.headerBackTitle = intl.string(util.t["13/7kX"]);
  return jsx(Navigator.Navigator, { screens: memo, initialRouteName: EnableCommunitySharedNavigation.EnableCommunityModalSteps.STEP_1, headerBackTitle: null });
};
