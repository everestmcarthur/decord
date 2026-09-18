// Module ID: 8837
// Function ID: 8838
// Name: CollectiblesProfileFramesPurchaseExperiment
// Dependencies: [1433, 2]

// Module 8837 (CollectiblesProfileFramesPurchaseExperiment)
import ApexExperiment from "ApexExperiment" /* 1433 */;
import size from "module_2" /* 2 */;

const obj = { CONTROL: 0, [0]: "CONTROL", OPEN_PURCHASE: 1, [1]: "OPEN_PURCHASE", PAID_PREMIUM_SUBSCRIBERS_ONLY: 2, [2]: "PAID_PREMIUM_SUBSCRIBERS_ONLY" };
const obj2 = { name: "2026-04-collectibles-profile-frames-purchase", kind: "user", defaultConfig: { bucket: obj.CONTROL }, variations: { 0: { bucket: obj.CONTROL }, 1: { bucket: obj.OPEN_PURCHASE }, 2: { bucket: obj.PAID_PREMIUM_SUBSCRIBERS_ONLY } } };
const apexExperiment = ApexExperiment.createApexExperiment(obj2);
const result = size.fileFinishedImporting("modules/collectibles/experiments/CollectiblesProfileFramesPurchaseExperiment.tsx");

export default apexExperiment;
export const ProfileFramesPurchaseBucket = obj;
