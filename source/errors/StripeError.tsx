// Module ID: 4477
// Function ID: 4478
// Name: StripeError
// Dependencies: [4253, 2]

// Module 4477 (StripeError)
import BillingError from "BillingError" /* 4253 */;

const prototype = function StripeError(error) {
  error = error.error;
  if (null != error.param) {
    const obj = { body: null };
    const obj2 = {};
    ({ param, message } = error);
    const items = [message];
    obj2[param] = items;
    obj.body = obj2;
    let tmp8 = new tmp(obj, message, param, items);
  } else {
    tmp8 = new tmp(error.message, tmp3, tmp2, error);
  }
  return tmp8;
}.prototype;
class prototype extends tmp2 {
}
const size = fn(2);
const result = size.fileFinishedImporting("errors/StripeError.tsx");

export default prototype;
