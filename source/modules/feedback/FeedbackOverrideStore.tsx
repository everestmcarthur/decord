// Module ID: 17354
// Function ID: 17355
// Name: initialize
// Dependencies: [17353, 504, 573, 2]

// Module 17354 (initialize)
import initializeDefault from "initialize" /* 504 */;
import dispatcherDefault from "dispatcher" /* 573 */;
import optOutEligibilityCheck from "optOutEligibilityCheck" /* 17353 */;

require = arg1;
let closure_2 = {};
const Store = initializeDefault.Store;
class HotspotStore extends Store {
}
const prototype = HotspotStore.prototype;
prototype["initialize"] = function initialize() {

};
prototype["getFeedbackConfig"] = function getFeedbackConfig(ACTIVITY) {
  return table[ACTIVITY];
};
HotspotStore.displayName = "FeedbackOverrideStore";
HotspotStore.persistKey = "feedbackOverrides";
const hotspotStore = new HotspotStore(dispatcherDefault, {
  FEEDBACK_OVERRIDE_SET: function handleSetFeedbackOverride(feedbackType) {
    feedbackType = feedbackType.feedbackType;
    const obj = {};
    ({ cooldown, chance } = feedbackType);
    const merged = Object.assign(optOutEligibilityCheck.FeedbackConfig[feedbackType]);
    obj.cooldown = cooldown;
    obj.chance = chance;
    closure_2[feedbackType] = obj;
  },
  FEEDBACK_OVERRIDE_CLEAR: function handleClearFeedbackOverride(arg0) {
    delete tmp[tmp2];
  }
});
const result = require("set").fileFinishedImporting("modules/feedback/FeedbackOverrideStore.tsx");

export default hotspotStore;
