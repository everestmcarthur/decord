// Module ID: 1953
// Function ID: 1954
// Name: isActionRequired
// Dependencies: [1950, 1951, 2]
// Exports: default

// Module 1953 (isActionRequired)
import LoginRequiredActionStore from "LoginRequiredActionStore" /* 1950 */;
import UserRequiredActionStore from "UserRequiredActionStore" /* 1951 */;

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
