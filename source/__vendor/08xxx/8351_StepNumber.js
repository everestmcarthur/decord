// Module ID: 8351
// Function ID: 8352
// Name: StepNumber
// Dependencies: [8344, 19, 17, 21, 8348]
// Exports: StepNumber

// Module 8351 (StepNumber)
import _mod19 from "module_19" /* 19 */;
import _mod8348 from "module_8348" /* 8348 */;
import module_8344 from "module_8344" /* 8344 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;

const noop = module_8344(_mod19);

export const StepNumber = function StepNumber(arg0) {
  const obj = { style: _mod8348.styles.stepNumber, children: <get ActivityIndicator.Text testID={"" + index + "th-step"} style={style}>{i}</get ActivityIndicator.Text> };
  ({ i, index, style } = arg0);
  return <get ActivityIndicator.View style={_mod8348.styles.stepNumber}><get ActivityIndicator.Text testID={"" + index + "th-step"} style={style}>{i}</get ActivityIndicator.Text></get ActivityIndicator.View>;
};
