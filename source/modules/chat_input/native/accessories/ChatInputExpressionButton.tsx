// Module ID: 12267
// Function ID: 12268
// Name: ChatInputExpressionButton
// Dependencies: [19, 21, 4606, 576, 4308, 5174, 1114, 1178, 11341, 8849, 2]

// Module 12267 (ChatInputExpressionButton)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import useToken from "useToken" /* 4308 */;
import Pressables from "Pressables" /* 5174 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4606);
let closure_5 = createStyles.createStyles((height) => {
  const obj = { expressionButton: null, expressionButtonIconTint: null };
  const size = { borderRadius: nativeDefault.radii.sm, height, width: height, alignItems: "center", justifyContent: "center" };
  obj.expressionButton = size;
  obj.expressionButtonIconTint = { tintColor: nativeDefault.colors.CHAT_INPUT_ICON_DEFAULT_TINT };
  return obj;
});
let size = fn(2);
const result = size.fileFinishedImporting("modules/chat_input/native/accessories/ChatInputExpressionButton.tsx");

export default noop.memo((active) => {
  let flag = active.active;
  if (flag === undefined) {
    flag = false;
  }
  let showKeyboardIcon = active.showKeyboardIcon;
  if (showKeyboardIcon === undefined) {
    showKeyboardIcon = flag;
  }
  const onPress = active.onPress;
  const token = useToken.useToken(nativeDefault.modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
  const tmp3 = importDefault;
  const token1 = useToken.useToken(nativeDefault.modules.mobile.CHAT_INPUT_ICON_SIZE);
  const token2 = useToken.useToken(nativeDefault.modules.mobile.CHAT_INPUT_BUTTON_MIN_TOUCH_TARGET_SIZE);
  const tmp7 = closure_5(token);
  const bound = Math.max(0, (token2 - token) / 2);
  const items = [onPress];
  const callback = noop.useCallback(() => {
    onPress(undefined);
  }, items);
  const obj4 = { ref: noop.useRef(null), style: null, hitSlop: null, accessibilityRole: "button", accessibilityLabel: null, accessibilityState: null, onPress: null, children: null };
  const items1 = [tmp7.expressionButton, active.style];
  obj4.style = items1;
  let tmp12;
  if (bound > 0) {
    tmp12 = bound;
  }
  obj4.hitSlop = tmp12;
  const intl = tmp(1114).intl;
  obj4.accessibilityLabel = intl.string(util.t.iZ7Mz9);
  obj4.accessibilityState = { expanded: flag };
  obj4.onPress = callback;
  const ref = noop.useRef(null);
  obj4.children = jsx(native.Icon, { size: token1, style: tmp7.expressionButtonIconTint, source: tmp3(showKeyboardIcon ? 11341 : 8849) });
  return jsx(Pressables.PressableOpacity, { ref: noop.useRef(null), style: null, hitSlop: null, accessibilityRole: "button", accessibilityLabel: null, accessibilityState: null, onPress: null, children: null });
});
