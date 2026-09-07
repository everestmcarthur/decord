// Module ID: 12910
// Function ID: 12911
// Name: flatten
// Dependencies: []

// Module 12910 (flatten)
arg5.flatten = function flatten(arr) {
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
                  arr = arr.push(arr);
                }
              });
            } else {
              arr = arr.push(arr);
            }
          });
        } else {
          arr = arr.push(arr);
        }
      });
    } else {
      arr = arr.push(arr);
    }
  });
  return items;
};
