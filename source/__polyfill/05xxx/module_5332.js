// Module ID: 5332
// Function ID: 5333
// Dependencies: []

// Module 5332

export default {
  get() {
    if (typeof TextDecoder !== "undefined") {
      const _TextDecoder = TextDecoder;
      return TextDecoder;
    }
  }
};
