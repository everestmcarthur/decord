// Module ID: 5299
// Function ID: 5300
// Dependencies: []

// Module 5299

export default {
  get() {
    if (typeof TextDecoder !== "undefined") {
      const _TextDecoder = TextDecoder;
      return TextDecoder;
    }
  }
};
