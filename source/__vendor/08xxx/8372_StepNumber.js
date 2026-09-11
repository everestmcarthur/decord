// Module ID: 8372
// Function ID: 8373
// Name: StepNumber
// Dependencies: [8365, 19, 17, 21, 8369]
// Exports: StepNumber

// Module 8372 (StepNumber)
import _mod19 from "module_19" /* 19 */;
import _mod8369 from "module_8369" /* 8369 */;
import module_8365 from "module_8365" /* 8365 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;

const noop = module_8365(_mod19);

export const StepNumber = function StepNumber(arg0) {
  const obj = { style: _mod8369.styles.stepNumber, children: <get ActivityIndicator.Text testID={"" + index + "th-step"} style={style}>{i}</get ActivityIndicator.Text> };
  ({ i, index, style } = arg0);
  return <get ActivityIndicator.View style={_mod8369.styles.stepNumber}><get ActivityIndicator.Text testID={"" + index + "th-step"} style={style}>{i}</get ActivityIndicator.Text></get ActivityIndicator.View>;
};
