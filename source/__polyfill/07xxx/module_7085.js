// Module ID: 7085
// Function ID: 7086
// Dependencies: [19, 7079]
// Exports: useCardAnimation

// Module 7085
import CardAnimationContext from "CardAnimationContext" /* 7079 */;
import noop from "module_19" /* 19 */;

require = arg1;

export const useCardAnimation = function useCardAnimation() {
  const context = noop.useContext(CardAnimationContext.CardAnimationContext);
  if (undefined === context) {
    const _Error = Error;
    const error = new Error("Couldn't find values for card animation. Are you inside a screen in Stack?");
    throw error;
  } else {
    return context;
  }
};
