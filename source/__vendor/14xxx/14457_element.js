// Module ID: 14457
// Function ID: 14458
// Name: element
// Dependencies: [14446, 14421]

// Module 14457 (element)
import _mod14421 from "module_14421" /* 14421 */;
import all from "module_14446" /* 14446 */;

let _moduleResult = all(_mod14421.document);
if (_moduleResult) {
  const _module1 = all;
  _moduleResult = _module1(_mod14421.document.createElement);
}
let c2 = _moduleResult;

export default (arg0) => {
  if (_moduleResult) {
    const _document = _mod14421.document;
    let element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
