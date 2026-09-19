// Module ID: 8556
// Function ID: 8557
// Name: StepNumber
// Dependencies: [8549, 19, 17, 21, 8553]
// Exports: StepNumber

// Module 8556 (StepNumber)
import _mod19 from "module_19" /* 19 */;
import _mod8553 from "module_8553" /* 8553 */;
import module_8549 from "module_8549" /* 8549 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;

const noop = module_8549(_mod19);

export const StepNumber = function StepNumber(arg0) {
  const obj = { style: _mod8553.styles.stepNumber, children: <get ActivityIndicator.Text testID={"" + index + "th-step"} style={style}>{i}</get ActivityIndicator.Text> };
  ({ i, index, style } = arg0);
  return <get ActivityIndicator.View style={_mod8553.styles.stepNumber}><get ActivityIndicator.Text testID={"" + index + "th-step"} style={style}>{i}</get ActivityIndicator.Text></get ActivityIndicator.View>;
};
