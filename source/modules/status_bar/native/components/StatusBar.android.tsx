// Module ID: 9624
// Function ID: 9625
// Name: StatusBar
// Dependencies: [17, 9625, 2]

// Module 9624 (StatusBar)
import _mod17 from "module_17" /* 17 */;
import StatusBarManagerDefault from "StatusBarManager" /* 9625 */;
import size from "module_2" /* 2 */;

const StatusBar = _mod17.StatusBar;
class StatusBarAndroid extends StatusBar {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult._stackEntry = null;
    return applyArgumentsResult;
  }
}
const prototype = StatusBarAndroid.prototype;
prototype["componentDidMount"] = function componentDidMount() {
  this._stackEntry = StatusBarManagerDefault.pushStackEntry(this.props);
};
prototype["componentDidUpdate"] = function componentDidUpdate() {
  this._stackEntry = StatusBarManagerDefault.replaceStackEntry(this._stackEntry, this.props);
};
prototype["componentWillUnmount"] = function componentWillUnmount() {
  StatusBarManagerDefault.popStackEntry(this._stackEntry);
  this._stackEntry = null;
};
prototype["render"] = function render() {
  return null;
};
const result = size.fileFinishedImporting("modules/status_bar/native/components/StatusBar.android.tsx");

export default StatusBarAndroid;
