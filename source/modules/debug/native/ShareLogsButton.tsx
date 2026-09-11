// Module ID: 15631
// Function ID: 15632
// Name: ShareLogsButton
// Dependencies: [19, 21, 5174, 1114, 8447, 7, 9143, 2]

// Module 15631 (ShareLogsButton)
import LogAggregator from "LogAggregator" /* 7 */;
import util from "util" /* 1114 */;
import Pressables from "Pressables" /* 5174 */;
import showShareActionSheet from "showShareActionSheet" /* 8447 */;
import ShareIcon from "ShareIcon" /* 9143 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/debug/native/ShareLogsButton.tsx");

export default noop.memo(function ShareLogsButton() {
  let obj = { accessibilityLabel: null, onPress: null, children: null };
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t["Aw+09z"]);
  obj.onPress = function onPress() {
    const obj2 = { message: null };
    const obj = showShareActionSheet;
    obj2.message = LogAggregator.stringify();
    return obj.showShareActionSheet(obj2, "Debug Logs");
  };
  obj.children = jsx(ShareIcon.ShareIcon, {});
  return jsx(Pressables.PressableOpacity, { accessibilityLabel: null, onPress: null, children: null });
});
