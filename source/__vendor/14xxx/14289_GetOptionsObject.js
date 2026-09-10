// Module ID: 14289
// Function ID: 14290
// Name: GetOptionsObject
// Dependencies: []
// Exports: GetOptionsObject

// Module 14289 (GetOptionsObject)

export const GetOptionsObject = function GetOptionsObject(obj) {
  if (undefined === obj) {
    const _Object = Object;
    return Object.create(null);
  } else if (typeof obj === "object") {
    return obj;
  } else {
    const _TypeError = TypeError;
    const typeError = new TypeError("Options must be an object");
    throw typeError;
  }
};
