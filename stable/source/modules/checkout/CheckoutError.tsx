// Module ID: 11447
// Function ID: 11448
// Name: CheckoutError
// Dependencies: [11448, 2]

// Module 11447 (CheckoutError)
import RevenueError2 from "RevenueError" /* 11448 */;
import size from "module_2" /* 2 */;

const RevenueError = RevenueError2.RevenueError;
const prototype = function CheckoutError(arg0) {
  const tmp2 = new tmp(arg0, new.target);
  tmp2.name = "FatalCheckoutError";
  return tmp2;
}.prototype;
class prototype extends RevenueError {
}
const result = size.fileFinishedImporting("modules/checkout/CheckoutError.tsx");

export const CheckoutError = prototype;
