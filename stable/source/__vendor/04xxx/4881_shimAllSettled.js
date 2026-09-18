// Module ID: 4881
// Function ID: 4882
// Name: shimAllSettled
// Dependencies: [4804, 4805, 4833]

// Module 4881 (shimAllSettled)
import requirePromise from "requirePromise" /* 4804 */;
import _mod4805 from "module_4805" /* 4805 */;
import defineProperty from "defineProperty" /* 4833 */;


export default function shimAllSettled() {
  requirePromise();
  const tmp2 = _mod4805();
  closure_0 = tmp2;
  defineProperty(Promise, { allSettled: tmp2 }, {
    allSettled: function testAllSettled() {
      return Promise.allSettled !== closure_0;
    }
  });
  return tmp2;
};
