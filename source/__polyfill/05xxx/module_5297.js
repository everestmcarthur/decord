// Module ID: 5297
// Function ID: 5298
// Dependencies: []

// Module 5297

export default {
  get() {
    if (typeof TextDecoder !== "undefined") {
      const _TextDecoder = TextDecoder;
      return TextDecoder;
    }
  }
};
