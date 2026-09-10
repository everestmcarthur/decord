// Module ID: 7920
// Function ID: 7921
// Name: useConversationBackoffRef
// Dependencies: [19, 7612, 559, 2]
// Exports: useConversationBackoffRef

// Module 7920 (useConversationBackoffRef)
import BackoffDefault from "Backoff" /* 559 */;
import noop from "module_19" /* 19 */;

const ConversationConstants = fn(7612);
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
