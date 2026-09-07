// Module ID: 14570
// Function ID: 14571
// Name: useReanimatedTransitionProgress
// Dependencies: [19, 14568]
// Exports: default

// Module 14570 (useReanimatedTransitionProgress)
import noopDefault from "noop" /* 14568 */;
import closure_2 from "noop" /* 19 */;


export default function useReanimatedTransitionProgress() {
  const context = React.useContext(noopDefault);
  if (undefined === context) {
    const _Error = Error;
    error = new Error("Couldn't find values for reanimated transition progress. Are you inside a screen in Native Stack?");
    throw error;
  } else {
    return context;
  }
};
