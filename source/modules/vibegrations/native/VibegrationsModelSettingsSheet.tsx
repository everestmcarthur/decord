// Module ID: 16601
// Function ID: 16602
// Name: VibegrationsModelSettingsSheet
// Dependencies: [109, 19, 16592, 21, 504, 16602, 1114, 3547, 7198, 7149, 6627, 4973, 576, 5685, 5688, 16603, 5687, 7201, 4556, 2]
// Exports: default

// Module 16601 (VibegrationsModelSettingsSheet)
import closure_4 from "_objectWithoutProperties" /* 109 */;
import closure_5 from "noop" /* 19 */;
import closure_6 from "rejectPendingPublish" /* 16592 */;
import { sendModelSettings } from "rejectPendingPublish" /* 16592 */;
import jsxProd from "jsxProd" /* 21 */;

const require = arg1;
let closure_3 = ["fast"];
({ jsx: closure_8, jsxs: c9 } = jsxProd);
const result = require("set").fileFinishedImporting("modules/vibegrations/native/VibegrationsModelSettingsSheet.tsx");

export default function VibegrationsModelSettingsSheet(projectId) {
  projectId = projectId.projectId;
  importDefault = undefined;
  let settings;
  let obj = projectId(settings[4]);
  const items = [closure_6];
  const items1 = [projectId];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_6.getModelSettings(projectId), items1);
  const items2 = [projectId];
  importDefault = React.useCallback((arg0) => {
    const modelSettings = closure_1_6.getModelSettings(closure_0);
    if (null != modelSettings) {
      const tmp12 = arg0(modelSettings.settings.main);
      closure_0 = tmp12;
      const tmp16 = closure_1_4(tmp12, closure_1_3);
      const main = modelSettings.choices.main;
      const found = main.find((id) => id.id === model.model);
      if (found != null) {
        const supports_fast = found.supports_fast;
      }
      try {
        let obj = projectId(settings[5]);
        let tmp6 = tmp16;
        if (true === tmp13) {
          tmp6 = tmp16;
          if (true === supports_fast) {
            obj = {};
            const merged = Object.assign(tmp16);
            obj.fast = true;
            tmp6 = obj;
          }
        }
        closure_1_7(closure_0, obj.vibegrationsSettingsForTier(tmp6));
        const tmp3 = closure_1_7;
      } catch (err) {
      }
    }
  }, items2);
  if (null == stateFromStores) {
    return null;
  } else {
    settings = stateFromStores.settings;
    const choices = stateFromStores.choices;
    const intl2 = tmp(tmp2[6]).intl;
    const stringResult = intl2.string(importDefault(tmp2[7])["9FRudW"]);
    const intl3 = tmp(tmp2[6]).intl;
    const stringResult1 = intl3.string(importDefault(tmp2[7])["4AsQHS"]);
    obj = { scrollable: true, header: null, children: null };
    obj = { title: null };
    const intl4 = tmp(tmp2[6]).intl;
    obj[0] = intl4.string(importDefault(tmp2[7])["2NWMqY"]);
    obj[1] = callback(tmp(tmp2[9]).BottomSheetTitleHeader, obj);
    obj1 = { direction: "vertical", spacing: null, children: null };
    obj1[1] = importDefault(tmp2[12]).space.PX_16;
    const obj2 = { hasIcons: false, defaultValue: null, onChange: null, title: null, accessibilityLabel: null, children: null };
    obj2[1] = settings.main.model;
    obj2[2] = function onChange(arg0) {
      closure_0 = arg0;
      return callback((arg0) => {
        const obj = {};
        const merged = Object.assign(arg0);
        obj.model = closure_0;
        return obj;
      });
    };
    obj2[3] = stringResult;
    obj2[4] = stringResult;
    let main = choices.main;
    obj2[5] = main.map((label) => callback2(projectId(settings[14]).TableRadioRow, { label: label.label, subLabel: projectId(settings[15]).PROVIDER_LABELS[label.provider], value: label.id }, label.id));
    const items3 = [callback(tmp(tmp2[13]).TableRadioGroup, obj2), , , ];
    const obj3 = { hasIcons: false, defaultValue: null, onChange: null, title: null, accessibilityLabel: null, children: null };
    obj3[1] = settings.main.thinking;
    obj3[2] = function onChange(arg0) {
      closure_0 = arg0;
      return callback((arg0) => {
        const obj = {};
        const merged = Object.assign(arg0);
        obj.thinking = closure_0;
        return obj;
      });
    };
    obj3[3] = stringResult1;
    obj3[4] = stringResult1;
    const thinking = choices.thinking;
    obj3[5] = thinking.map((value) => {
      let tmp2 = projectId(settings[15]).THINKING_LABELS[value];
      if (tmp2 == null) {
        tmp2 = value;
      }
      return closure_8(projectId(settings[14]).TableRadioRow, { label: tmp2, value }, value);
    });
    items3[1] = callback(tmp(tmp2[13]).TableRadioGroup, obj3);
    const main1 = choices.main;
    let found = main1.find((id) => id.id === settings.main.model);
    let supports_fast;
    if (found != null) {
      supports_fast = found.supports_fast;
    }
    let tmp9Result = null;
    if (true === supports_fast) {
      const obj4 = { hasIcons: false, children: null };
      const obj5 = { label: null, subLabel: null, value: null, onValueChange: null };
      const intl5 = tmp(tmp2[6]).intl;
      obj5[0] = intl5.string(tmp6(tmp2[7]).SYLSgx);
      const intl6 = tmp(tmp2[6]).intl;
      obj5[1] = intl6.string(tmp6(tmp2[7]).HITWAI);
      obj5[2] = true === settings.main.fast;
      obj5[3] = function onValueChange(arg0) {
        closure_0 = arg0;
        return callback((arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj.fast = closure_0;
          return obj;
        });
      };
      obj4[1] = tmp9(tmp(tmp2[17]).TableSwitchRow, obj5);
      tmp9Result = tmp9(tmp(tmp2[16]).TableRowGroup, obj4);
    }
    const obj6 = { children: null };
    items3[2] = tmp9Result;
    const obj7 = { variant: "text-xs/normal", color: "text-muted", children: null };
    const intl = tmp(tmp2[6]).intl;
    obj7[2] = intl.string(importDefault(tmp2[7]).ICU5aW);
    items3[3] = callback(tmp(tmp2[18]).Text, obj7);
    obj1[2] = items3;
    obj6[0] = closure_9(tmp(tmp2[11]).Stack, obj1);
    obj[2] = callback(tmp(tmp2[10]).BottomSheetScrollView, obj6);
    return callback(tmp(tmp2[8]).ActionSheet, obj);
  }
};
export const VIBEGRATIONS_MODEL_SETTINGS_SHEET_KEY = "VibegrationsModelSettingsSheet";
