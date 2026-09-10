// Module ID: 11394
// Function ID: 11395
// Name: ChatViewStickyHeader
// Dependencies: [32, 19, 11395, 21, 11396, 11001, 11399, 11400, 11413, 11419, 11443, 11445, 11449, 11452, 2]

// Module 11394 (ChatViewStickyHeader)
import useInappropriateConversationBannerForChannel from "useInappropriateConversationBannerForChannel" /* 11001 */;
import useStrangerDangerWarning from "useStrangerDangerWarning" /* 11396 */;
import useLikelyAtoWarning from "useLikelyAtoWarning" /* 11399 */;
import LikelyAtoWarningBannerDefault from "LikelyAtoWarningBanner" /* 11400 */;
import StrangerDangerWarningBannerDefault from "StrangerDangerWarningBanner" /* 11413 */;
import InappropriateConversationWarningBannerDefault from "InappropriateConversationWarningBanner" /* 11419 */;
import useUnreadSettingNoticeDefault from "useUnreadSettingNotice" /* 11443 */;
import ChatBannerDefault from "ChatBanner" /* 11452 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function ChatViewStickyHeaderAccountSafetyWarnings(arg0) {
  ({ channelId, senderId } = arg0);
  const strangerDangerWarning = useStrangerDangerWarning.useStrangerDangerWarning(channelId);
  const inappropriateConversationBannerForChannel = useInappropriateConversationBannerForChannel.useInappropriateConversationBannerForChannel(channelId, LOCATION_CONTEXT_MOBILE);
  const likelyAtoWarning = useLikelyAtoWarning.useLikelyAtoWarning(channelId);
  if (null != likelyAtoWarning) {
    const obj4 = { channelId, warningId: likelyAtoWarning.id, senderId };
    let tmp5 = timestampProducer(LikelyAtoWarningBannerDefault, obj4);
  } else if (null != strangerDangerWarning) {
    const obj5 = { channelId, warningId: strangerDangerWarning.id, senderId };
    tmp5 = timestampProducer(StrangerDangerWarningBannerDefault, obj5);
  } else {
    tmp5 = null;
    if (null != inappropriateConversationBannerForChannel) {
      const obj6 = { channelId, warningId: inappropriateConversationBannerForChannel.id, senderId };
      tmp5 = timestampProducer(InappropriateConversationWarningBannerDefault, obj6);
    }
  }
  return tmp5;
}
const LOCATION_CONTEXT_MOBILE = fn(11395).LOCATION_CONTEXT_MOBILE;
const jsxProd = fn(21);
({ jsx: metroRequire, Fragment: closure_7, jsxs: closure_8 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat/native/ChatViewStickyHeader.tsx");

export default noop.memo(noop.forwardRef((handleScrollToNewMessages, ref) => {
  const channel = handleScrollToNewMessages.channel;
  const tmp = _slicedToArray(noop.useState(false), 2);
  closure_1 = tmp[1];
  ({ showUnreadsNotice, clearUnreadsNotice } = useUnreadSettingNoticeDefault(channel));
  const imperativeHandle = noop.useImperativeHandle(ref, () => ({
    onChatViewScrolled(isFirstMessageVisible) {
      if (forumPost.isForumPost()) {
        closure_1_1(!isFirstMessageVisible.isFirstMessageVisible);
      }
    }
  }));
  let tmp8 = null;
  if (channel.isForumPost()) {
    tmp8 = null;
    if (tmp[0]) {
      const obj = { channel };
      tmp8 = timestampProducer(tmp2(11445), obj);
    }
  }
  const items = [tmp8, , , ];
  let tmp10 = null;
  if (channel.isDM()) {
    const obj2 = { channelId: channel.id, senderId: channel.getRecipientId() };
    tmp10 = timestampProducer(ChatViewStickyHeaderAccountSafetyWarnings, obj2);
  }
  items[1] = tmp10;
  let tmp13 = null;
  if (showUnreadsNotice) {
    const obj3 = { channel, clearUnreadsNotice };
    tmp13 = timestampProducer(tmp2(11449), obj3);
  }
  const obj4 = { children: null };
  items[2] = tmp13;
  items[3] = timestampProducer(ChatBannerDefault, { channel, handleScrollToNewMessages: handleScrollToNewMessages.scrollToNewMessages });
  obj4.children = items;
  return React6(React5, obj4);
}));
