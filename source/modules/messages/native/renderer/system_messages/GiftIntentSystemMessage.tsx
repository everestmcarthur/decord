// Module ID: 8213
// Function ID: 8214
// Name: GiftIntentSystemMessage
// Dependencies: [4640, 576, 8214, 8100, 8222, 8082, 8085, 2]
// Exports: createGiftIntentSystemMessage

// Module 8213 (GiftIntentSystemMessage)
import nativeDefault from "native" /* 576 */;
import _modDef8085 from "module_8085" /* 8085 */;
import createCommonMessageDefault from "createCommonMessage" /* 8100 */;
import GiftIntentEmbed from "GiftIntentEmbed" /* 8214 */;
import createStyles from "createStyles" /* 4640 */;
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
    obj3.ephemeralIndication = tmp(8222).createEphemeralIndication(message);
    const tmpResult = tmp(8222);
    obj3.iconUrl = tmp(8082).getAssetUriForEmbed(_modDef8085);
    ({ iconTintColor: obj2.iconTintColor, iconDividerColor: obj2.iconDividerColor } = tmp5);
    return obj3;
  }
};
