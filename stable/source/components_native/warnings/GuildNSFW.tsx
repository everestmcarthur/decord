// Module ID: 12669
// Function ID: 12670
// Name: GuildNSFW
// Dependencies: [109, 19, 1979, 1098, 21, 504, 4771, 4773, 5520, 8412, 8414, 1114, 12670, 2]
// Exports: default

// Module 12669 (GuildNSFW)
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5520 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8412 */;
import GatedContentDefault from "GatedContent" /* 12670 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 1979 */;

const require = globalThis.__r;

const require = fn;
let closure_3 = ["modalType"];
const AgeGateSource = fn(1098).AgeGateSource;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("components_native/warnings/GuildNSFW.tsx");

export default function GuildNSFW(channelId) {
  _require = channelId;
  const items = [GuildStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => GuildStore.getGuild(channelId.guildId));
  let obj = require("initialize");
  const ageGateVerifyContentForGuild = require("AgeGateUtils").useAgeGateVerifyContentForGuild(stateFromStores);
  const modalType = ageGateVerifyContentForGuild.modalType;
  const obj2 = require("AgeGateUtils");
  const tmp5 = _objectWithoutProperties(ageGateVerifyContentForGuild, closure_3);
  const maybePerformReactiveCheckForSource = require("AgeVerificationUtils").useMaybePerformReactiveCheckForSource(AgeGateSource.NSFW_SERVER);
  const obj4 = {};
  const callback = noop.useCallback(() => {
    const obj = AgeVerificationActionCreatorsDefault;
    const result = obj.showAgeVerificationGetStartedModal({ entryPoint: channelId(8414).AgeVerificationModalEntryPoint.NSFW_GUILD });
  }, []);
  const merged = Object.assign(tmp5);
  let id;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  function handleDisagree() {
    GuildActionCreatorsDefault.nsfwReturnToSafety(channelId.guildId);
    if (channelId.onReturnToSafety != null) {
      onReturnToSafety();
    }
  }
  obj4.guildId = id;
  obj4.channelId = channelId.channelId;
  const intl = tmp(1114).intl;
  obj4.disagreement = intl.string(require("util").t["/g10LC"]);
  if (require("AgeVerificationAnalyticsUtils").NsfwSpaceWarningModalType.NSFW_CHANNEL_AGE_VERIFY !== modalType) {
    if (tmp(8414).NsfwSpaceWarningModalType.GUILD_LARGE_SERVER !== modalType) {
      if (tmp(8414).NsfwSpaceWarningModalType.NSFW_CHANNEL_UNDERAGE === modalType) {
        const obj5 = { modalType, disagreementButtonVariant: "primary", onDisagree: handleDisagree };
        const merged1 = Object.assign(obj4);
        return jsx(GatedContentDefault, { modalType, disagreementButtonVariant: "primary", onDisagree: handleDisagree });
      } else {
        const obj6 = {
          modalType,
          onAgree: function handleAgree() {
                  GuildActionCreatorsDefault.nsfwAgree(channelId.guildId);
                },
          onDisagree: handleDisagree
        };
        const merged2 = Object.assign(obj4);
        return jsx(GatedContentDefault, {
          modalType,
          onAgree: function handleAgree() {
                  GuildActionCreatorsDefault.nsfwAgree(channelId.guildId);
                },
          onDisagree: handleDisagree
        });
      }
    }
  }
  const obj3 = require("AgeVerificationUtils");
  const obj7 = { modalType, onAgree: callback, onDisagree: handleDisagree };
  const merged3 = Object.assign(obj4);
  return jsx(GatedContentDefault, { modalType, onAgree: callback, onDisagree: handleDisagree });
};
