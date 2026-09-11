// Module ID: 5263
// Function ID: 5264
// Dependencies: []

// Module 5263
class MetadataMissingError {
  constructor(arg0) {
    obj = { name: "MetadataMissingError" };
    str = arg0;
    if (!arg0) {
      str = "No Exif data";
    }
    obj.message = str;
    error = new Error();
    obj.stack = error.stack;
    return;
  }
}
let error = new Error();
MetadataMissingError.prototype = error;

export default { MetadataMissingError };
