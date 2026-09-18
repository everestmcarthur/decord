// Module ID: 5043
// Function ID: 5044
// Name: shimAllSettled
// Dependencies: [4966, 4967, 4995]

// Module 5043 (shimAllSettled)
import requirePromise from "requirePromise" /* 4966 */;
import _mod4967 from "module_4967" /* 4967 */;
import _mod4995 from "module_4995" /* 4995 */;


export default function shimAllSettled() {
  requirePromise();
  const tmp2 = _mod4967();
  closure_0 = tmp2;
  _mod4995(Promise, { allSettled: tmp2 }, {
    allSettled: function testAllSettled() {
      return Promise.allSettled !== closure_0;
    }
  });
  return tmp2;
};
