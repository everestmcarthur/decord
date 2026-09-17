// Module ID: 5335
// Function ID: 5336
// Dependencies: []

// Module 5335

export default {
  get() {
    if (typeof TextDecoder !== "undefined") {
      const _TextDecoder = TextDecoder;
      return TextDecoder;
    }
  }
};
