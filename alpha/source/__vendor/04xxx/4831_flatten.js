// Module ID: 4831
// Function ID: 4832
// Name: flatten
// Dependencies: [4832]

// Module 4831 (flatten)
import baseFlatten from "baseFlatten" /* 4832 */;


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
