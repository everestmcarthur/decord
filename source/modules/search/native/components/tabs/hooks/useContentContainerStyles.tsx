// Module ID: 16688
// Function ID: 16689
// Name: styles
// Dependencies: [7878, 4560, 2]

// Module 16688 (styles)
import set from "set" /* 2 */;
import MessageEmbedTypes from "MessageEmbedTypes" /* 7878 */;
import createCacheKey from "createCacheKey" /* 4560 */;

({ SEARCH_LIST_SECTION_TOP_PADDING, SEARCH_LIST_HORIZONTAL_PADDING, SEARCH_ROW_TAP_STATE_PADDING } = MessageEmbedTypes);
const styles = createCacheKey.createStyles({ filesOrLinksContentContainer: { paddingTop: SEARCH_LIST_HORIZONTAL_PADDING, paddingHorizontal: SEARCH_LIST_HORIZONTAL_PADDING }, mediaContentContainer: { paddingTop: SEARCH_LIST_SECTION_TOP_PADDING, paddingHorizontal: SEARCH_LIST_HORIZONTAL_PADDING }, messagesContentContainer: { paddingTop: SEARCH_LIST_SECTION_TOP_PADDING - SEARCH_ROW_TAP_STATE_PADDING }, membersContentContainer: { paddingTop: SEARCH_LIST_SECTION_TOP_PADDING, paddingHorizontal: SEARCH_LIST_HORIZONTAL_PADDING } });
const result = set.fileFinishedImporting("modules/search/native/components/tabs/hooks/useContentContainerStyles.tsx");

export const useContentContainerStyles = styles;
