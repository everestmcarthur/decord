// Module ID: 8193
// Function ID: 8194
// Name: GiftIntentSystemMessage
// Dependencies: [4638, 576, 8194, 8080, 8202, 8062, 8065, 2]
// Exports: createGiftIntentSystemMessage

// Module 8193 (GiftIntentSystemMessage)
import nativeDefault from "native" /* 576 */;
import _modDef8065 from "module_8065" /* 8065 */;
import createCommonMessageDefault from "createCommonMessage" /* 8080 */;
import GiftIntentEmbed from "GiftIntentEmbed" /* 8194 */;
import createStyles from "createStyles" /* 4638 */;
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
    obj3.ephemeralIndication = tmp(8202).createEphemeralIndication(message);
    const tmpResult = tmp(8202);
    obj3.iconUrl = tmp(8062).getAssetUriForEmbed(_modDef8065);
    ({ iconTintColor: obj2.iconTintColor, iconDividerColor: obj2.iconDividerColor } = tmp5);
    return obj3;
  }
};
