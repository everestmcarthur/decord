// Module ID: 5298
// Function ID: 5299
// Dependencies: []

// Module 5298

export default {
  get() {
    if (typeof TextDecoder !== "undefined") {
      const _TextDecoder = TextDecoder;
      return TextDecoder;
    }
  }
};
