// Module ID: 7147
// Function ID: 7148
// Dependencies: [19, 7141]
// Exports: useCardAnimation

// Module 7147
import CardAnimationContext from "CardAnimationContext" /* 7141 */;
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
