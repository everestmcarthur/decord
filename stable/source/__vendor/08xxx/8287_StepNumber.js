// Module ID: 8287
// Function ID: 8288
// Name: StepNumber
// Dependencies: [8280, 19, 17, 21, 8284]
// Exports: StepNumber

// Module 8287 (StepNumber)
import _mod19 from "module_19" /* 19 */;
import _mod8284 from "module_8284" /* 8284 */;
import module_8280 from "module_8280" /* 8280 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;

const noop = module_8280(_mod19);

export const StepNumber = function StepNumber(arg0) {
  const obj = { style: _mod8284.styles.stepNumber, children: <get ActivityIndicator.Text testID={"" + index + "th-step"} style={style}>{i}</get ActivityIndicator.Text> };
  ({ i, index, style } = arg0);
  return <get ActivityIndicator.View style={_mod8284.styles.stepNumber}><get ActivityIndicator.Text testID={"" + index + "th-step"} style={style}>{i}</get ActivityIndicator.Text></get ActivityIndicator.View>;
};
