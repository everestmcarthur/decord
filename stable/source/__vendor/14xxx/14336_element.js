// Module ID: 14336
// Function ID: 14337
// Name: element
// Dependencies: [14325, 14300]

// Module 14336 (element)
import _mod14300 from "module_14300" /* 14300 */;
import all from "module_14325" /* 14325 */;

let _moduleResult = all(_mod14300.document);
if (_moduleResult) {
  const _module1 = all;
  _moduleResult = _module1(_mod14300.document.createElement);
}
let c2 = _moduleResult;

export default (arg0) => {
  if (_moduleResult) {
    const _document = _mod14300.document;
    let element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
