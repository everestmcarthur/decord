// Module ID: 12080
// Function ID: 12081
// Name: Modal
// Dependencies: [19, 21, 1612, 7114, 5770, 2]
// Exports: Modal

// Module 12080 (Modal)
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1612 */;
import NavigatorConstants from "NavigatorConstants" /* 5770 */;
import Navigator from "Navigator" /* 7114 */;
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
