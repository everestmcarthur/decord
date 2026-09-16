// Module ID: 9732
// Function ID: 9733
// Name: VoiceChatModalContext
// Dependencies: [19, 2]
// Exports: useVoiceChatNavigationContext

// Module 9732 (VoiceChatModalContext)
import noop from "module_19" /* 19 */;

const context = noop.createContext(null);
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_chat/native/VoiceChatModalContext.tsx");

export const VoiceChatNavigationContext = context;
export const useVoiceChatNavigationContext = function useVoiceChatNavigationContext() {
  return noop.useContext(context);
};
