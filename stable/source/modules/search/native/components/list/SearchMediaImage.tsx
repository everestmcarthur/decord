// Module ID: 16668
// Function ID: 16669
// Name: SearchMediaImage
// Dependencies: [32, 19, 17, 1957, 7281, 1074, 21, 4560, 4495, 4411, 7296, 11246, 5081, 4965, 1476, 12016, 1115, 1114, 8761, 10180, 1384, 7329, 8264, 504, 10137, 10201, 2]
// Exports: SearchAttachmentMediaImage, SearchComponentMediaImage, SearchEmbedMediaImage, SearchFileMediaImage, SearchSoundMediaImage

// Module 16668 (SearchMediaImage)
import PlatformUtils from "PlatformUtils" /* 1115 */;
import utils_ImageUtils from "utils/ImageUtils" /* 1476 */;
import ObscureMediaModels from "ObscureMediaModels" /* 7296 */;
import MediaSourceUtil from "MediaSourceUtil" /* 8264 */;
import ImageWithPlaceholder from "ImageWithPlaceholder" /* 8761 */;
import CirclePlayIcon from "CirclePlayIcon" /* 10137 */;
import AttachmentPreview from "AttachmentPreview" /* 10201 */;
import MessageAttachmentUtils from "MessageAttachmentUtils" /* 12016 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import SearchMessageStore from "SearchMessageStore" /* 7281 */;

require = fn;
function SearchMediaObscurityIcon(obscureReason) {
  obscureReason = obscureReason.obscureReason;
  const height = obscureReason.height;
  const width = obscureReason.width;
  const tmp = closure_14();
  const tmp2 = height;
  const tmp3 = width;
  const tmp4 = height(width[8])();
  let str = "light";
  if (obj.isThemeDark(tmp4)) {
    str = "dark";
  }
  const items = [height, width];
  const items1 = [obscureReason];
  const memo = noop.useMemo(() => {
    const size = { height, width };
    return size;
  }, items);
  const memo1 = noop.useMemo(() => {
    if (ObscureMediaModels.ObscureReason.SPOILER === obscureReason) {
      return closure_2_11(tmp2(11246).SpoilerIcon, { size: "lg" });
    } else {
      if (tmp2(7296).ObscureReason.EXPLICIT_CONTENT !== tmp) {
        if (tmp2(7296).ObscureReason.GORE_CONTENT !== tmp) {
          if (tmp2(7296).ObscureReason.SELF_HARM_CONTENT !== tmp) {
            if (tmp2(7296).ObscureReason.POTENTIAL_EXPLICIT_CONTENT === tmp) {
              return null;
            }
          }
        }
      }
      return closure_2_11(tmp2(5081).ImageWarningIcon, { size: "lg" });
    }
  }, items1);
  const obj2 = { blurTheme: str, style: null };
  const items2 = [absoluteFill.absoluteFill, memo];
  obj2.style = items2;
  const children = [closure_11(tmp2(tmp3[13]), obj2), ];
  let tmp9Result = null != memo1;
  if (tmp9Result) {
    const obj3 = { style: null, children: null };
    const items4 = [absoluteFill.absoluteFill, tmp.container];
    obj3.style = items4;
    obj3.children = memo1;
    tmp9Result = closure_11(closure_7, obj3);
  }
  children[1] = tmp9Result;
  return closure_13(closure_12, { children });
}
get_ActivityIndicator = fn(17);
({ ImageBackground: hasOwnProperty, StyleSheet: metroRequire, View: closure_7 } = get_ActivityIndicator);
const MessageAttachmentFlags = fn(1074).MessageAttachmentFlags;
const jsxProd = fn(21);
({ jsx: closure_11, Fragment: closure_12, jsxs: map1 } = jsxProd);
const createStyles = fn(4560);
let closure_14 = createStyles.createStyles({ container: { justifyContent: "center", alignItems: "center" }, sound: { justifyContent: "center", alignItems: "center" } });
let closure_16 = noop.memo((containerWidth) => {
  ({ mediaUrl, mediaHeight, mediaWidth, containerStyle, renderFallback, obscureReason, containerHeight } = containerWidth);
  containerWidth = containerWidth.containerWidth;
  const scale = containerWidth.scale;
  const items = [containerHeight, containerWidth];
  ({ placeholder, placeholderVersion } = containerWidth);
  const memo = noop.useMemo(() => {
    const size = { height: containerHeight, width: containerWidth };
    return size;
  }, items);
  if (null != mediaUrl) {
    if (null != mediaHeight) {
      if (null != mediaWidth) {
        const result = containerHeight * scale;
        const result1 = containerWidth * scale;
        if (mediaWidth > mediaHeight) {
          const _Math2 = Math;
          const items1 = [Math.round(mediaWidth * (result1 / mediaHeight)), result1];
          let items2 = items1;
        } else {
          items2 = [result, ];
          const _Math = Math;
          items2[1] = Math.round(mediaHeight * (result / mediaWidth));
        }
        [tmp6, tmp7] = items2;
        const tmp5 = _slicedToArray(items2, 2);
        const obj2 = { src: mediaUrl, sourceWidth: mediaWidth, sourceHeight: mediaHeight, targetWidth: tmp6, targetHeight: tmp7, format: "png" };
        const srcWithWidthAndHeight = utils_ImageUtils.getSrcWithWidthAndHeight(obj2);
        const obscuredAlt = MessageAttachmentUtils.getObscuredAlt(obscureReason);
        let tmp12 = null;
        if (null != obscureReason) {
          let size = { obscureReason, height: containerHeight, width: containerWidth };
          tmp12 = closure_1_11(SearchMediaObscurityIcon, size);
        }
        if (tmp8Result.isAndroid()) {
          if (null != obscureReason) {
            const obj4 = { style: containerStyle, children: null };
            const obj5 = { style: memo, source: null, blurRadius: 10, resizeMode: "cover", accessibilityLabel: null };
            const obj6 = { uri: srcWithWidthAndHeight };
            obj5.source = obj6;
            obj5.accessibilityLabel = obscuredAlt;
            const items3 = [closure_1_11(hasOwnProperty, obj5), tmp12];
            obj4.children = items3;
            return map1(React5, obj4);
          }
        }
        tmp8Result = PlatformUtils;
        let stringResult = obscuredAlt;
        if (tmp8Result2.isAndroid()) {
          const intl = tmp8(1114).intl;
          stringResult = intl.string(tmp8(1114).t.jes7FG);
        }
        const obj7 = { style: containerStyle, children: null };
        const obj8 = { style: memo, uri: srcWithWidthAndHeight, placeholder, placeholderVersion, alt: stringResult };
        const items4 = [closure_1_11(ImageWithPlaceholder.ImageWithPlaceholder, obj8), tmp12];
        obj7.children = items4;
        return map1(React5, obj7);
      }
    }
  }
  let tmp23 = null;
  if (null != renderFallback) {
    const obj9 = { children: renderFallback() };
    tmp23 = closure_1_11(closure_1_12, obj9);
  }
  return tmp23;
});
let size = fn(2);
let result = size.fileFinishedImporting("modules/search/native/components/list/SearchMediaImage.tsx");

