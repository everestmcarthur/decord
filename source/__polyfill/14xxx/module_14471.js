// Module ID: 14471
// Function ID: 14472
// Dependencies: []
// Exports: default

// Module 14471

export default () => (arg0) => {
  closure_0 = arg0;
  return {
    features: {
      image(dependencyMap) {
        const size = { uri: dependencyMap.uri, preview: dependencyMap.preview, filename: dependencyMap.filename, width: dependencyMap.width, height: dependencyMap.height, caption: dependencyMap.caption };
        return closure_0.send("image", size);
      }
    }
  };
};
