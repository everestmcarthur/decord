// Module ID: 5333
// Function ID: 5334
// Dependencies: []

// Module 5333

export default {
  get() {
    if (typeof TextDecoder !== "undefined") {
      const _TextDecoder = TextDecoder;
      return TextDecoder;
    }
  }
};
