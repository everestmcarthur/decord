// Module ID: 17080
// Function ID: 17081
// Name: panel/LeaveActivityButton
// Dependencies: [19, 9537, 21, 17070, 9600, 2]

// Module 17080 (panel/LeaveActivityButton)
import FramesNativeManagerDefault from "FramesNativeManager" /* 9600 */;
import LeaveActivityButton from "LeaveActivityButton" /* 17070 */;
import noop from "module_19" /* 19 */;

require = fn;
const ActivityPanelModes = fn(9537).ActivityPanelModes;
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
