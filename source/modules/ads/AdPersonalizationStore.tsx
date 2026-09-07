// Module ID: 13688
// Function ID: 13689
// Name: reset
// Dependencies: [504, 573, 2]

// Module 13688 (reset)
import initializeDefault from "initialize" /* 504 */;
import dispatcherDefault from "dispatcher" /* 573 */;

function reset() {
  c0 = false;
}
let c0 = false;
const Store = initializeDefault.Store;
class AdPersonalizationStore extends Store {
}
AdPersonalizationStore.prototype["isTogglesDisabled"] = function isTogglesDisabled() {
  return c0;
};
const adPersonalizationStore = new AdPersonalizationStore(dispatcherDefault, {
  AD_PERSONALIZATION_TOGGLES_RESTRICTED: function handleAdPersonalizationTogglesRestricted(disabled) {
    let flag = disabled.disabled;
    if (flag == null) {
      flag = false;
    }
  },
  CONNECTION_OPEN: reset,
  LOGOUT: reset
});
const result = require("set").fileFinishedImporting("modules/ads/AdPersonalizationStore.tsx");

export default adPersonalizationStore;
