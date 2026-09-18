// Module ID: 5417
// Function ID: 5418
// Dependencies: []

// Module 5417

export default {
  get() {
    if (typeof TextDecoder !== "undefined") {
      const _TextDecoder = TextDecoder;
      return TextDecoder;
    }
  }
};
