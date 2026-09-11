// Module ID: 11924
// Function ID: 11925
// Name: system_message/GuildRoleSubscriptionSystemMessageUtils
// Dependencies: [1074, 7530, 8067, 4787, 2]
// Exports: handleRoleSubscriptionPurchaseSystemMessageCtaClicked

// Module 11924 (system_message/GuildRoleSubscriptionSystemMessageUtils)
import Constants from "Constants" /* 1074 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 4787 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 7530 */;
import GuildRoleSubscriptionSystemMessageUtils from "GuildRoleSubscriptionSystemMessageUtils" /* 8067 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/system_message/GuildRoleSubscriptionSystemMessageUtils.tsx");

export const handleRoleSubscriptionPurchaseSystemMessageCtaClicked = function handleRoleSubscriptionPurchaseSystemMessageCtaClicked(messageChannel, message, stickerId) {
  const obj = MessageActionCreatorsDefault;
  obj.sendGreetMessage(messageChannel.id, stickerId, MessageActionCreatorsDefault.getSendMessageOptionsForReply({ channel: messageChannel, message, shouldMention: true, showMentionToggle: true }));
  const obj3 = { channel: messageChannel, message, shouldMention: true, showMentionToggle: true };
  const roleSubscriptionPurchaseSystemMessageEventProperties = GuildRoleSubscriptionSystemMessageUtils.getRoleSubscriptionPurchaseSystemMessageEventProperties(messageChannel, message);
  const obj6 = {};
  const merged = Object.assign(roleSubscriptionPurchaseSystemMessageEventProperties);
  obj6.sticker_id = stickerId;
  AppAnalyticsUtilsDefault.trackWithMetadata(AnalyticEvents.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CTA_CLICKED, obj6);
};
