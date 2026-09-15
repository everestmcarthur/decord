// Module ID: 4475
// Function ID: 4476
// Dependencies: []

// Module 4475
let fn = Array.isArray;
if (!fn) {
  fn = (arg0) => {
    const call = toString.call;
    return "[object Array]" == (typeof call === "unknown" ? toString() : call(arg0));
  };
}

export default fn;
