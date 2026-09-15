// Module ID: 8184
// Function ID: 8185
// Name: GiftIntentSystemMessage
// Dependencies: [4639, 576, 8185, 8071, 8193, 8053, 8056, 2]
// Exports: createGiftIntentSystemMessage

// Module 8184 (GiftIntentSystemMessage)
import nativeDefault from "native" /* 576 */;
import _modDef8056 from "module_8056" /* 8056 */;
import createCommonMessageDefault from "createCommonMessage" /* 8071 */;
import GiftIntentEmbed from "GiftIntentEmbed" /* 8185 */;
import createStyles from "createStyles" /* 4639 */;
import size from "module_2" /* 2 */;

let closure_3 = createStyles.createNativeStyleProperties({ iconTintColor: nativeDefault.colors.BACKGROUND_BRAND, iconDividerColor: nativeDefault.colors.ICON_STRONG });
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/GiftIntentSystemMessage.tsx");

export const createGiftIntentSystemMessage = function createGiftIntentSystemMessage(message) {
  ({ message, theme } = message);
  const giftIntentEmbed = GiftIntentEmbed.createGiftIntentEmbed(message, theme);
  if (null == giftIntentEmbed) {
    return null;
  } else {
    const obj3 = {};
    const merged = Object.assign(createCommonMessageDefault(message));
    obj3.giftIntentInfo = giftIntentEmbed;
    const tmp5 = closure_3(theme);
    obj3.ephemeralIndication = tmp(8193).createEphemeralIndication(message);
    const tmpResult = tmp(8193);
    obj3.iconUrl = tmp(8053).getAssetUriForEmbed(_modDef8056);
    ({ iconTintColor: obj2.iconTintColor, iconDividerColor: obj2.iconDividerColor } = tmp5);
    return obj3;
  }
};
