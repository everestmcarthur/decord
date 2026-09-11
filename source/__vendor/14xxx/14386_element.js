// Module ID: 14386
// Function ID: 14387
// Name: element
// Dependencies: [14375, 14350]

// Module 14386 (element)
import _mod14350 from "module_14350" /* 14350 */;
import all from "module_14375" /* 14375 */;

let _moduleResult = all(_mod14350.document);
if (_moduleResult) {
  const _module1 = all;
  _moduleResult = _module1(_mod14350.document.createElement);
}
let c2 = _moduleResult;

export default (arg0) => {
  if (_moduleResult) {
    const _document = _mod14350.document;
    let element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