export const SearchAttachmentMediaImage = function SearchAttachmentMediaImage(attachment) {
  attachment = attachment.attachment;
  const channelId = attachment.channelId;
  const merged = Object.assign(attachment, Object.assign({ attachment: 0, channelId: 0, authorId: 0 }));
  dependencyMap = undefined;
  const enabledHarmTypesBitmaskForChannelAndAuthorId = attachment(10180).useEnabledHarmTypesBitmaskForChannelAndAuthorId(channelId, attachment.authorId);
  const obj = attachment(10180);
  let num = attachment.flags;
  if (num == null) {
    num = 0;
  }
  let hasFlagResult = attachment(1384).hasFlag(num, MessageAttachmentFlags.IS_SPOILER);
  if (!hasFlagResult) {
    hasFlagResult = tmp2(7329).isChannelSpoilerGated(ChannelStore.getChannel(channelId));
    const tmp2Result = tmp2(7329);
  }
  dependencyMap = hasFlagResult;
  const items = [attachment, enabledHarmTypesBitmaskForChannelAndAuthorId, hasFlagResult];
  const memo = noop.useMemo(() => MessageAttachmentUtils.getObscureReasonForAttachment(attachment, enabledHarmTypesBitmaskForChannelAndAuthorId, c2), items);
  const obj2 = attachment(1384);
  const obj3 = {};
  const attachmentUrl = attachment(8264).getAttachmentUrl(attachment);
  const merged1 = Object.assign(merged);
  obj3.obscureReason = memo;
  obj3.mediaUrl = attachmentUrl;
  ({ height: obj5.mediaHeight, width: obj5.mediaWidth } = attachment);
  return closure_11(closure_16, obj3);
};
export const SearchEmbedMediaImage = function SearchEmbedMediaImage(embed) {
  embed = embed.embed;
  ({ sources: importDefault, messageId: dependencyMap, channelId } = embed);
  const merged = Object.assign(embed, Object.assign({ embed: 0, sources: 0, messageId: 0, channelId: 0, authorId: 0 }));
  closure_3 = embed(10180).useEnabledHarmTypesBitmaskForChannelAndAuthorId(channelId, embed.authorId);
  const obj = embed(10180);
  const tmp2 = embed;
  closure_4 = embed(7329).useIsChannelSpoilerGated(ChannelStore.getChannel(channelId));
  const obj2 = embed(7329);
  const items = [SearchMessageStore];
  const thumbnail = embed.thumbnail;
  const stateFromStores = embed(504).useStateFromStores(items, () => {
    const message = SearchMessageStore.getMessage(dependencyMap);
    if (null == message) {
      return null;
    } else {
      const flattenSourceResult = MediaSourceUtil.flattenSource(importDefault, false);
      let flag2;
      if (flattenSourceResult != null) {
        flag2 = flattenSourceResult.spoiler;
      }
      if (flag2 == null) {
        flag2 = false;
      }
      const tmp2Result = MessageAttachmentUtils;
      if (!flag2) {
        flag2 = closure_4;
      }
      return tmp2Result.getObscureReasonForEmbed(embed, message, flag2, closure_3);
    }
  });
  const obj3 = embed(504);
  const size = embed(8264).getEmbedMedia(embed);
  let embedUrl = null;
  if (null != size) {
    embedUrl = tmp2(8264).getEmbedUrl(size);
    let tmp2Result = tmp2(8264);
  }
  if (null != thumbnail) {
    embedUrl = thumbnail.url;
  }
  if (null != thumbnail) {
    let height = thumbnail.height;
  } else if (size != null) {
    height = size.height;
  }
  if (null != thumbnail) {
    let width = thumbnail.width;
  } else if (size != null) {
    width = size.width;
  }
  const obj5 = {};
  const merged1 = Object.assign(merged);
  obj5.obscureReason = stateFromStores;
  obj5.mediaUrl = embedUrl;
  obj5.mediaHeight = height;
  obj5.mediaWidth = width;
  return closure_11(closure_16, obj5);
};
export const SearchSoundMediaImage = function SearchSoundMediaImage(height) {
  height = height.height;
  const width = height.width;
  const items = [height, width];
  const obj = { style: null, children: null };
  const items1 = [
    closure_14().sound,
    height.containerStyle,
    noop.useMemo(() => {
      const size = { height, width };
      return size;
    }, items)
  ];
  obj.style = items1;
  obj.children = closure_1_11(CirclePlayIcon.CirclePlayIcon, { size: "lg", color: "interactive-text-default" });
  return closure_1_11(React5, obj);
};
export const SearchFileMediaImage = function SearchFileMediaImage(height) {
  height = height.height;
  const width = height.width;
  ({ fileName, containerStyle } = height);
  const items = [height, width];
  const obj = { style: null, children: null };
  const items1 = [
    closure_14().sound,
    containerStyle,
    noop.useMemo(() => {
      const size = { height, width };
      return size;
    }, items)
  ];
  obj.style = items1;
  obj.children = closure_1_11(AttachmentPreview.AttachmentIcon, { fileName });
  return closure_1_11(React5, obj);
};
export const SearchComponentMediaImage = function SearchComponentMediaImage(unfurledMediaItem) {
  unfurledMediaItem = unfurledMediaItem.unfurledMediaItem;
  const sources = unfurledMediaItem.sources;
  ({ channelId, isBot } = unfurledMediaItem);
  const merged = Object.assign(unfurledMediaItem, Object.assign({ unfurledMediaItem: 0, sources: 0, channelId: 0, authorId: 0, isBot: 0 }));
  const enabledHarmTypesBitmaskForChannelAndAuthorId = unfurledMediaItem(isBot[19]).useEnabledHarmTypesBitmaskForChannelAndAuthorId(channelId, unfurledMediaItem.authorId);
  let obj = unfurledMediaItem(isBot[19]);
  const isChannelSpoilerGated = unfurledMediaItem(isBot[21]).useIsChannelSpoilerGated(ChannelStore.getChannel(channelId));
  const items = [unfurledMediaItem, enabledHarmTypesBitmaskForChannelAndAuthorId, sources, isBot, isChannelSpoilerGated];
  const obj4 = {};
  const memo = isChannelSpoilerGated.useMemo(() => {
    const obj = MessageAttachmentUtils;
    const tmp = unfurledMediaItem;
    const tmp2 = enabledHarmTypesBitmaskForChannelAndAuthorId;
    const flattenSourceResult = MediaSourceUtil.flattenSource(sources);
    let spoiler;
    if (flattenSourceResult != null) {
      spoiler = flattenSourceResult.spoiler;
    }
    return obj.getObscureReasonForUnfurledMediaItem(tmp, tmp2, spoiler || isChannelSpoilerGated, isBot);
  }, items);
  const merged1 = Object.assign(merged);
  obj4.obscureReason = memo;
  ({ proxyUrl: obj3.mediaUrl, height: obj3.mediaHeight, width: obj3.mediaWidth } = unfurledMediaItem);
  return closure_11(closure_16, obj4);
};
