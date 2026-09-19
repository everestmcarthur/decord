// Module ID: 5459
// Function ID: 5460
// Dependencies: []

// Module 5459

export default {
  get() {
    if (typeof TextDecoder !== "undefined") {
      const _TextDecoder = TextDecoder;
      return TextDecoder;
    }
  }
};
