// Module ID: 8002
// Function ID: 8003
// Name: WelcomeCTAUtils
// Dependencies: [1371, 8003, 1074, 11, 7456, 1242, 2]
// Exports: handleWelcomeCtaClicked, pickHelloSticker, pickWelcomeSticker

// Module 8002 (WelcomeCTAUtils)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 7456 */;
import UserStore from "UserStore" /* 1371 */;

const WELCOME_STICKERS = fn(8003).WELCOME_STICKERS;
const AnalyticEvents = fn(1074).AnalyticEvents;
const size = fn(2);
const result = size.fileFinishedImporting("modules/welcome_cta/WelcomeCTAUtils.tsx");

export const pickHelloSticker = function pickHelloSticker() {
  const currentUser = UserStore.getCurrentUser();
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  let num = 0;
  if (null != id) {
    num = SnowflakeUtilsDefault.extractTimestamp(id);
  }
  return WELCOME_STICKERS[num % WELCOME_STICKERS.length];
};
export const pickWelcomeSticker = function pickWelcomeSticker(id) {
  const currentUser = UserStore.getCurrentUser();
  id = undefined;
  if (currentUser != null) {
    id = currentUser.id;
  }
  let num = 0;
  if (null != id) {
    num = SnowflakeUtilsDefault.extractTimestamp(id);
  }
  const obj2 = SnowflakeUtilsDefault;
  return WELCOME_STICKERS[(num + obj2.extractTimestamp(obj2, id)) % WELCOME_STICKERS.length];
};
export const handleWelcomeCtaClicked = function handleWelcomeCtaClicked(messageChannel, message, stickerId) {
  const obj = MessageActionCreatorsDefault;
  obj.sendGreetMessage(messageChannel.id, stickerId, MessageActionCreatorsDefault.getSendMessageOptionsForReply({ channel: messageChannel, message, shouldMention: true, showMentionToggle: true }));
  const obj3 = { channel: messageChannel, message, shouldMention: true, showMentionToggle: true };
  const obj5 = { is_reply: true, sticker_id: stickerId, target_user: message.author.id, sender: null };
  const currentUser = UserStore.getCurrentUser();
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  obj5.sender = id;
  AnalyticsUtilsDefault.track(AnalyticEvents.WELCOME_CTA_CLICKED, obj5);
};
