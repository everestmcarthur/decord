// Module ID: 14328
// Function ID: 14329
// Name: Easing
// Dependencies: [4458, 2]

// Module 14328 (Easing)
import ReanimatedRexport from "ReanimatedRexport" /* 4458 */;
import size from "module_2" /* 2 */;

const Easing = ReanimatedRexport.Easing;
const Easing2 = ReanimatedRexport.Easing;
const bezierResult = Easing.bezier(0.4, 0, 0.2, 1);
const result = size.fileFinishedImporting("design/void/Easing/native/Easing.tsx");

export const STANDARD_EASING = bezierResult;
export const DECELERATED_EASING = Easing2.bezier(0, 0, 0.2, 1);
