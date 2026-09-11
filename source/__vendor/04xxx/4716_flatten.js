// Module ID: 4716
// Function ID: 4717
// Name: flatten
// Dependencies: [4717]

// Module 4716 (flatten)
import baseFlatten from "baseFlatten" /* 4717 */;


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
