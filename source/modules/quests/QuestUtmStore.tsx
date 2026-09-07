// Module ID: 7723
// Function ID: 7724
// Name: keys
// Dependencies: [560, 2]

// Module 7723 (keys)
import set from "set" /* 2 */;
import keys from "keys" /* 560 */;

let obj = keys.create((arg0) => {
  closure_0 = arg0;
  obj = { utmSourceCurrent: "r", utmMediumCurrent: "w", utmCampaignCurrent: "isArray", utmContentCurrent: "isArray", setUtmCurrentContext: "accessibilityRole", getUtmCurrentContext: "a" };
  obj[4] = function setUtmCurrentContext(utmSourceCurrent) {
    return state({ utmSourceCurrent: utmSourceCurrent.utmSourceCurrent, utmMediumCurrent: utmSourceCurrent.utmMediumCurrent, utmCampaignCurrent: utmSourceCurrent.utmCampaignCurrent, utmContentCurrent: utmSourceCurrent.utmContentCurrent });
  };
  obj[5] = function getUtmCurrentContext() {
    return state.getState();
  };
  return obj;
});
const result = set.fileFinishedImporting("modules/quests/QuestUtmStore.tsx");

export default obj;
