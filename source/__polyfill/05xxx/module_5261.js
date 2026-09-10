// Module ID: 5261
// Function ID: 5262
// Dependencies: []

// Module 5261

export default {
  get() {
    if (typeof TextDecoder !== "undefined") {
      const _TextDecoder = TextDecoder;
      return TextDecoder;
    }
  }
};
