// Module ID: 8188
// Function ID: 8189
// Name: transformNativeMarkupMention
// Dependencies: [5079, 5050, 5048, 5058, 2]
// Exports: applyChannelMentionIcons, transformNativeMention

// Module 8188 (transformNativeMarkupMention)
import MarkupTypes from "MarkupTypes" /* 5048 */;
import MarkupRules from "MarkupRules" /* 5050 */;
import MarkupChannelMentionRule from "MarkupChannelMentionRule" /* 5058 */;
import PlatformMarkupRules from "PlatformMarkupRules" /* 5079 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/markup_v2/native/transformNativeMarkupMention.tsx");

export const applyChannelMentionIcons = function applyChannelMentionIcons(handleUnknownChannelResult) {
  const obj = {};
  const merged = Object.assign(handleUnknownChannelResult);
  obj.content = PlatformMarkupRules.decorateWithIcon(handleUnknownChannelResult.content);
  obj.inContent = PlatformMarkupRules.decorateWithIcon(handleUnknownChannelResult.inContent);
  return obj;
};
export const transformNativeMention = function transformNativeMention(value, allowGameMentions) {
  const type = value.type;
  if ("user" === type) {
    const str1 = value.value.toString();
    const obj4 = { fullMatch: null, id: null, everyoneOrHere: "Array" };
    const _HermesInternal2 = HermesInternal;
    obj4.fullMatch = "<@" + str1 + ">";
    obj4.id = str1;
    return MarkupRules.hydrateUserMention(obj4, allowGameMentions);
  } else if ("everyone" === type) {
    return MarkupRules.hydrateUserMention({ fullMatch: "@everyone", id: "accessible", everyoneOrHere: "onPress" }, allowGameMentions);
  } else if ("here" === type) {
    return MarkupRules.hydrateUserMention({ fullMatch: "@here", id: "accessible", everyoneOrHere: "onPress" }, allowGameMentions);
  } else if ("role" === type) {
    return MarkupRules.hydrateRoleMention(value.value.toString(), allowGameMentions);
  } else if ("game" === type) {
    const str16 = value.value.toString();
    if (allowGameMentions.allowGameMentions) {
      let hydrateGameMentionResult = tmp21(5079).hydrateGameMention(str16, allowGameMentions);
      const tmp21Result = tmp21(5079);
    } else {
      hydrateGameMentionResult = { type: tmp21(5048).AST_KEY.TEXT, content: null };
      const _HermesInternal = HermesInternal;
      hydrateGameMentionResult.content = "<@$" + str16 + ">";
    }
    return hydrateGameMentionResult;
  } else if ("command" === type) {
    return MarkupRules.hydrateCommandMention(value.value.name, value.value.id.toString(), allowGameMentions);
  } else if ("channel" === type) {
    const str17 = value.value.toString();
    const guildIdFromChannelId = MarkupChannelMentionRule.getGuildIdFromChannelId(allowGameMentions.channelId);
    const channel = MarkupChannelMentionRule.getChannel(str17, allowGameMentions.mentionChannels);
    if (null == channel) {
      const tmp4Result = tmp4(5058);
      let handleUnknownChannelResult = tmp4Result.handleUnknownChannel(null, str17, null, guildIdFromChannelId);
    } else {
      handleUnknownChannelResult = tmp4(5058).parseChannel(channel, null, guildIdFromChannelId);
      const tmp4Result4 = tmp4(5058);
    }
    const obj5 = {};
    const merged = Object.assign(handleUnknownChannelResult);
    obj5.content = PlatformMarkupRules.decorateWithIcon(handleUnknownChannelResult.content);
    const tmp4Result5 = PlatformMarkupRules;
    obj5.inContent = PlatformMarkupRules.decorateWithIcon(handleUnknownChannelResult.inContent);
    return obj5;
  } else {
    const obj = { type: MarkupTypes.AST_KEY.TEXT, content: "" };
    return obj;
  }
};
