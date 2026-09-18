// Module ID: 13255
// Function ID: 13256
// Name: ConversationFocusScreen
// Dependencies: [19, 17, 7596, 21, 4560, 576, 1486, 504, 7910, 7924, 1114, 4556, 4975, 13256, 2]
// Exports: default

// Module 13255 (ConversationFocusScreen)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import ConversationsAnalytics2 from "ConversationsAnalytics" /* 7910 */;
import ConversationNavigatorUtils from "ConversationNavigatorUtils" /* 7924 */;
import noop from "module_19" /* 19 */;
import ConversationsStore from "ConversationsStore" /* 7596 */;

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: c3, ScrollView: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4560);
let obj2 = { container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, pendingContent: null };
const obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.pendingContent = { flex: 1, paddingVertical: nativeDefault.space.PX_24, alignItems: "center", gap: nativeDefault.space.PX_32, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_9 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/conversations/components/native/ConversationFocusScreen.tsx");

export default function ConversationFocusScreen() {
  let container = closure_9();
  let ChatPreview = channelId;
  let tmp = conversationId;
  const params = channelId(conversationId[6]).useRoute().params;
  channelId = params.channelId;
  conversationId = params.conversationId;
  let obj = channelId(conversationId[6]);
  const items = [ConversationsStore];
  const items1 = [channelId, conversationId];
  const stateFromStores = channelId(conversationId[7]).useStateFromStores(items, () => ConversationsStore.getHydratedMessages(channelId, conversationId), items1);
  let obj2 = channelId(conversationId[7]);
  const items2 = [ConversationsStore];
  const items3 = [channelId, conversationId];
  const stateFromStoresObject = channelId(conversationId[7]).useStateFromStoresObject(items2, () => {
    const conversationMetadata = ConversationsStore.getConversationMetadata(channelId, conversationId);
    let flag;
    if (conversationMetadata != null) {
      flag = conversationMetadata.fullyHydrated;
    }
    if (flag == null) {
      flag = false;
    }
    const obj2 = { fullyHydrated: flag, isFullFetchPending: ConversationsStore.isConversationFetchPending(conversationId, true), startMessageId: null };
    startMessageId = undefined;
    if (conversationMetadata != null) {
      startMessageId = conversationMetadata.conversation.startMessageId;
    }
    if (startMessageId == null) {
      startMessageId = null;
    }
    obj2.startMessageId = startMessageId;
    return obj2;
  }, items3);
  ({ fullyHydrated, startMessageId } = stateFromStoresObject);
  const items4 = [channelId, conversationId];
  const onBeforeJumpToMessage = startMessageId.useCallback((arg0) => {
    if ("footer_cta" === arg0) {
      const ConversationsAnalytics = ConversationsAnalytics2.ConversationsAnalytics;
      const obj = { channelId, conversationId, dismissReason: "jump_to_conversation" };
      const result = ConversationsAnalytics.trackFocusModeDismissed(obj);
    }
  }, items4);
  const items5 = [channelId, startMessageId];
  const items6 = [startMessageId, onBeforeJumpToMessage];
  const callback1 = startMessageId.useCallback(() => {
    if (null != startMessageId) {
      const result = ConversationNavigatorUtils.closeConversationsAndJumpToMessage(channelId, tmp);
    }
  }, items5);
  const memo = startMessageId.useMemo(() => {
    const obj = { jumpToChatText: null, jumpTargetId: null, onBeforeJumpToMessage: null };
    const intl = util.intl;
    obj.jumpToChatText = intl.string(util.t["bz/ik0"]);
    obj.jumpTargetId = startMessageId;
    obj.onBeforeJumpToMessage = onBeforeJumpToMessage;
    return obj;
  }, items6);
  if (!fullyHydrated) {
    if (stateFromStoresObject.isFullFetchPending) {
      const obj4 = { style: container.pendingContent, children: closure_7(onBeforeJumpToMessage, {}) };
      return closure_7(closure_5, obj4);
    }
  }
  if (fullyHydrated) {
    const obj5 = { horizontal: true, scrollEnabled: false, bounces: false, contentContainerStyle: null, children: null };
    container = container.container;
    obj5.contentContainerStyle = container;
    ChatPreview = ChatPreview(tmp[13]).ChatPreview;
    const obj6 = { channelId, messages: stateFromStores, jumpToChatProps: memo, initialScrollToTop: true, allowReactions: true };
    tmp = closure_7(ChatPreview, obj6);
    obj5.children = tmp;
    closure_7(closure_4, obj5);
  } else {
    const obj7 = { style: container.pendingContent, children: null };
    const obj8 = { variant: "text-md/normal", color: "text-muted", children: null };
    let intl = ChatPreview(tmp[10]).intl;
    obj8.children = intl.string(ChatPreview(tmp[10]).t.eylmYW);
    const items7 = [closure_7(ChatPreview(tmp[11]).Text, obj8), ];
    let tmp12Result = null != startMessageId;
    if (tmp12Result) {
      const obj9 = { variant: "tertiary", text: null, onPress: null };
      const intl2 = ChatPreview(tmp[10]).intl;
      obj9.text = intl2.string(ChatPreview(tmp[10]).t.aBNTxl);
      obj9.onPress = callback1;
      tmp12Result = tmp12(ChatPreview(tmp[12]).Button, obj9);
    }
    items7[1] = tmp12Result;
    obj7.children = items7;
    closure_8(closure_5, obj7);
    tmp12 = closure_7;
  }
};
