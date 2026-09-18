// Module ID: 7121
// Function ID: 7122
// Name: GuildOnboardingModal
// Dependencies: [19, 5572, 1957, 1979, 2011, 7100, 7097, 1074, 21, 1100, 7122, 5624, 7159, 7106, 7183, 7124, 504, 7105, 5547, 7000, 1114, 2]
// Exports: default

// Module 7121 (GuildOnboardingModal)
import MemberVerificationActionCreatorsDefault from "MemberVerificationActionCreators" /* 5547 */;
import NavigatorHeader from "NavigatorHeader" /* 5624 */;
import GuildOnboardingActionCreatorsDefault from "GuildOnboardingActionCreators" /* 7105 */;
import noop from "module_19" /* 19 */;
import MemberVerificationFormStore from "MemberVerificationFormStore" /* 5572 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildStore from "GuildStore" /* 1979 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2011 */;
import GuildOnboardingPromptsStore from "GuildOnboardingPromptsStore" /* 7100 */;

require = fn;
function headerTitle() {
  return null;
}
function headerRight() {
  return null;
}
let closure_9 = fn(7097).GuildOnboardingModalStates;
const Constants = fn(1074);
({ GuildFeatures: c10, Routes: closure_11 } = Constants);
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_onboarding/native/GuildOnboardingModal.tsx");

export default function GuildOnboardingModal(guildId) {
  guildId = guildId.guildId;
  const onFinish = guildId.onFinish;
  const onClose = guildId.onClose;
  const landingAnimation = guildId.landingAnimation;
  const isFirstOpen = guildId.isFirstOpen;
  const backShouldLeaveGuild = guildId.backShouldLeaveGuild;
  let stateFromStores;
  let callback;
  const items = [stateFromStores];
  stateFromStores = guildId(onClose[16]).useStateFromStores(items, () => {
    const guild = GuildStore.getGuild(guildId);
    let tmp2 = null != guild;
    if (tmp2) {
      const features = guild.features;
      let hasItem = features.has(constants.MEMBER_VERIFICATION_GATE_ENABLED);
      if (hasItem) {
        const features2 = guild.features;
        hasItem = !features2.has(tmp3.MEMBER_VERIFICATION_MANUAL_APPROVAL);
      }
      tmp2 = hasItem;
      tmp3 = constants;
    }
    return tmp2;
  });
  let obj = guildId(onClose[16]);
  const items1 = [callback];
  const stateFromStoresArray = guildId(onClose[16]).useStateFromStoresArray(items1, () => GuildOnboardingPromptsStore.getOnboardingPromptsForOnboarding(guildId));
  let obj2 = guildId(onClose[16]);
  const items2 = [callback];
  const stateFromStores1 = guildId(onClose[16]).useStateFromStores(items2, () => GuildOnboardingPromptsStore.getOnboardingConnections(guildId));
  const items3 = [guildId];
  callback = landingAnimation.useCallback((id, id2, selected) => {
    const option = GuildOnboardingActionCreatorsDefault.selectOption(guildId, id, id2, selected);
  }, items3);
  const items4 = [guildId, stateFromStoresArray];
  const callback1 = landingAnimation.useCallback(() => {
    GuildOnboardingActionCreatorsDefault.completeOnboarding(guildId, stateFromStoresArray);
  }, items4);
  const items5 = [guildId, stateFromStores];
  const effect = landingAnimation.useEffect(() => {
    if (stateFromStores) {
      const verificationForm = MemberVerificationActionCreatorsDefault.fetchVerificationForm(guildId);
    }
  }, items5);
  const items6 = [guildId, stateFromStoresArray, stateFromStores1, callback, callback1, onFinish, onClose, landingAnimation, isFirstOpen, backShouldLeaveGuild];
  if (isFirstOpen) {
    if (stateFromStores1.length > 0) {
      let PROMPT = callback1.CONNECTIONS;
    }
    const obj4 = { screens: tmp8, initialRouteName: PROMPT, headerBackTitle: null };
    const intl = tmp(tmp2[20]).intl;
    obj4.headerBackTitle = intl.string(tmp(tmp2[20]).t["13/7kX"]);
    return jsx(tmp(tmp2[19]).Navigator, { screens: tmp8, initialRouteName: PROMPT, headerBackTitle: null });
  }
  PROMPT = callback1.PROMPT;
};
