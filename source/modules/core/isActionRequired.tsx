// Module ID: 1954
// Function ID: 1955
// Name: isActionRequired
// Dependencies: [1951, 1952, 2]
// Exports: default

// Module 1954 (isActionRequired)
import LoginRequiredActionStore from "LoginRequiredActionStore" /* 1951 */;
import UserRequiredActionStore from "UserRequiredActionStore" /* 1952 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/core/isActionRequired.tsx");

export default function isActionRequired() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = LoginRequiredActionStore;
  }
  let obj2 = arg1;
  if (arg1 === undefined) {
    obj2 = UserRequiredActionStore;
  }
  let tmp = null != obj2.getAction();
  if (!tmp) {
    const _Object = Object;
    tmp = Object.keys(obj.getState()).length > 0;
  }
  return tmp;
};
