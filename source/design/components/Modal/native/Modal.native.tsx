// Module ID: 12022
// Function ID: 12023
// Name: Modal
// Dependencies: [19, 21, 1611, 7073, 5733, 2]
// Exports: Modal

// Module 12022 (Modal)
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1611 */;
import NavigatorConstants from "NavigatorConstants" /* 5733 */;
import Navigator from "Navigator" /* 7073 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Modal/native/Modal.native.tsx");

export const Modal = function Modal(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  const tmp = useSafeAreaInsetsDefault();
  obj.headerStyle = { height: NavigatorConstants.NAV_BAR_HEIGHT + useSafeAreaInsetsDefault().top };
  return jsx(Navigator.Navigator, {});
};
