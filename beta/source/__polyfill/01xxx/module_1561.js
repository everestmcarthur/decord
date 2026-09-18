// Module ID: 1561
// Function ID: 1562
// Dependencies: [19]

// Module 1561
import noop from "module_19" /* 19 */;

if (typeof document !== "undefined") {
  let useEffect = noop.useLayoutEffect;
} else {
  const _navigator = navigator;
  if (typeof navigator !== "undefined") {
    const _navigator2 = navigator;
  }
  useEffect = noop.useEffect;
}

export const useClientLayoutEffect = useEffect;
