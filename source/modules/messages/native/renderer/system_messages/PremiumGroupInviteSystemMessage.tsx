// Module ID: 8121
// Function ID: 8122
// Name: PremiumGroupInviteSystemMessage
// Dependencies: [502, 1957, 4606, 576, 8122, 8038, 8020, 8126, 2]
// Exports: createPremiumGroupInviteSystemMessage

// Module 8121 (PremiumGroupInviteSystemMessage)
import nativeDefault from "native" /* 576 */;
import createCommonMessageDefault from "createCommonMessage" /* 8038 */;
import PremiumGroupInviteEmbed from "PremiumGroupInviteEmbed" /* 8122 */;
import _modDef8126 from "module_8126" /* 8126 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 1957 */;

const renderer_EmbedUtils = tmp3(8020);
require = fn;
const createStyles = fn(4606);
let closure_5 = createStyles.createNativeStyleProperties({ iconTintColor: nativeDefault.colors.ICON_STRONG, iconDividerColor: nativeDefault.colors.ICON_STRONG });
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/PremiumGroupInviteSystemMessage.tsx");

export const createPremiumGroupInviteSystemMessage = function createPremiumGroupInviteSystemMessage(message) {
  ({ message, theme } = message);
  const channel = ChannelStore.getChannel(message.getChannelId());
  const id = AuthenticationStore.getId();
  const premiumGroupInviteEmbed = PremiumGroupInviteEmbed.createPremiumGroupInviteEmbed(message, theme, id, channel);
  if (null == premiumGroupInviteEmbed) {
    return null;
  } else {
    const obj3 = {};
    const merged = Object.assign(createCommonMessageDefault(message));
    obj3.premiumGroupInviteInfo = premiumGroupInviteEmbed;
    const tmp7 = closure_5(theme);
    obj3.iconUrl = renderer_EmbedUtils.getAssetUriForEmbed(_modDef8126);
    ({ iconTintColor: obj2.iconTintColor, iconDividerColor: obj2.iconDividerColor } = tmp7);
    return obj3;
  }
};
