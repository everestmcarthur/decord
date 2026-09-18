// Module ID: 16601
// Function ID: 16602
// Name: VibegrationsModelSettingsSheet
// Dependencies: [19, 16592, 21, 504, 16602, 1114, 3547, 7198, 7149, 6627, 4973, 576, 5685, 5688, 16603, 4556, 2]
// Exports: default

// Module 16601 (VibegrationsModelSettingsSheet)
import nativeDefault from "native" /* 576 */;
import _modDef3547 from "module_3547" /* 3547 */;
import VibegrationsEffortPresets from "VibegrationsEffortPresets" /* 16602 */;
import noop from "module_19" /* 19 */;
import VibegrationsConnectionStore from "VibegrationsConnectionStore" /* 16592 */;

require = fn;
const sendModelSettings = fn(16592).sendModelSettings;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsModelSettingsSheet.tsx");

export default function VibegrationsModelSettingsSheet(projectId) {
  projectId = projectId.projectId;
  const items = [VibegrationsConnectionStore];
  const items1 = [projectId];
  const stateFromStores = projectId(504).useStateFromStores(items, () => VibegrationsConnectionStore.getModelSettings(projectId), items1);
  const items2 = [projectId];
  importDefault = noop.useCallback((fn) => {
    const modelSettings = VibegrationsConnectionStore.getModelSettings(projectId);
    let settings;
    if (modelSettings != null) {
      settings = modelSettings.settings;
    }
    if (null != settings) {
      try {
        sendModelSettings(projectId, VibegrationsEffortPresets.vibegrationsSettingsForTier(fn(settings.main)));
      } catch (err) {
      }
    }
  }, items2);
  if (null == stateFromStores) {
    return null;
  } else {
    ({ settings, choices } = stateFromStores);
    const intl = tmp(1114).intl;
    const stringResult = intl.string(_modDef3547["9FRudW"]);
    const intl2 = tmp(1114).intl;
    const stringResult1 = intl2.string(_modDef3547["4AsQHS"]);
    const obj2 = { scrollable: true, header: null, children: null };
    const obj3 = { title: null };
    const intl3 = tmp(1114).intl;
    obj3.title = intl3.string(_modDef3547["2NWMqY"]);
    obj2.header = closure_6(tmp(7149).BottomSheetTitleHeader, obj3);
    const obj4 = { children: null };
    const obj5 = { direction: "vertical", spacing: nativeDefault.space.PX_16, children: null };
    const obj6 = {
      hasIcons: false,
      defaultValue: settings.main.model,
      onChange(model) {
          return closure_1((arg0) => {
            const obj = {};
            const merged = Object.assign(arg0);
            obj.model = model;
            return obj;
          });
        },
      title: stringResult,
      accessibilityLabel: stringResult,
      children: null
    };
    const main = choices.main;
    obj6.children = main.map((label) => closure_1_6(projectId(5688).TableRadioRow, { label: label.label, subLabel: projectId(16603).PROVIDER_LABELS[label.provider], value: label.id }, label.id));
    const items3 = [closure_6(tmp(5685).TableRadioGroup, obj6), , ];
    const obj7 = {
      hasIcons: false,
      defaultValue: settings.main.thinking,
      onChange(thinking) {
          return closure_1((arg0) => {
            const obj = {};
            const merged = Object.assign(arg0);
            obj.thinking = thinking;
            return obj;
          });
        },
      title: stringResult1,
      accessibilityLabel: stringResult1,
      children: null
    };
    let thinking = choices.thinking;
    obj7.children = thinking.map((value) => {
      let tmp2 = projectId(16603).THINKING_LABELS[value];
      if (tmp2 == null) {
        tmp2 = value;
      }
      return closure_1_6(projectId(5688).TableRadioRow, { label: tmp2, value }, value);
    });
    items3[1] = closure_6(tmp(5685).TableRadioGroup, obj7);
    const obj8 = { variant: "text-xs/normal", color: "text-muted", children: null };
    const intl4 = tmp(1114).intl;
    obj8.children = intl4.string(_modDef3547.ICU5aW);
    items3[2] = closure_6(tmp(4556).Text, obj8);
    obj5.children = items3;
    obj4.children = closure_7(tmp(4973).Stack, obj5);
    obj2.children = closure_6(tmp(6627).BottomSheetScrollView, obj4);
    return closure_6(tmp(7198).ActionSheet, obj2);
  }
  let obj = projectId(504);
};
export const VIBEGRATIONS_MODEL_SETTINGS_SHEET_KEY = "VibegrationsModelSettingsSheet";
