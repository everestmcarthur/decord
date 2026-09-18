// Module ID: 7606
// Function ID: 7607
// Name: MonitoringAgentUtils
// Dependencies: [1345, 2]
// Exports: addGlobalTag, getGlobalTagsArray

// Module 7606 (MonitoringAgentUtils)
import DesignIds from "DesignIds" /* 1345 */;
import size from "module_2" /* 2 */;

const obj = { design_id: DesignIds.DesignIds.DESIGN_TABS_IA };
const result = size.fileFinishedImporting("modules/monitoring/MonitoringAgentUtils.tsx");

export const addGlobalTag = function addGlobalTag(arg0, arg1) {
  obj[arg0] = arg1;
};
export const getGlobalTagsArray = function getGlobalTagsArray() {
  const keys = Object.keys(obj);
  return keys.map((item) => "" + item + ":" + obj[item]);
};
