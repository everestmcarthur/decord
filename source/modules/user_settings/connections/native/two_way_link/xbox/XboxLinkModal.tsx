// Module ID: 9308
// Function ID: 9309
// Name: XboxLinkModal
// Dependencies: [19, 9309, 1074, 21, 7450, 7065, 9307, 1114, 9310, 9317, 9318, 9322, 9531, 9536, 9537, 9316, 9359, 7073, 2]
// Exports: default

// Module 9308 (XboxLinkModal)
import util from "util" /* 1114 */;
import _modDef7065 from "module_7065" /* 7065 */;
import HeaderActionButton from "HeaderActionButton" /* 7450 */;
import XboxLinkModalActionCreatorsDefault from "XboxLinkModalActionCreators" /* 9307 */;
import XboxLinkEducationDefault from "XboxLinkEducation" /* 9536 */;
import XboxLinkErrorDefault from "XboxLinkError" /* 9537 */;
import noop from "module_19" /* 19 */;

require = fn;
function CloseButton() {
  const obj = {
    source: _modDef7065,
    onPress() {
      return XboxLinkModalActionCreatorsDefault.hideModal();
    },
    accessibilityLabel: null
  };
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t.cpT0Cq);
  return jsx(HeaderActionButton.HeaderActionButton, {
    source: _modDef7065,
    onPress() {
      return XboxLinkModalActionCreatorsDefault.hideModal();
    },
    accessibilityLabel: null
  });
}
const XboxLinkModalScenes = fn(9309).XboxLinkModalScenes;
const PlatformTypes = fn(1074).PlatformTypes;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxLinkModal.tsx");

export default function XboxLinkModal(locationStack) {
  let twoWayLinkStyles;
  twoWayLinkStyles = twoWayLinkStyles(9316).useTwoWayLinkStyles();
  const items = [twoWayLinkStyles];
  const memo = noop.useMemo(() => {
    function onClose() {
      return closure_1_1(9307).hideModal();
    }
    function blank() {
      return null;
    }
    return {
      [closure_2_4.LANDING]: {
        headerLeft: blank,
        headerRight: CloseButton,
        headerTitle: blank,
        headerStyle: twoWayLinkStyles.navHeader,
        render() {
          return closure_1_6(closure_1_1(9310), {});
        }
      },
      [closure_2_4.PRE_CONNECT]: {
        headerLeft: blank,
        headerRight: CloseButton,
        headerStyle: twoWayLinkStyles.navHeader,
        headerTitle() {
          return closure_1_6(onClose(9317).TwoWayLinkStepHeader, { idx: 1, total: 2 });
        },
        render() {
          return closure_1_6(closure_1_1(9318), {});
        }
      },
      [closure_2_4.DISCORD_CONSENT]: {
        headerLeft: blank,
        headerRight: CloseButton,
        headerStyle: twoWayLinkStyles.navHeader,
        headerTitle() {
          return closure_1_6(onClose(9317).TwoWayLinkStepHeader, { idx: 2, total: 2 });
        },
        render(arg0) {
          ({ callbackCode, callbackState } = arg0);
          return closure_1_6(closure_1_1(9322), { callbackCode, callbackState });
        }
      },
      [closure_2_4.SUCCESS]: {
        headerLeft: blank,
        headerRight: CloseButton,
        headerTitle: blank,
        headerStyle: twoWayLinkStyles.navHeader,
        render() {
          return closure_1_6(closure_1_1(9531), {});
        }
      },
      [closure_2_4.EDUCATION]: {
        headerLeft: blank,
        headerRight: CloseButton,
        headerTitle: blank,
        headerStyle: twoWayLinkStyles.navHeader,
        render() {
          return jsx(XboxLinkEducationDefault, { onClose });
        }
      },
      [closure_2_4.ERROR]: {
        headerLeft: blank,
        headerRight: CloseButton,
        headerTitle: blank,
        headerStyle: twoWayLinkStyles.navHeader,
        render() {
          return jsx(XboxLinkErrorDefault, { onClose });
        }
      }
    };
  }, items);
  const obj = twoWayLinkStyles(9316);
  const accountLinkStepTracking = twoWayLinkStyles(9359).useAccountLinkStepTracking(PlatformTypes.XBOX, locationStack.locationStack);
  const obj3 = { onStateChange: accountLinkStepTracking, screens: memo, initialRouteName: XboxLinkModalScenes.LANDING, headerBackTitle: null };
  const intl = twoWayLinkStyles(1114).intl;
  obj3.headerBackTitle = intl.string(twoWayLinkStyles(1114).t["13/7kX"]);
  return jsx(twoWayLinkStyles(7073).Navigator, { onStateChange: accountLinkStepTracking, screens: memo, initialRouteName: XboxLinkModalScenes.LANDING, headerBackTitle: null });
};
