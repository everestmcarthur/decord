// Module ID: 8077
// Function ID: 8078
// Name: GiftIntentSystemMessage
// Dependencies: [4560, 576, 8078, 7965, 8086, 7947, 7950, 2]
// Exports: createGiftIntentSystemMessage

// Module 8077 (GiftIntentSystemMessage)
import nativeDefault from "native" /* 576 */;
import _modDef7950 from "module_7950" /* 7950 */;
import createCommonMessageDefault from "createCommonMessage" /* 7965 */;
import GiftIntentEmbed from "GiftIntentEmbed" /* 8078 */;
import createStyles from "createStyles" /* 4560 */;
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
    obj3.ephemeralIndication = tmp(8086).createEphemeralIndication(message);
    const tmpResult = tmp(8086);
    obj3.iconUrl = tmp(7947).getAssetUriForEmbed(_modDef7950);
    ({ iconTintColor: obj2.iconTintColor, iconDividerColor: obj2.iconDividerColor } = tmp5);
    return obj3;
  }
};
