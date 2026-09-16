// Module ID: 14449
// Function ID: 14450
// Name: element
// Dependencies: [14438, 14413]

// Module 14449 (element)
import _mod14413 from "module_14413" /* 14413 */;
import all from "module_14438" /* 14438 */;

let _moduleResult = all(_mod14413.document);
if (_moduleResult) {
  const _module1 = all;
  _moduleResult = _module1(_mod14413.document.createElement);
}
let c2 = _moduleResult;

export default (arg0) => {
  if (_moduleResult) {
    const _document = _mod14413.document;
    let element = _document.createElement(arg0);
  } else {
    element = {};
  }
  return element;
};
