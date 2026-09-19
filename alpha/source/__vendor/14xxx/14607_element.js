// Module ID: 14607
// Function ID: 14608
// Name: element
// Dependencies: [14596, 14571]

// Module 14607 (element)
import _mod14571 from "module_14571" /* 14571 */;
import all from "module_14596" /* 14596 */;

let _moduleResult = all(_mod14571.document);
if (_moduleResult) {
  const _module1 = all;
  _moduleResult = _module1(_mod14571.document.createElement);
}
let c2 = _moduleResult;

export default (arg0) => {
  if (_moduleResult) {
    const _document = _mod14571.document;
    let element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
