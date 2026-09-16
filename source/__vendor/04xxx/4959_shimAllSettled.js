// Module ID: 4959
// Function ID: 4960
// Name: shimAllSettled
// Dependencies: [4882, 4883, 4911]

// Module 4959 (shimAllSettled)
import requirePromise from "requirePromise" /* 4882 */;
import _mod4883 from "module_4883" /* 4883 */;
import defineProperty from "defineProperty" /* 4911 */;


export default function shimAllSettled() {
  requirePromise();
  const tmp2 = _mod4883();
  closure_0 = tmp2;
  defineProperty(Promise, { allSettled: tmp2 }, {
    allSettled: function testAllSettled() {
      return Promise.allSettled !== closure_0;
    }
  });
  return tmp2;
};
