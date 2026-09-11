// Module ID: 10131
// Function ID: 10132
// Name: StageChannelCallView
// Dependencies: [19, 21, 9768, 4606, 1611, 10132, 10133, 4343, 9572, 10134, 2]
// Exports: default

// Module 10131 (StageChannelCallView)
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1611 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4343 */;
import StatusBarDefault from "StatusBar" /* 9572 */;
import FocusedControls from "FocusedControls" /* 9768 */;
import StageChannelAnimationUtils from "StageChannelAnimationUtils" /* 10132 */;
import StageChannelBackgroundDefault from "StageChannelBackground" /* 10133 */;
import StageChannelCallListDefault from "StageChannelCallList" /* 10134 */;
import noop from "module_19" /* 19 */;

require = fn;
function StageChannelCallBackground(arg0) {
  ({ children, channelId } = arg0);
  const tmp = closure_6();
  const stageActionBarAnimation = StageChannelAnimationUtils.useStageActionBarAnimation(channelId, FocusedControls.FOCUSED_CONTROLS_HEADER_HEIGHT + useSafeAreaInsetsDefault().top);
  const obj2 = { children: null };
  const obj3 = { style: null, children };
  const items = [tmp.container, stageActionBarAnimation];
  obj3.style = items;
  obj2.children = React3(ReanimatedRexportDefault.View, obj3);
  return React3(StageChannelBackgroundDefault, obj2);
}
const jsxProd = fn(21);
({ jsx: c3, Fragment: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4606);
let closure_6 = createStyles.createStyles({ container: { flex: 1, paddingHorizontal: 12 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/native/components/StageChannelCallView.tsx");

export default function StageChannelCallView(channel) {
  channel = channel.channel;
  const obj = { children: null };
  const items = [React3(StatusBarDefault, { animated: true, barStyle: "light-content" }), React3(StageChannelCallBackground, { channelId: channel.id, children: React3(StageChannelCallListDefault, { channel }) })];
  obj.children = items;
  return hasOwnProperty(React4, obj);
};
