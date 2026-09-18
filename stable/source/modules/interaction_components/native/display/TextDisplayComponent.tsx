// Module ID: 15718
// Function ID: 15719
// Name: TextDisplayComponent
// Dependencies: [32, 19, 4552, 2011, 8112, 21, 8113, 38, 4550, 7889, 504, 1935, 15719, 11621, 11591, 2]
// Exports: default

// Module 15718 (TextDisplayComponent)
import MarkupUtilsDefault from "MarkupUtils" /* 4550 */;
import renderMessageMarkup from "renderMessageMarkup" /* 7889 */;
import handleMessagesTapLink from "handleMessagesTapLink" /* 11621 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4552 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2011 */;

require = fn;
let closure_7 = fn(8112).TEXT_DISPLAY_COMPONENT_MARKDOWN_RENDER_OPTIONS;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/interaction_components/native/display/TextDisplayComponent.tsx");

export default function TextDisplayComponent(type) {
  type = type.type;
  const id = type.id;
  const content = type.content;
  const componentContainerId = type(content[6]).useComponentContainerId();
  const channelId = SelectedChannelStore.getChannelId();
  id(content[7])(null != channelId, "channelId not available in TextDisplayComponent");
  let items = [type, id, content, channelId];
  const memo = noop.useMemo(() => {
    const obj = { type, id, content: null };
    const obj2 = MarkupUtilsDefault;
    obj.content = obj2.parseToAST(content, true, renderMessageMarkup.getInitialParserState({ channelId, renderOptions }));
    return JSON.stringify(obj);
  }, items);
  let obj = type(content[6]);
  const items1 = [AccessibilityStore];
  let obj2 = type(content[10]);
  [tmp6, tmp7] = channelId(type(content[10]).useStateFromStoresArray(items1, () => {
    const items = [, ];
    ({ roleStyle: arr[0], alwaysShowLinkDecorations: arr[1] } = AccessibilityStore);
    return items;
  }), 2);
  const AnimateEmoji = type(content[11]).AnimateEmoji;
  const setting = AnimateEmoji.useSetting();
  const obj3 = {
    model: memo,
    markdownTextRenderOptions: { containerId: componentContainerId, shouldAnimateEmoji: setting, shouldShowLinkDecorations: tmp7, shouldShowRoleDot: "dot" === tmp6, shouldShowRoleOnName: "username" === tmp6 },
    onTapLink(nativeEvent) {
      const result = handleMessagesTapLink.handleMessagesTapURLLink(nativeEvent.nativeEvent.data, channelId);
    },
    onLongPressLink: null,
    onTapAttachmentLink: null,
    onLongPressAttachmentLink: null,
    onTapMention: null,
    onTapTimestamp: null,
    onTapInlineCode: null,
    onTapEmoji: null,
    style: null
  };
  const obj4 = { containerId: componentContainerId, shouldAnimateEmoji: setting, shouldShowLinkDecorations: tmp7, shouldShowRoleDot: "dot" === tmp6, shouldShowRoleOnName: "username" === tmp6 };
  const tmp5 = channelId(type(content[10]).useStateFromStoresArray(items1, () => {
    const items = [, ];
    ({ roleStyle: arr[0], alwaysShowLinkDecorations: arr[1] } = AccessibilityStore);
    return items;
  }), 2);
  obj3.onLongPressLink = type(content[14]).contentHandlers.onLongPressLink;
  obj3.onTapAttachmentLink = type(content[14]).contentHandlers.onTapAttachmentLink;
  obj3.onLongPressAttachmentLink = type(content[14]).contentHandlers.onLongPressAttachmentLink;
  obj3.onTapMention = type(content[14]).contentHandlers.onTapMention;
  obj3.onTapTimestamp = type(content[14]).contentHandlers.onTapTimestamp;
  obj3.onTapInlineCode = type(content[14]).contentHandlers.onTapInlineCode;
  obj3.onTapEmoji = type(content[14]).contentHandlers.onTapEmoji;
  obj3.style = { width: "100%" };
  return jsx(id(content[12]), {
    model: memo,
    markdownTextRenderOptions: { containerId: componentContainerId, shouldAnimateEmoji: setting, shouldShowLinkDecorations: tmp7, shouldShowRoleDot: "dot" === tmp6, shouldShowRoleOnName: "username" === tmp6 },
    onTapLink(nativeEvent) {
      const result = handleMessagesTapLink.handleMessagesTapURLLink(nativeEvent.nativeEvent.data, channelId);
    },
    onLongPressLink: null,
    onTapAttachmentLink: null,
    onLongPressAttachmentLink: null,
    onTapMention: null,
    onTapTimestamp: null,
    onTapInlineCode: null,
    onTapEmoji: null,
    style: null
  });
};
