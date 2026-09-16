// Module ID: 8022
// Function ID: 8023
// Name: useConversationBackoffRef
// Dependencies: [19, 7706, 559, 2]
// Exports: useConversationBackoffRef

// Module 8022 (useConversationBackoffRef)
import BackoffDefault from "Backoff" /* 559 */;
import noop from "module_19" /* 19 */;

const ConversationConstants = fn(7706);
({ FETCH_BACKOFF_MAX_MS: c3, FETCH_BACKOFF_MIN_MS: closure_4 } = ConversationConstants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conversations/useConversationBackoffRef.tsx");

export const useConversationBackoffRef = function useConversationBackoffRef(items) {
  if (items === undefined) {
    items = [];
  }
  const ref = noop.useRef(new BackoffDefault(React4, React3));
  const effect = noop.useEffect(() => {
    const current = ref.current;
    return () => {
      current.succeed();
    };
  }, items);
  return ref;
};
