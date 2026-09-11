// Module ID: 8152
// Function ID: 8153
// Name: GiftIntentSystemMessage
// Dependencies: [4607, 576, 8153, 8039, 8161, 8021, 8024, 2]
// Exports: createGiftIntentSystemMessage

// Module 8152 (GiftIntentSystemMessage)
import nativeDefault from "native" /* 576 */;
import _modDef8024 from "module_8024" /* 8024 */;
import createCommonMessageDefault from "createCommonMessage" /* 8039 */;
import GiftIntentEmbed from "GiftIntentEmbed" /* 8153 */;
import createStyles from "createStyles" /* 4607 */;
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
    obj3.ephemeralIndication = tmp(8161).createEphemeralIndication(message);
    const tmpResult = tmp(8161);
    obj3.iconUrl = tmp(8021).getAssetUriForEmbed(_modDef8024);
    ({ iconTintColor: obj2.iconTintColor, iconDividerColor: obj2.iconDividerColor } = tmp5);
    return obj3;
  }
};
