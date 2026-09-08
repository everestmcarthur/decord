// Module ID: 7723
// Function ID: 7724
// Name: keys
// Dependencies: [560, 2]

// Module 7723 (keys)
import set from "set" /* 2 */;
import keys from "keys" /* 560 */;

const obj = keys.create((arg0) => {
  closure_0 = arg0;
  return {
    utmSourceCurrent: "r",
    utmMediumCurrent: "ip",
    utmCampaignCurrent: "values",
    utmContentCurrent: "isArray",
    setUtmCurrentContext(utmSourceCurrent) {
      return state({ utmSourceCurrent: utmSourceCurrent.utmSourceCurrent, utmMediumCurrent: utmSourceCurrent.utmMediumCurrent, utmCampaignCurrent: utmSourceCurrent.utmCampaignCurrent, utmContentCurrent: utmSourceCurrent.utmContentCurrent });
    },
    getUtmCurrentContext() {
      return state.getState();
    }
  };
});
const result = set.fileFinishedImporting("modules/quests/QuestUtmStore.tsx");

export default obj;
