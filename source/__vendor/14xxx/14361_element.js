// Module ID: 14361
// Function ID: 14362
// Name: element
// Dependencies: [14350, 14325]

// Module 14361 (element)
import _mod14325 from "module_14325" /* 14325 */;
import all from "module_14350" /* 14350 */;

let _moduleResult = all(_mod14325.document);
if (_moduleResult) {
  const _module1 = all;
  _moduleResult = _module1(_mod14325.document.createElement);
}
let c2 = _moduleResult;

export default (arg0) => {
  if (_moduleResult) {
    const _document = _mod14325.document;
    let element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
