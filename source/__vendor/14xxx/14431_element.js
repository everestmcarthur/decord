// Module ID: 14431
// Function ID: 14432
// Name: element
// Dependencies: [14420, 14395]

// Module 14431 (element)
import _mod14395 from "module_14395" /* 14395 */;
import all from "module_14420" /* 14420 */;

let _moduleResult = all(_mod14395.document);
if (_moduleResult) {
  const _module1 = all;
  _moduleResult = _module1(_mod14395.document.createElement);
}
let c2 = _moduleResult;

export default (arg0) => {
  if (_moduleResult) {
    const _document = _mod14395.document;
    let element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
