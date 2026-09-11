// Module ID: 14171
// Function ID: 14172
// Name: Easing
// Dependencies: [4343, 2]

// Module 14171 (Easing)
import ReanimatedRexport from "ReanimatedRexport" /* 4343 */;
import size from "module_2" /* 2 */;

const Easing = ReanimatedRexport.Easing;
const Easing2 = ReanimatedRexport.Easing;
const bezierResult = Easing.bezier(0.4, 0, 0.2, 1);
const result = size.fileFinishedImporting("design/void/Easing/native/Easing.tsx");

export const STANDARD_EASING = bezierResult;
export const DECELERATED_EASING = Easing2.bezier(0, 0, 0.2, 1);
