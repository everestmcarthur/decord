// Module ID: 8374
// Function ID: 8375
// Name: StepNumber
// Dependencies: [8367, 19, 17, 21, 8371]
// Exports: StepNumber

// Module 8374 (StepNumber)
import _mod19 from "module_19" /* 19 */;
import _mod8371 from "module_8371" /* 8371 */;
import module_8367 from "module_8367" /* 8367 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;

const noop = module_8367(_mod19);

export const StepNumber = function StepNumber(arg0) {
  const obj = { style: _mod8371.styles.stepNumber, children: <get ActivityIndicator.Text testID={"" + index + "th-step"} style={style}>{i}</get ActivityIndicator.Text> };
  ({ i, index, style } = arg0);
  return <get ActivityIndicator.View style={_mod8371.styles.stepNumber}><get ActivityIndicator.Text testID={"" + index + "th-step"} style={style}>{i}</get ActivityIndicator.Text></get ActivityIndicator.View>;
};
