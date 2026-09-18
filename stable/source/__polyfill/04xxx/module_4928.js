// Module ID: 4928
// Function ID: 4929
// Dependencies: [19]
// Exports: useEdgeInsetApplication

// Module 4928
import noop from "module_19" /* 19 */;

let context = noop.createContext({ leftDisabled: false, rightDisabled: false, bottomDisabled: false });

export const EdgeInsetApplicationContext = context;
export const useEdgeInsetApplication = function useEdgeInsetApplication(flag, flag2, flag3) {
  context = noop.useContext(context);
  ({ leftDisabled, rightDisabled, bottomDisabled } = context);
  if (!leftDisabled) {
    leftDisabled = flag;
  }
  if (!rightDisabled) {
    rightDisabled = flag2;
  }
  if (!bottomDisabled) {
    bottomDisabled = flag3;
  }
  const items = [leftDisabled, rightDisabled, bottomDisabled];
  return { consumeLeftInset: !leftDisabled, consumeRightInset: !rightDisabled, consumeBottomInset: !bottomDisabled, nextContextValue: noop.useMemo(() => ({ leftDisabled, rightDisabled, bottomDisabled }), items) };
};
