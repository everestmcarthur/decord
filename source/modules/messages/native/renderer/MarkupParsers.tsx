// Module ID: 8142
// Function ID: 8143
// Name: MarkupParsers
// Dependencies: [1074, 1090, 1437, 4595, 8143, 8144, 7940, 8158, 1232, 2]
// Exports: parseEmbedDescriptionMarkup, parseEmbedTitleMarkup, parseEmbedTitleMarkupWithoutLinks, parseMessageMarkup

// Module 8142 (MarkupParsers)
import Constants from "Constants" /* 1074 */;
import DurationsDefault from "Durations" /* 1090 */;
import SentryUtilsDefault from "SentryUtils" /* 1232 */;
import MarkupUtilsDefault from "MarkupUtils" /* 4595 */;
import renderMessageMarkup from "renderMessageMarkup" /* 7940 */;
import NativeMarkdownExperiment2 from "NativeMarkdownExperiment" /* 8143 */;
import parseNativeMarkupDefault from "parseNativeMarkup" /* 8158 */;
import priv from "priv" /* 1437 */;
import size from "module_2" /* 2 */;

const ChangeLogStandardTemplate = changelogRules(8144);
function parseMessageContentToAST(arg0, arg1, arg2) {
  if (!arg2) {
    return renderMessageMarkup.renderMessageMarkupToAST(arg0, arg1);
  } else {
    try {
      return renderMessageMarkup.renderMessageMarkupToASTWithParser(parseNativeMarkupDefault, arg0, arg1);
    } catch (tmp4) {
      SentryUtilsDefault.captureException(tmp4);
    }
  }
}
const MessageTypes = Constants.MessageTypes;
let obj = { max: Infinity, maxAge: 15 * DurationsDefault.Millis.MINUTE, updateAgeOnGet: true };
let closure_4 = new priv(obj);
const tmp2 = new priv(obj);
let closure_5 = new priv(obj);
let obj2 = {};
let merged = Object.assign(obj);
obj2.updateAgeOnGet = false;
const importDefaultResult1 = new priv(obj2);
const tmp3 = new priv(obj);
let closure_7 = new priv(obj);
let result = size.fileFinishedImporting("modules/messages/native/renderer/MarkupParsers.tsx");

export const parseEmbedTitleMarkup = function parseEmbedTitleMarkup(rawName, channelId) {
  const combined = "" + rawName + "-" + channelId;
  value = closure_4.get(combined);
  if (null == value) {
    const obj3 = { channelId };
    const parseEmbedTitleToASTResult = MarkupUtilsDefault.parseEmbedTitleToAST(rawName, true, obj3);
    const result = closure_4.set(combined, parseEmbedTitleToASTResult);
    value = parseEmbedTitleToASTResult;
  }
  return value;
};
export const parseEmbedTitleMarkupWithoutLinks = function parseEmbedTitleMarkupWithoutLinks(arg0, channelId) {
  const combined = "" + arg0 + "-" + channelId + "-nolinks";
  value = closure_5.get(combined);
  if (null == value) {
    const obj3 = { channelId };
    const result = MarkupUtilsDefault.parseEmbedTitleWithoutLinksToAST(arg0, true, obj3);
    const result1 = closure_5.set(combined, result);
    value = result;
  }
  return value;
};
export const parseEmbedDescriptionMarkup = function parseEmbedDescriptionMarkup(arg0) {
  ({ description, channelId, isField, replaceMap, showListsAndHeaders } = arg0);
  ({ ignoreCache, showMaskedLinks } = arg0);
  const combined = "" + description + "-" + channelId;
  value = importDefaultResult1.get(combined);
  if (null != value) {
    if (!ignoreCache) {
      return value;
    }
  }
  let replaced = description;
  let tmp4 = description;
  const keys = Object.keys();
  if (keys !== undefined) {
    tmp4 = replaced;
    while (keys[tmp] !== undefined) {
      replaced = replaced.replaceAll(tmp7, replaceMap[tmp7]);
      continue;
    }
  }
  const obj = { channelId, allowGameMentions: true, allowLinks: true, allowEmojiLinks: true, allowHeading: null, allowList: null, previewLinkTarget: null };
  let tmp8 = !isField;
  if (!isField) {
    tmp8 = showListsAndHeaders;
  }
  obj.allowHeading = tmp8;
  obj.allowList = showListsAndHeaders;
  obj.previewLinkTarget = showMaskedLinks;
  const parseToASTResult = MarkupUtilsDefault.parseToAST(tmp4, true, obj);
  const result = importDefaultResult1.set(combined, parseToASTResult);
  return parseToASTResult;
};
export const parseMessageMarkup = function parseMessageMarkup(message, message2, forceHideSimpleEmbedContent, isInlineReplyPreview, arg4, result, result2) {
  let flag = isInlineReplyPreview;
  if (isInlineReplyPreview === undefined) {
    flag = false;
  }
  let flag2 = arg4;
  if (arg4 === undefined) {
    flag2 = false;
  }
  let obj = result;
  if (result === undefined) {
    obj = false;
  }
  let flag3 = result2;
  if (result2 === undefined) {
    flag3 = false;
  }
  let changelogRules = require;
  let astParserForResultResult = dependencyMap;
  const NativeMarkdownExperiment = NativeMarkdownExperiment2.NativeMarkdownExperiment;
  let enabled = NativeMarkdownExperiment.getConfig({ location: "parseMessageMarkup" }).enabled;
  value = closure_7.get(message);
  if (null != value) {
    if (value.isInlineReplyPreview === flag) {
      if (value.nativeMarkdownEnabled === enabled) {
        return value;
      }
    }
  }
  if (message.type !== MessageTypes.CHANGELOG) {
    const obj3 = { contentMessage: message2, hideSimpleEmbedContent: forceHideSimpleEmbedContent, formatInline: flag, allowGameMentions: true, allowHeading: null, allowList: null, allowLinks: null, previewLinkTarget: null };
    let tmp5 = flag2;
    if (!flag2) {
      tmp5 = obj;
    }
    obj3.allowHeading = tmp5;
    let tmp6 = flag2;
    if (!flag2) {
      tmp6 = obj;
    }
    let obj4 = {};
    obj3.allowList = tmp6;
    obj3.allowLinks = flag3;
    obj3.previewLinkTarget = flag3;
    const merged = Object.assign(parseMessageContentToAST(message, obj3, enabled));
    obj4.isInlineReplyPreview = flag;
    obj4.nativeMarkdownEnabled = enabled;
    result = obj2.set(message, obj4);
  }
  const obj5 = MarkupUtilsDefault;
  changelogRules = ChangeLogStandardTemplate.changelogRules;
  const obj6 = { hideSimpleEmbedContent: forceHideSimpleEmbedContent, formatInline: flag, allowHeading: null, allowList: null, allowLinks: null, previewLinkTarget: null };
  flag = flag2;
  const changelogRulesResult = ChangeLogStandardTemplate;
  if (!flag2) {
    flag = obj;
  }
  obj6.allowHeading = flag;
  if (!flag2) {
    flag2 = obj;
  }
  obj = { content: null, isInlineReplyPreview: false, hasSpoilerEmbeds: false, hasBailedAst: false, nativeMarkdownEnabled: null };
  obj6.allowList = flag2;
  obj6.allowLinks = flag3;
  obj6.previewLinkTarget = flag3;
  astParserForResultResult = obj5.astParserFor(changelogRules(message.changelogId, true))(message.content, false, obj6);
  obj.content = astParserForResultResult;
  obj.nativeMarkdownEnabled = enabled;
  enabled = obj2.set(message, obj);
  obj4 = obj;
};
