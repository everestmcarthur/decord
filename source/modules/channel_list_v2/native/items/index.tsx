// Module ID: 16108
// Function ID: 16109
// Name: CategoryChannel
// Dependencies: [2, 16109, 16116, 16134]

// Module 16108 (CategoryChannel)
import set from "set" /* 2 */;
import renderCategoryItem from "renderCategoryItem" /* 16109 */;
import ThreadChannelDefault from "ThreadChannel" /* 16116 */;
import RedesignVoiceUserSummaryDefault from "RedesignVoiceUserSummary" /* 16134 */;

const result = set.fileFinishedImporting("modules/channel_list_v2/native/items/index.tsx");

export const CategoryChannel = renderCategoryItem.CategoryChannel;
export const SuggestedCategory = renderCategoryItem.SuggestedCategory;
export const RecentlyActiveCategory = renderCategoryItem.RecentlyActiveCategory;
export const renderCategoryItem = renderCategoryItem.renderCategoryItem;
export const useCategoryStyles = renderCategoryItem.useCategoryStyles;
export const ThreadChannel = ThreadChannelDefault;
export const RedesignVoiceUserSummary = RedesignVoiceUserSummaryDefault;
