// Module ID: 14410
// Function ID: 14411
// Name: element
// Dependencies: [14399, 14374]

// Module 14410 (element)
import _mod14374 from "module_14374" /* 14374 */;
import all from "module_14399" /* 14399 */;

let _moduleResult = all(_mod14374.document);
if (_moduleResult) {
  const _module1 = all;
  _moduleResult = _module1(_mod14374.document.createElement);
}
let c2 = _moduleResult;

export default (arg0) => {
  if (_moduleResult) {
    const _document = _mod14374.document;
    let element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
