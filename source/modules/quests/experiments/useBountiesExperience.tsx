// Module ID: 11614
// Function ID: 11615
// Name: useBountiesExperience
// Dependencies: [11615, 11616, 11617, 2]
// Exports: useBountiesExperience

// Module 11614 (useBountiesExperience)
import BountiesVerticalScrollExperiment2 from "BountiesVerticalScrollExperiment" /* 11615 */;
import BountiesStage1Experiment2 from "BountiesStage1Experiment" /* 11616 */;
import QuestHomeBountiesExperiment2 from "QuestHomeBountiesExperiment" /* 11617 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/experiments/useBountiesExperience.tsx");

export const useBountiesExperience = function useBountiesExperience(VIDEO_MODAL_MOBILE) {
  const BountiesVerticalScrollExperiment = BountiesVerticalScrollExperiment2.BountiesVerticalScrollExperiment;
  const config = BountiesVerticalScrollExperiment.useConfig({ location: VIDEO_MODAL_MOBILE });
  const BountiesStage1Experiment = BountiesStage1Experiment2.BountiesStage1Experiment;
  const config1 = BountiesStage1Experiment.useConfig({ location: VIDEO_MODAL_MOBILE });
  const QuestHomeBountiesExperiment = QuestHomeBountiesExperiment2.QuestHomeBountiesExperiment;
  let num = 50;
  const config2 = QuestHomeBountiesExperiment.useConfig({ location: VIDEO_MODAL_MOBILE });
  if (config1.enabled) {
    num = config1.orbAmount;
  }
  let num2 = 15;
  if (config1.enabled) {
    num2 = config1.rewardTimerSeconds;
  }
  if (config.enabled) {
    const obj9 = { showBounties: true, ownedByVerticalScrollExperiment: true, verticalScrollEnabled: null, loopingEnabled: false, ctaTimerMilliSeconds: null, scrollAffordanceVariant: null, stage1Enabled: null, orbAmount: null, rewardTimerSeconds: null };
    ({ verticalScrollEnabled: obj5.verticalScrollEnabled, ctaTimerMilliSeconds: obj5.ctaTimerMilliSeconds, scrollAffordanceVariant: obj5.scrollAffordanceVariant } = config);
    obj9.stage1Enabled = config1.enabled;
    obj9.orbAmount = num;
    obj9.rewardTimerSeconds = num2;
    let obj10 = obj9;
  } else {
    obj10 = { showBounties: config2.enabled, ownedByVerticalScrollExperiment: false, verticalScrollEnabled: null, loopingEnabled: null, ctaTimerMilliSeconds: null, scrollAffordanceVariant: "none", stage1Enabled: null, orbAmount: null, rewardTimerSeconds: null };
    ({ verticalScrollEnabled: obj4.verticalScrollEnabled, loopingEnabled: obj4.loopingEnabled, ctaTimerMilliSeconds: obj4.ctaTimerMilliSeconds, enabled: obj4.stage1Enabled } = config1);
    obj10.orbAmount = num;
    obj10.rewardTimerSeconds = num2;
  }
  return obj10;
};
