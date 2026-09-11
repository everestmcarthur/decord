// Module ID: 16537
// Function ID: 16538
// Name: ICYMIInfoModal
// Dependencies: [19, 21, 7073, 16538, 5675, 16539, 1250, 4809, 7450, 1114, 8445, 16547, 16555, 12022, 14227, 2]
// Exports: default

// Module 16537 (ICYMIInfoModal)
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1250 */;
import NavigatorHeader from "NavigatorHeader" /* 5675 */;
import ICYMIInfoModalTypes from "ICYMIInfoModalTypes" /* 16538 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/icymi/native/info_modal/ICYMIInfoModal.tsx");

export default function ICYMIInfoModal(extendedOnboarding) {
  extendedOnboarding = extendedOnboarding.extendedOnboarding;
  const skipIntro = extendedOnboarding.skipIntro;
  closure_129_0 = extendedOnboarding;
  closure_129_1 = skipIntro;
  let items = [extendedOnboarding, skipIntro];
  const navigatorScreens = extendedOnboarding(7073).useNavigatorScreens(() => {
    let obj = {};
    const obj2 = {
      headerLeft: NavigatorHeader.getHeaderCloseButton(),
      render() {
        return jsx(skipIntro(16539), { extendedOnboarding });
      },
      impressionName: discord_common_AnalyticsUtils.ImpressionNames.ICYMI_ONBOARDING_OVERVIEW,
      impressionProperties: { extended_onboarding: extendedOnboarding }
    };
    obj[ICYMIInfoModalTypes.ICYMIInfoScreens.DEFAULT] = obj2;
    const obj5 = NavigatorHeader;
    if (skipIntro) {
      let headerCloseButton = obj5.getHeaderCloseButton(() => skipIntro(4809).popWithKey(extendedOnboarding(16538).ICYMI_INFO_MODAL_KEY));
    } else {
      headerCloseButton = obj5.getHeaderBackButton();
    }
    const obj4 = { extended_onboarding: extendedOnboarding };
    obj[ICYMIInfoModalTypes.ICYMIInfoScreens.TOPICS_CLOUD] = {
      headerLeft: headerCloseButton,
      headerRight() {
        let tmp = null;
        if (!skipIntro) {
          const obj = { text: null, onPress: null };
          const intl = extendedOnboarding(1114).intl;
          obj.text = intl.string(extendedOnboarding(1114).t["5Wxrcd"]);
          obj.onPress = function onPress() {
            const ICYMIAnalytics = extendedOnboarding(8445).ICYMIAnalytics;
            const result = ICYMIAnalytics.trackFeedOnboardingScreenSkipped({ location: "topics" });
            closure_1_1(4809).pop();
          };
          tmp = jsx(extendedOnboarding(7450).HeaderActionButton, { text: null, onPress: null });
        }
        return tmp;
      },
      render() {
        return closure_1_4(skipIntro(16547), {});
      },
      impressionName: discord_common_AnalyticsUtils.ImpressionNames.ICYMI_ONBOARDING_TOPICS
    };
    const obj7 = { headerLeft: null, headerRight: null, render: null, impressionName: null };
    const obj6 = {
      headerLeft: headerCloseButton,
      headerRight() {
        let tmp = null;
        if (!skipIntro) {
          const obj = { text: null, onPress: null };
          const intl = extendedOnboarding(1114).intl;
          obj.text = intl.string(extendedOnboarding(1114).t["5Wxrcd"]);
          obj.onPress = function onPress() {
            const ICYMIAnalytics = extendedOnboarding(8445).ICYMIAnalytics;
            const result = ICYMIAnalytics.trackFeedOnboardingScreenSkipped({ location: "topics" });
            closure_1_1(4809).pop();
          };
          tmp = jsx(extendedOnboarding(7450).HeaderActionButton, { text: null, onPress: null });
        }
        return tmp;
      },
      render() {
        return closure_1_4(skipIntro(16547), {});
      },
      impressionName: discord_common_AnalyticsUtils.ImpressionNames.ICYMI_ONBOARDING_TOPICS
    };
    obj7.headerLeft = NavigatorHeader.getHeaderBackButton();
    obj7.headerRight = function headerRight() {
      const obj = { text: null, onPress: null };
      const intl = extendedOnboarding(1114).intl;
      obj.text = intl.string(extendedOnboarding(1114).t["5Wxrcd"]);
      obj.onPress = function onPress() {
        const ICYMIAnalytics = extendedOnboarding(8445).ICYMIAnalytics;
        const result = ICYMIAnalytics.trackFeedOnboardingScreenSkipped({ location: "guilds" });
        closure_1_1(4809).pop();
      };
      return closure_1_4(extendedOnboarding(7450).HeaderActionButton, obj);
    };
    obj7.render = function render() {
      return closure_1_4(skipIntro(16555), {});
    };
    obj7.impressionName = discord_common_AnalyticsUtils.ImpressionNames.ICYMI_ONBOARDING_SELECT_GUILDS;
    obj[ICYMIInfoModalTypes.ICYMIInfoScreens.JOIN_GUILDS] = obj7;
    return obj;
  }, items);
  let items1 = [extendedOnboarding, skipIntro];
  if (extendedOnboarding) {
    let obj2 = { screens: navigatorScreens, steps: tmp4, initialRouteName: null };
    let ICYMIInfoScreens = tmp(16538).ICYMIInfoScreens;
    obj2.initialRouteName = skipIntro ? ICYMIInfoScreens.TOPICS_CLOUD : ICYMIInfoScreens.DEFAULT;
    tmp5(tmp(14227).StepModal, obj2);
  } else {
    let obj3 = { screens: navigatorScreens, initialRouteName: tmp(16538).ICYMIInfoScreens.DEFAULT };
    return tmp5(tmp(12022).Modal, obj3);
  }
};
