// Module ID: 14388
// Function ID: 14389
// Name: element
// Dependencies: [14377, 14352]

// Module 14388 (element)
import _mod14352 from "module_14352" /* 14352 */;
import all from "module_14377" /* 14377 */;

let _moduleResult = all(_mod14352.document);
if (_moduleResult) {
  const _module1 = all;
  _moduleResult = _module1(_mod14352.document.createElement);
}
let c2 = _moduleResult;

export default (arg0) => {
  if (_moduleResult) {
    const _document = _mod14352.document;
    let element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
