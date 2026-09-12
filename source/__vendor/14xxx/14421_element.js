// Module ID: 14421
// Function ID: 14422
// Name: element
// Dependencies: [14410, 14385]

// Module 14421 (element)
import _mod14385 from "module_14385" /* 14385 */;
import all from "module_14410" /* 14410 */;

let _moduleResult = all(_mod14385.document);
if (_moduleResult) {
  const _module1 = all;
  _moduleResult = _module1(_mod14385.document.createElement);
}
let c2 = _moduleResult;

export default (arg0) => {
  if (_moduleResult) {
    const _document = _mod14385.document;
    let element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
