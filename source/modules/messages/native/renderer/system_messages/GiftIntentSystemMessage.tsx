// Module ID: 8151
// Function ID: 8152
// Name: GiftIntentSystemMessage
// Dependencies: [4606, 576, 8152, 8038, 8160, 8020, 8023, 2]
// Exports: createGiftIntentSystemMessage

// Module 8151 (GiftIntentSystemMessage)
import nativeDefault from "native" /* 576 */;
import _modDef8023 from "module_8023" /* 8023 */;
import createCommonMessageDefault from "createCommonMessage" /* 8038 */;
import GiftIntentEmbed from "GiftIntentEmbed" /* 8152 */;
import createStyles from "createStyles" /* 4606 */;
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
    obj3.ephemeralIndication = tmp(8160).createEphemeralIndication(message);
    const tmpResult = tmp(8160);
    obj3.iconUrl = tmp(8020).getAssetUriForEmbed(_modDef8023);
    ({ iconTintColor: obj2.iconTintColor, iconDividerColor: obj2.iconDividerColor } = tmp5);
    return obj3;
  }
};
