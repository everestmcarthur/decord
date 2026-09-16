// Module ID: 7143
// Function ID: 7144
// Dependencies: [19, 7137]
// Exports: useCardAnimation

// Module 7143
import CardAnimationContext from "CardAnimationContext" /* 7137 */;
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
