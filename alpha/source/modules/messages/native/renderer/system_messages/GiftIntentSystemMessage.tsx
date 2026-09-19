// Module ID: 8333
// Function ID: 8334
// Name: GiftIntentSystemMessage
// Dependencies: [4756, 576, 8334, 8221, 8342, 8203, 8206, 2]
// Exports: createGiftIntentSystemMessage

// Module 8333 (GiftIntentSystemMessage)
import nativeDefault from "native" /* 576 */;
import _modDef8206 from "module_8206" /* 8206 */;
import createCommonMessageDefault from "createCommonMessage" /* 8221 */;
import GiftIntentEmbed from "GiftIntentEmbed" /* 8334 */;
import createStyles from "createStyles" /* 4756 */;
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
    obj3.ephemeralIndication = tmp(8342).createEphemeralIndication(message);
    const tmpResult = tmp(8342);
    obj3.iconUrl = tmp(8203).getAssetUriForEmbed(_modDef8206);
    ({ iconTintColor: obj2.iconTintColor, iconDividerColor: obj2.iconDividerColor } = tmp5);
    return obj3;
  }
};
