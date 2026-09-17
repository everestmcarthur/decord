// Module ID: 4749
// Function ID: 4750
// Name: flatten
// Dependencies: [4750]

// Module 4749 (flatten)
import baseFlatten from "baseFlatten" /* 4750 */;


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
