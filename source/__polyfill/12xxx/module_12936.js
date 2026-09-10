// Module ID: 12936
// Function ID: 12937
// Dependencies: []
// Exports: flatten

// Module 12936

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
