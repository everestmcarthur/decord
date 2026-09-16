// Module ID: 8163
// Function ID: 8164
// Name: PremiumGroupInviteSystemMessage
// Dependencies: [502, 1958, 4638, 576, 8164, 8080, 8062, 8168, 2]
// Exports: createPremiumGroupInviteSystemMessage

// Module 8163 (PremiumGroupInviteSystemMessage)
import nativeDefault from "native" /* 576 */;
import createCommonMessageDefault from "createCommonMessage" /* 8080 */;
import PremiumGroupInviteEmbed from "PremiumGroupInviteEmbed" /* 8164 */;
import _modDef8168 from "module_8168" /* 8168 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 1958 */;

const renderer_EmbedUtils = tmp3(8062);
require = fn;
const createStyles = fn(4638);
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
    obj3.iconUrl = renderer_EmbedUtils.getAssetUriForEmbed(_modDef8168);
    ({ iconTintColor: obj2.iconTintColor, iconDividerColor: obj2.iconDividerColor } = tmp7);
    return obj3;
  }
};
