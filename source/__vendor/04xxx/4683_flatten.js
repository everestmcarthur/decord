// Module ID: 4683
// Function ID: 4684
// Name: flatten
// Dependencies: [4684]

// Module 4683 (flatten)
import baseFlatten from "baseFlatten" /* 4684 */;


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
