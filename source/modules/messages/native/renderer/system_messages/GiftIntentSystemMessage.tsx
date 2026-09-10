// Module ID: 8091
// Function ID: 8092
// Name: GiftIntentSystemMessage
// Dependencies: [4574, 576, 8092, 7978, 8100, 7960, 7963, 2]
// Exports: createGiftIntentSystemMessage

// Module 8091 (GiftIntentSystemMessage)
import nativeDefault from "native" /* 576 */;
import _modDef7963 from "module_7963" /* 7963 */;
import createCommonMessageDefault from "createCommonMessage" /* 7978 */;
import GiftIntentEmbed from "GiftIntentEmbed" /* 8092 */;
import createStyles from "createStyles" /* 4574 */;
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
    obj3.ephemeralIndication = tmp(8100).createEphemeralIndication(message);
    const tmpResult = tmp(8100);
    obj3.iconUrl = tmp(7960).getAssetUriForEmbed(_modDef7963);
    ({ iconTintColor: obj2.iconTintColor, iconDividerColor: obj2.iconDividerColor } = tmp5);
    return obj3;
  }
};
