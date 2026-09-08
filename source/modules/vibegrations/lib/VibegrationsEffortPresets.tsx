// Module ID: 16602
// Function ID: 16603
// Name: items
// Dependencies: [1114, 3547, 16603, 2]
// Exports: describeVibegrationsModelSettings, matchVibegrationsEffortPreset, vibegrationsPresetTier, vibegrationsSettingsForTier

// Module 16602 (items)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import messagesProxyDefault from "messagesProxy" /* 3547 */;

let obj = {
  model: "gpt-5.6-luna",
  thinking: "high",
  fast: true,
  summary() {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxyDefault.Mo0a1m);
  }
};
const items = [
  obj,
  {
    model: "gpt-5.6-sol",
    thinking: "high",
    summary() {
      const intl = getSystemLocale.intl;
      return intl.string(messagesProxyDefault.dkt78K);
    }
  },
  {
    model: "gpt-6-astra",
    thinking: "medium",
    summary() {
      const intl = getSystemLocale.intl;
      return intl.string(messagesProxyDefault.Ly6zYL);
    }
  }
];
let tmp2 = items[1];
if (tmp2 == null) {
  obj = { model: "gpt-5.6-sol", thinking: "high", summary: null };
  obj[2] = function summary() {
    return "";
  };
  tmp2 = obj;
}
obj = { model: tmp2.model, thinking: tmp2.thinking };
function vibegrationsPresetTier(model) {
  const merged = Object.assign(true === model.fast ? { fast: true } : {});
  return { model: model.model, thinking: model.thinking };
}
function vibegrationsSettingsForTier(arg0) {
  let obj = { main: null, subagent: null };
  obj = {};
  const merged = Object.assign(arg0);
  obj[0] = obj;
  obj = {};
  const merged1 = Object.assign(arg0);
  obj[1] = obj;
  return obj;
}
let merged = Object.assign(true === tmp2.fast ? { fast: true } : {});
const obj1 = { main: null, subagent: null };
let merged1 = Object.assign(obj);
obj1[0] = {};
const merged2 = Object.assign(obj);
obj1[1] = {};
const result = set.fileFinishedImporting("modules/vibegrations/lib/VibegrationsEffortPresets.tsx");

export const VIBEGRATIONS_EFFORT_PRESETS = items;
export { vibegrationsPresetTier };
export const VIBEGRATIONS_DEFAULT_MODEL_SETTINGS = obj1;
export const matchVibegrationsEffortPreset = function matchVibegrationsEffortPreset(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  return items.findIndex((model) => {
    main = main.main;
    let tmp2 = main.model === model.model;
    if (tmp2) {
      tmp2 = main.thinking === model.thinking;
    }
    if (tmp2) {
      main = model;
      let tmp3 = true === model.fast;
      if (tmp3) {
        let tmp5 = null == closure_1;
        if (!tmp5) {
          const found = arr.find((id) => id.id === model.model);
          let supports_fast;
          if (found != null) {
            supports_fast = found.supports_fast;
          }
          tmp5 = true === supports_fast;
        }
        tmp3 = tmp5;
        arr = closure_1;
      }
      tmp2 = true === main.fast === tmp3;
    }
    if (tmp2) {
      const subagent = main.subagent;
      let tmp8 = subagent.model === model.model && subagent.thinking === model.thinking;
      if (tmp8) {
        main = model;
        let tmp9 = true === model.fast;
        if (tmp9) {
          let tmp11 = null == closure_1;
          if (!tmp11) {
            const found1 = arr2.find((id) => id.id === model.model);
            let supports_fast1;
            if (found1 != null) {
              supports_fast1 = found1.supports_fast;
            }
            tmp11 = true === supports_fast1;
          }
          tmp9 = tmp11;
          arr2 = closure_1;
        }
        tmp8 = true === subagent.fast === tmp9;
      }
      tmp2 = tmp8;
    }
    return tmp2;
  });
};
export { vibegrationsSettingsForTier };
export const describeVibegrationsModelSettings = function describeVibegrationsModelSettings(main, arr) {
  main = main.main;
  const model = main.model;
  ({ thinking, fast } = main);
  const found = arr.find((id) => id.id === model);
  let label;
  if (found != null) {
    label = found.label;
  }
  if (label == null) {
    label = model;
  }
  let tmp5 = model(16603).THINKING_LABELS[thinking];
  if (tmp5 == null) {
    tmp5 = thinking;
  }
  const combined = "" + label + " \u00B7 " + tmp5;
  let combined1 = combined;
  if (true === fast) {
    const intl = model(1114).intl;
    const _HermesInternal = HermesInternal;
    combined1 = "" + combined + " \u00B7 " + intl.string(messagesProxyDefault.qOoAsd);
  }
  return combined1;
};
