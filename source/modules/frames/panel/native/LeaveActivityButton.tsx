// Module ID: 17195
// Function ID: 17196
// Name: panel/LeaveActivityButton
// Dependencies: [19, 9637, 21, 17185, 9700, 2]

// Module 17195 (panel/LeaveActivityButton)
import FramesNativeManagerDefault from "FramesNativeManager" /* 9700 */;
import LeaveActivityButton from "LeaveActivityButton" /* 17185 */;
import noop from "module_19" /* 19 */;

require = fn;
const ActivityPanelModes = fn(9637).ActivityPanelModes;
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
