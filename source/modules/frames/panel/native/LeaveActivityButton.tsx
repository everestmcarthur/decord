// Module ID: 17129
// Function ID: 17130
// Name: panel/LeaveActivityButton
// Dependencies: [19, 9598, 21, 17119, 9661, 2]

// Module 17129 (panel/LeaveActivityButton)
import FramesNativeManagerDefault from "FramesNativeManager" /* 9661 */;
import LeaveActivityButton from "LeaveActivityButton" /* 17119 */;
import noop from "module_19" /* 19 */;

require = fn;
const ActivityPanelModes = fn(9598).ActivityPanelModes;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/frames/panel/native/LeaveActivityButton.tsx");

export default noop.memo(function LeaveActivityButton(arg0) {
  ({ frame: require, setMode: importDefault } = arg0);
  return jsx(LeaveActivityButton.BaseLeaveActivityButton, {
    onPress() {
      importDefault(ActivityPanelModes.DISCONNECTED);
      const timerId = setTimeout(() => {
        FramesNativeManagerDefault.leaveFrame(id.id);
      }, 400);
    }
  });
});
