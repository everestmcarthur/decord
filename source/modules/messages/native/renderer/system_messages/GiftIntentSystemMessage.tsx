// Module ID: 8295
// Function ID: 8296
// Name: GiftIntentSystemMessage
// Dependencies: [4722, 576, 8296, 8183, 8304, 8165, 8168, 2]
// Exports: createGiftIntentSystemMessage

// Module 8295 (GiftIntentSystemMessage)
import nativeDefault from "native" /* 576 */;
import _modDef8168 from "module_8168" /* 8168 */;
import createCommonMessageDefault from "createCommonMessage" /* 8183 */;
import GiftIntentEmbed from "GiftIntentEmbed" /* 8296 */;
import createStyles from "createStyles" /* 4722 */;
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
    obj3.ephemeralIndication = tmp(8304).createEphemeralIndication(message);
    const tmpResult = tmp(8304);
    obj3.iconUrl = tmp(8165).getAssetUriForEmbed(_modDef8168);
    ({ iconTintColor: obj2.iconTintColor, iconDividerColor: obj2.iconDividerColor } = tmp5);
    return obj3;
  }
};
