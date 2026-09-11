// Module ID: 4928
// Function ID: 4929
// Name: shimAllSettled
// Dependencies: [4851, 4852, 4880]

// Module 4928 (shimAllSettled)
import requirePromise from "requirePromise" /* 4851 */;
import _mod4852 from "module_4852" /* 4852 */;
import defineProperty from "defineProperty" /* 4880 */;


export default function shimAllSettled() {
  requirePromise();
  const tmp2 = _mod4852();
  closure_0 = tmp2;
  defineProperty(Promise, { allSettled: tmp2 }, {
    allSettled: function testAllSettled() {
      return Promise.allSettled !== closure_0;
    }
  });
  return tmp2;
};
