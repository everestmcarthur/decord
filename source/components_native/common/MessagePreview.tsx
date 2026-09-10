// Module ID: 16858
// Function ID: 16859
// Name: MessagePreview
// Dependencies: [19, 8388, 1074, 21, 504, 1114, 16679, 13279, 2]
// Exports: default

// Module 16858 (MessagePreview)
import util from "util" /* 1114 */;
import noop from "module_19" /* 19 */;
import MessagePreviewStore from "MessagePreviewStore" /* 8388 */;

require = fn;
const Constants = fn(1074);
({ AnalyticsSections, AnalyticsObjects } = Constants);
const jsx = fn(21).jsx;
const analyticsLocation = { section: AnalyticsSections.CHANNEL_SEARCH, object: AnalyticsObjects.CHANNEL_SEARCH };
const size = fn(2);
const result = size.fileFinishedImporting("components_native/common/MessagePreview.tsx");

export default function MessagePreview(channelId) {
  const onBeforeJumpToMessage = channelId.onBeforeJumpToMessage;
  const items = [MessagePreviewStore];
  const stateFromStoresObject = onBeforeJumpToMessage(504).useStateFromStoresObject(items, () => ({ messages: MessagePreviewStore.messages, jumpTargetId: MessagePreviewStore.jumpTargetId }));
  const jumpTargetId = stateFromStoresObject.jumpTargetId;
  const items1 = [jumpTargetId, onBeforeJumpToMessage];
  const memo = noop.useMemo(() => {
    const obj = { jumpToChatText: null, jumpTargetId: null, onBeforeJumpToMessage: null };
    const intl = util.intl;
    obj.jumpToChatText = intl.string(util.t["+TSRGD"]);
    obj.jumpTargetId = jumpTargetId;
    obj.onBeforeJumpToMessage = onBeforeJumpToMessage;
    return obj;
  }, items1);
  const effect = noop.useEffect(() => () => {
    jumpTargetId(closure_1_2[6]).clearMessages();
  }, []);
  return jsx(onBeforeJumpToMessage(13279).ChatPreview, { channelId: channelId.channelId, messages: stateFromStoresObject.messages, jumpToChatProps: memo, analyticsLocation });
};
