// Module ID: 7967
// Function ID: 7968
// Name: ExperimentDevToolsUtils
// Dependencies: [7968, 4528, 2]
// Exports: getExperimentVariantsForDevTools

// Module 7967 (ExperimentDevToolsUtils)
import ExperimentManager from "ExperimentManager" /* 4528 */;
import experiment2 from "experiment" /* 7968 */;
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
