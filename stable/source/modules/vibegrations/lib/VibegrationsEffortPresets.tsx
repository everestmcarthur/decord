// Module ID: 16602
// Function ID: 16603
// Name: VibegrationsEffortPresets
// Dependencies: [1114, 3547, 16603, 2]
// Exports: describeVibegrationsModelSettings, matchVibegrationsEffortPreset, vibegrationsSettingsForTier

// Module 16602 (VibegrationsEffortPresets)
import util from "util" /* 1114 */;
import _modDef3547 from "module_3547" /* 3547 */;
import VibegrationsModelLabels from "VibegrationsModelLabels" /* 16603 */;
import size from "module_2" /* 2 */;

const items = [
  {
    model: "gpt-5.6-luna",
    thinking: "high",
    summary() {
      const intl = util.intl;
      return intl.string(_modDef3547.Mo0a1m);
    }
  },
  {
    model: "gpt-5.6-sol",
    thinking: "high",
    summary() {
      const intl = util.intl;
      return intl.string(_modDef3547.dkt78K);
    }
  },
  {
    model: "gpt-6-astra",
    thinking: "medium",
    summary() {
      const intl = util.intl;
      return intl.string(_modDef3547.Ly6zYL);
    }
  }
];
let obj2 = items[1];
if (obj2 == null) {
  obj2 = { model: "gpt-5.6-sol", thinking: "high" };
}
const obj3 = { model: obj2.model, thinking: obj2.thinking };
const obj4 = { main: null, subagent: null };
function vibegrationsSettingsForTier(arg0) {
  const obj = { main: null, subagent: null };
  const merged = Object.assign(arg0);
  obj.main = {};
  const merged1 = Object.assign(arg0);
  obj.subagent = {};
  return obj;
}
let merged = Object.assign(obj3);
obj4.main = {};
let merged1 = Object.assign(obj3);
obj4.subagent = {};
const result = size.fileFinishedImporting("modules/vibegrations/lib/VibegrationsEffortPresets.tsx");

export const VIBEGRATIONS_EFFORT_PRESETS = items;
export const VIBEGRATIONS_DEFAULT_MODEL_SETTINGS = obj4;
export const matchVibegrationsEffortPreset = function matchVibegrationsEffortPreset(arg0) {
  const main = arg0;
  return items.findIndex((model) => main.main.model === model.model && main.main.thinking === model.thinking && main.subagent.model === model.model && main.subagent.thinking === model.thinking);
};
export { vibegrationsSettingsForTier };
export const describeVibegrationsModelSettings = function describeVibegrationsModelSettings(main, arr) {
  main = main.main;
  const model = main.model;
  const thinking = main.thinking;
  const found = arr.find((id) => id.id === model);
  let label;
  if (found != null) {
    label = found.label;
  }
  if (label == null) {
    label = model;
  }
  let tmp3 = VibegrationsModelLabels.THINKING_LABELS[thinking];
  if (tmp3 == null) {
    tmp3 = thinking;
  }
  return "" + label + " \u00B7 " + tmp3;
};
