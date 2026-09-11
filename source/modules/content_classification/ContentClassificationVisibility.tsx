// Module ID: 12036
// Function ID: 12037
// Name: ContentClassificationVisibility
// Dependencies: [1371, 5165, 5167, 504, 2]
// Exports: getContentClassificationVisibility, useContentClassificationVisibility

// Module 12036 (ContentClassificationVisibility)
import initialize from "initialize" /* 504 */;
import ContentClassificationToAgeRestriction from "ContentClassificationToAgeRestriction" /* 5165 */;
import AgeRestrictionStatus from "AgeRestrictionStatus" /* 5167 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const ContentClassificationVisibility = { DISPLAY: "display", BLOCK_UNDERAGE: "block_underage", BLOCK_CHANNEL_RESTRICTION: "block_channel_restriction" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/content_classification/ContentClassificationVisibility.tsx");

export { ContentClassificationVisibility };
export const getContentClassificationVisibility = function getContentClassificationVisibility(contentClassification, channel, nsfwAllowed) {
  if (null != contentClassification) {
    const obj = ContentClassificationToAgeRestriction;
    const obj2 = { type: ContentClassificationToAgeRestriction.ContentClassificationVariant.MINIMAL, data: contentClassification };
    const result = obj.contentClassificationToAgeRestriction(obj2);
    if (result === AgeRestrictionStatus.AgeRestrictionStatus.ADULT) {
      if (true !== nsfwAllowed) {
        let DISPLAY = obj.BLOCK_UNDERAGE;
      } else {
        if (!channel.isPrivate()) {
          if (!channel.nsfw) {
            DISPLAY = obj.BLOCK_CHANNEL_RESTRICTION;
          }
        }
        DISPLAY = obj.DISPLAY;
      }
    }
    return DISPLAY;
  }
  DISPLAY = obj.DISPLAY;
};
export const useContentClassificationVisibility = function useContentClassificationVisibility(data, isPrivate) {
  initialize;
  [][0] = UserStore;
  if (null != data) {
    const obj = { type: tmp(5165).ContentClassificationVariant.MINIMAL, data };
    const result = tmp(5165).contentClassificationToAgeRestriction(obj);
    if (result === tmp(5167).AgeRestrictionStatus.ADULT) {
      if (true !== tmp4) {
        let DISPLAY = obj.BLOCK_UNDERAGE;
      } else {
        if (!isPrivate.isPrivate()) {
          if (!isPrivate.nsfw) {
            DISPLAY = obj.BLOCK_CHANNEL_RESTRICTION;
          }
        }
        DISPLAY = obj.DISPLAY;
      }
    }
    return DISPLAY;
  }
  DISPLAY = obj.DISPLAY;
};
