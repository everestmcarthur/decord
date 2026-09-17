// Module ID: 7077
// Function ID: 7078
// Name: hooks/useStableCallback
// Dependencies: [19, 2]
// Exports: default

// Module 7077 (hooks/useStableCallback)
import noop from "module_19" /* 19 */;

const size = fn(2);
const result = size.fileFinishedImporting("../discord_common/js/shared/hooks/useStableCallback.tsx");

export default function useStableCallback(set) {
  const current = set;
  noop.useRef(set);
  const insertionEffect = noop.useInsertionEffect(() => {
    closure_1.current = current;
  });
  return noop.useCallback(() => {
    const items = [...HermesBuiltin.copyRestArgs()];
    return ref.current.apply(items);
  }, []);
};
