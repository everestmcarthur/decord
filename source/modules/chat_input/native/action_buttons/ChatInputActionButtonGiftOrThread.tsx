// Module ID: 12249
// Function ID: 12250
// Name: renderChatInputActionButtonGiftAndThread
// Dependencies: [19, 17, 11966, 21, 4560, 12250, 12243, 1114, 12241, 12252, 4262, 576, 4271, 2]

// Module 12249 (renderChatInputActionButtonGiftAndThread)
import ThemesDefault from "Themes" /* 576 */;
import FadeTransitionItemDefault from "FadeTransitionItem" /* 12250 */;
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { ChatInputActionType } from "TextAreaCta" /* 11966 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

const require = arg1;
function renderChatInputActionButtonGiftAndThread(arg0, styleButton, state, cleanup) {
  ({ accessible, onPress } = styleButton);
  styleButton = styleButton.styleButton;
  ({ canStartThreads, channel, shouldShowThread, styleButtonWrapper } = styleButton);
  let obj = { cleanup, state, children: null };
  if (shouldShowThread) {
    obj = { accessible: null, accessibilityLabel: null, disabled: null, IconComponent: null, onPress: null, style: null };
    obj[0] = accessible;
    const intl = onPress(1114).intl;
    obj[1] = intl.string(onPress(1114).t["4WNcpu"]);
    obj[2] = !canStartThreads;
    obj[3] = onPress(12241).ThreadPlusIcon;
    obj[4] = function onPress(arg0) {
      return onPress(arg0, closure_1_5.THREAD);
    };
    obj[5] = styleButton;
    let tmpResult = tmp(tmp2(12243), obj);
    const tmp2Result = tmp2(12243);
  } else {
    obj = { accessible: null, channel: null, onPress: null, style: null, styleButton: null };
    obj[0] = accessible;
    obj[1] = channel;
    obj[2] = onPress;
    obj[3] = styleButtonWrapper;
    obj[4] = styleButton;
    tmpResult = tmp(tmp2(12252), obj);
  }
  obj[2] = tmpResult;
  return jsx(FadeTransitionItemDefault, { cleanup, state, children: null }, arg0);
}
function getChatInputActionButtonGiftAndThreadKey(shouldShowThread) {
  let str = "gift";
  if (shouldShowThread.shouldShowThread) {
    str = "thread";
  }
  return str;
}
let c3 = importAllResult;
let closure_7 = createCacheKey.createStyles((height) => {
  const container = { width: height + 2 * arg1, height };
  return { container };
});
const memoResult = importAllResult.memo(function ChatInputActionButtonGiftOrThread(arg0) {
  const _require = arg0;
  let obj = _require(4262);
  const token = obj.useToken(ThemesDefault.modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
  let items = [arg0];
  const obj2 = _require(4262);
  obj = { style: callback(token, _require(4262).useToken(ThemesDefault.modules.mobile.CHAT_INPUT_ACTION_BUTTON_MARGIN)).container, children: null };
  const memo = importAllResult.useMemo(() => {
    const items = [closure_0];
    return items;
  }, items);
  obj = { items: memo, renderItem: renderChatInputActionButtonGiftAndThread, getItemKey: getChatInputActionButtonGiftAndThreadKey };
  obj[1] = jsx(_require(4271).TransitionGroup, { items: memo, renderItem: renderChatInputActionButtonGiftAndThread, getItemKey: getChatInputActionButtonGiftAndThreadKey });
  return <View items={memo} renderItem={renderChatInputActionButtonGiftAndThread} getItemKey={getChatInputActionButtonGiftAndThreadKey} />;
});
const result = require("set").fileFinishedImporting("modules/chat_input/native/action_buttons/ChatInputActionButtonGiftOrThread.tsx");

export default memoResult;
