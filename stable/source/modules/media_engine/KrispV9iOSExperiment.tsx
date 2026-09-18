// Module ID: 14076
// Function ID: 14077
// Name: KrispV9iOSExperiment
// Dependencies: [1433, 2]
// Exports: getKrispV9iOSModels

// Module 14076 (KrispV9iOSExperiment)
import ApexExperiment from "ApexExperiment" /* 1433 */;
import size from "module_2" /* 2 */;

const obj = { kind: "user", name: "2026-04-krisp-v9-ios", defaultConfig: null, variations: null };
const obj2 = { models: null };
const items = [{ name: "small_NC_8k", maxSampleRate: 8000, filename: "krisp-nc-o-nb-v2.kef" }, { name: "small_NC", maxSampleRate: 16000, filename: "krisp-nc-o-lite-v1.kef" }, { name: "full_NC", maxSampleRate: 96000, filename: "krisp-nc-o-med-v7-fp16.kef" }];
obj2.models = items;
obj.defaultConfig = obj2;
const obj3 = { 1: null };
const obj4 = { models: null };
const items1 = [{ name: "small_NC_8k", maxSampleRate: 8000, filename: "krisp-nc-o-nb-v2.kef" }, { name: "small_NC_non_optimized", maxSampleRate: 16000, filename: "c6.f.s.laughter.da1785_non_optimized.kef" }, { name: "full_NC_non_optimized", maxSampleRate: 96000, filename: "krisp-nc-o-med-v7.kef" }];
obj4.models = items1;
obj3[1] = obj4;
obj.variations = obj3;
const config = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/media_engine/KrispV9iOSExperiment.tsx");

export const getKrispV9iOSModels = function getKrispV9iOSModels() {
  return config.getConfig({ location: "setupKrisp" }).models;
};
