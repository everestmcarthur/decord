// Module ID: 4748
// Function ID: 4749
// Name: flatten
// Dependencies: [4749]

// Module 4748 (flatten)
import baseFlatten from "baseFlatten" /* 4749 */;


export default function flatten(arg0) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  if (num) {
    let items = baseFlatten(arg0, 1);
  } else {
    items = [];
  }
  return items;
};
