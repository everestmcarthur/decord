// Module ID: 7893
// Function ID: 7894
// Name: ExperimentDevToolsUtils
// Dependencies: [7894, 4481, 2]
// Exports: getExperimentVariantsForDevTools

// Module 7893 (ExperimentDevToolsUtils)
import ExperimentManager from "ExperimentManager" /* 4481 */;
import experiment2 from "experiment" /* 7894 */;
import size from "module_2" /* 2 */;

const obj = { id: -1, label: "Not Eligible", shortLabel: "Not Eligible", type: experiment2.Variation_Type.OVERRIDE };
const result = size.fileFinishedImporting("modules/experiments/devtools/ExperimentDevToolsUtils.tsx");

export const getExperimentVariantsForDevTools = function getExperimentVariantsForDevTools(experiment) {
  if (experiment.system !== ExperimentManager.ExperimentSystem.APEX) {
    let variants = experiment.variants;
  } else {
    const items = [obj];
    variants = items.concat(experiment.variants);
  }
  return variants;
};
