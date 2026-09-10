// Module ID: 4648
// Function ID: 4649
// Dependencies: []

// Module 4648

export default function initCloneArray(arg0) {
  let length = arg0.length;
  const constructor = new arg0.constructor(length);
  if (length) {
    length = typeof arg0[0] === "string";
  }
  if (!length) {
    if (length) {
      ({ index: tmp.index, input: tmp.input } = arg0);
    }
    return constructor;
  } else {
    const call = hasOwnProperty.call;
    if (typeof call === "unknown") {
      let callResult = tmp2("index");
    } else {
      callResult = call(arg0, "index");
    }
    tmp2 = hasOwnProperty;
  }
};
