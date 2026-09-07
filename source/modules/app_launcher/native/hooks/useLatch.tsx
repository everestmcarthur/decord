// Module ID: 12163
// Function ID: 12164
// Name: useLatch
// Dependencies: [19, 2]
// Exports: default

// Module 12163 (useLatch)
import closure_0 from "noop" /* 19 */;

const result = require("set").fileFinishedImporting("modules/app_launcher/native/hooks/useLatch.tsx");

export default function useLatch(arg0) {
  const React = arg0;
  closure_1 = React.useRef(false);
  const items = [arg0];
  return {
    setLatch: React.useCallback((current) => {
      closure_1.current = current;
      return current;
    }, []),
    tryCallback: React.useCallback(() => {
      if (ref.current) {
        tmp.current = false;
        callback();
      }
    }, items)
  };
};
