// Module ID: 4747
// Function ID: 4748
// Name: flatten
// Dependencies: [4748]

// Module 4747 (flatten)
import baseFlatten from "baseFlatten" /* 4748 */;


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
