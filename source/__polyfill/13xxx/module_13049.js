// Module ID: 13049
// Function ID: 13050
// Dependencies: []
// Exports: flatten

// Module 13049

export const flatten = function flatten(arr) {
  const items = [];
  const item = arr.forEach((arr) => {
    if (Array.isArray(arr)) {
      let item = arr.forEach((arr) => {
        if (Array.isArray(arr)) {
          let item = arr.forEach((arr) => {
            if (Array.isArray(arr)) {
              let item = arr.forEach((arr) => {
                if (Array.isArray(arr)) {
                  let item = arr.forEach(() => { ... });
                } else {
                  closure_1_0.push(arr);
                }
              });
            } else {
              closure_1_0.push(arr);
            }
          });
        } else {
          closure_1_0.push(arr);
        }
      });
    } else {
      closure_1_0.push(arr);
    }
  });
  return items;
};
