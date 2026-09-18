// Module ID: 16614
// Function ID: 16615
// Name: VibegrationsSettingsSheet
// Dependencies: [5, 32, 19, 17, 16589, 16592, 16590, 21, 4560, 576, 6981, 504, 1114, 3547, 9798, 13258, 4527, 5685, 5688, 5604, 6606, 4556, 4975, 7198, 7149, 9799, 2]
// Exports: default

// Module 16614 (VibegrationsSettingsSheet)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import _modDef3547 from "module_3547" /* 3547 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import VibegrationsChatStore from "VibegrationsChatStore" /* 16589 */;
import VibegrationsConnectionStore_mod from "VibegrationsConnectionStore" /* 16592 */;
import VibegrationsProjectStore from "VibegrationsProjectStore" /* 16590 */;

require = fn;
const View = fn(17).View;
let VibegrationsConnectionStore = fn(16592);
({ requestProjectRebuild: closure_8, sendUserMessage: closure_9, submitProjectSettings: c10 } = VibegrationsConnectionStore);
let VibegrationsConnectionStore = VibegrationsConnectionStore_mod;
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14, Fragment: closure_15 } = jsxProd);
const VibegrationsSettingsSheet = "VibegrationsSettingsSheet";
const createStyles = fn(4560);
let closure_17 = createStyles.createStyles((paddingBottom) => {
  const obj = { container: { gap: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16, paddingBottom }, section: null, secretRow: null, secretRowInfo: null };
  const obj2 = { gap: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16, paddingBottom };
  obj.section = { gap: nativeDefault.space.PX_16 };
  const obj3 = { gap: nativeDefault.space.PX_16 };
  obj.secretRow = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_8 };
  const obj4 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_8 };
  obj.secretRowInfo = { flex: 1, gap: nativeDefault.space.PX_4 };
  return obj;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsSettingsSheet.tsx");

export default function VibegrationsSettingsSheet(projectId) {
  projectId = projectId.projectId;
  ({ scopeKeys, note, notifyAgent } = projectId);
  if (notifyAgent === undefined) {
    notifyAgent = false;
  }
  let first;
  noop = undefined;
  c8 = undefined;
  c9 = undefined;
  closure_11 = undefined;
  let map;
  c18 = undefined;
  let memo4;
  closure_20 = undefined;
  function renderValueSetting(found) {
    closure_0 = found;
    let hint;
    if (found != null) {
      hint = found.hint;
    }
    let hint1;
    if (null != hint) {
      if ("" !== found.hint) {
        hint1 = found.hint;
      }
    }
    const items = [hint1, ];
    let requires_rebuild;
    if (found != null) {
      requires_rebuild = found.requires_rebuild;
    }
    let stringResult;
    if (true === requires_rebuild) {
      const intl = projectId(closure_2[12]).intl;
      stringResult = intl.string(notifyAgent(closure_2[13]).xPxvYa);
    }
    items[1] = stringResult;
    found = items.filter((item) => null != item);
    if (0 !== found.length) {
      const joined = found.join(" ");
    }
    if ("select" === found.type) {
      let tmp24 = first[found.key];
      if (tmp24 == null) {
        tmp24 = memo1[found.key];
      }
      let tmp29;
      if (typeof tmp24 === "string") {
        tmp29 = tmp24;
      }
      const obj2 = {
        hasIcons: false,
        defaultValue: tmp29,
        onChange(arg0) {
            closure_1_12(false);
            closure_1_5((arg0) => {
              const obj = {};
              const merged = Object.assign(arg0);
              obj[key.key] = key;
              return obj;
            });
          },
        title: null,
        accessibilityLabel: null,
        children: null
      };
      ({ label: obj3.title, label: obj3.accessibilityLabel, options } = found);
      if (options == null) {
        options = [];
      }
      obj2.children = options.map((label) => memo(closure_0(closure_1_2[18]).TableRadioRow, { label: label.label, value: label.value }, label.value));
      return memo(projectId(closure_2[17]).TableRadioGroup, obj2, found.key);
    } else if ("checkbox" === found.type) {
      let tmp17 = first[found.key];
      if (tmp17 == null) {
        tmp17 = memo1[found.key];
      }
      const obj5 = {
        label: found.label,
        subLabel: joined,
        checked: true === tmp17,
        disabled: first2,
        onPress(arg0) {
            closure_1_12(false);
            closure_1_5((arg0) => {
              const obj = {};
              const merged = Object.assign(arg0);
              obj[key.key] = key;
              return obj;
            });
          }
      };
      return memo(projectId(closure_2[19]).TableCheckboxRow, obj5, found.key);
    } else {
      let tmp11 = first[found.key];
      if (tmp11 == null) {
        tmp11 = memo1[found.key];
      }
      let obj = { label: found.label, description: joined, autoComplete: "off", autoCapitalize: "none", autoCorrect: false, value: null, onChange: null, isDisabled: null };
      let str3 = "";
      if (typeof tmp11 === "string") {
        str3 = tmp11;
      }
      obj.value = str3;
      obj.onChange = function onChange(arg0) {
        closure_1_12(false);
        closure_1_5((arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj[key.key] = key;
          return obj;
        });
      };
      obj.isDisabled = first2;
      return memo(projectId(closure_2[20]).TextInput, obj, found.key);
    }
  }
  function renderSecret(value) {
    closure_0 = value;
    const def = value.def;
    let label;
    if (def != null) {
      label = def.label;
    }
    if (label == null) {
      label = value.name;
    }
    const def2 = value.def;
    let hint;
    if (def2 != null) {
      hint = def2.hint;
    }
    let hint1;
    if (null != hint) {
      if ("" !== def2.hint) {
        hint1 = def2.hint;
      }
    }
    const items = [hint1, ];
    let requires_rebuild;
    if (def2 != null) {
      requires_rebuild = def2.requires_rebuild;
    }
    let stringResult;
    if (true === requires_rebuild) {
      const intl = projectId(closure_2[12]).intl;
      stringResult = intl.string(notifyAgent(closure_2[13]).xPxvYa);
    }
    items[1] = stringResult;
    found = items.filter((item) => null != item);
    let joined;
    if (0 !== found.length) {
      joined = found.join(" ");
    }
    if (value.set) {
      if (true !== _undefined[value.name]) {
        const obj2 = { style: closure_2.secretRow, children: null };
        const obj3 = { style: closure_2.secretRowInfo, children: null };
        const obj4 = { variant: "text-sm/medium", color: "text-default", children: label };
        const items1 = [memo(projectId(closure_2[21]).Text, obj4), memo(projectId(closure_2[21]).Text, { variant: "text-sm/normal", color: "text-muted", children: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" }), ];
        let tmp23 = null;
        if (null != joined) {
          const obj5 = { variant: "text-xs/normal", color: "text-muted", children: joined };
          tmp23 = memo(projectId(closure_2[21]).Text, obj5);
        }
        items1[2] = tmp23;
        obj3.children = items1;
        const items2 = [memo1(first1, obj3), ];
        const obj6 = { variant: "secondary", size: "sm", text: null, accessibilityLabel: null, disabled: null, onPress: null };
        const intl2 = projectId(closure_2[12]).intl;
        obj6.text = intl2.string(notifyAgent(closure_2[13]).j6itec);
        const intl3 = projectId(closure_2[12]).intl;
        const obj7 = { label };
        obj6.accessibilityLabel = intl3.formatToPlainString(notifyAgent(closure_2[13]).cTofe2, obj7);
        obj6.disabled = first2;
        obj6.onPress = function onPress() {
          return c9((arg0) => {
            const obj = {};
            const merged = Object.assign(arg0);
            obj[name.name] = true;
            return obj;
          });
        };
        items2[1] = memo(projectId(closure_2[22]).Button, obj6);
        obj2.children = items2;
        let tmp12Result = tmp14(tmp15, obj2, value.name);
      }
      return tmp12Result;
    }
    let obj = { label, description: joined, placeholder: null, secureTextEntry: true, autoComplete: "off", autoCapitalize: "none", autoCorrect: false, value: null, onChange: null, isDisabled: null };
    let str3;
    if (value.set) {
      str3 = "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022";
    }
    obj.placeholder = str3;
    let str4 = first1[value.name];
    if (str4 == null) {
      str4 = "";
    }
    obj.value = str4;
    obj.onChange = function onChange(arg0) {
      const name = arg0;
      closure_1_12(false);
      closure_1_7((arg0) => {
        const obj = {};
        const merged = Object.assign(arg0);
        obj[name.name] = name;
        return obj;
      });
    };
    obj.isDisabled = first2;
    tmp12Result = memo(projectId(closure_2[20]).TextInput, obj, value.name);
  }
  let tmp3 = map(notifyAgent(6981)({ includeKeyboardHeight: true }).insets.bottom);
  dependencyMap = tmp3;
  let items = [closure_11];
  const stateFromStores = projectId(504).useStateFromStores(items, () => VibegrationsConnectionStore.getSettings(projectId));
  const tmp7 = first(noop.useState({}), 2);
  first = tmp7[0];
  noop = tmp7[1];
  const tmp9 = first(noop.useState({}), 2);
  const first1 = tmp9[0];
  closure_7 = tmp9[1];
  let obj = projectId(504);
  [c8, c9] = first(noop.useState({}), 2);
  const tmp12 = first(noop.useState(false), 2);
  const first2 = tmp12[0];
  closure_11 = tmp12[1];
  let tmp14 = first(noop.useState(false), 2);
  closure_12 = tmp14[1];
  let items1 = [stateFromStores];
  const memo = noop.useMemo(() => {
    let schema;
    if (stateFromStores != null) {
      schema = stateFromStores.schema;
    }
    if (schema == null) {
      schema = [];
    }
    return schema;
  }, items1);
  let items2 = [stateFromStores];
  const memo1 = noop.useMemo(() => {
    let obj;
    if (stateFromStores != null) {
      obj = stateFromStores.values;
    }
    if (obj == null) {
      obj = {};
    }
    return obj;
  }, items2);
  const items3 = [memo, stateFromStores];
  const memo2 = noop.useMemo(() => {
    let secrets;
    if (stateFromStores != null) {
      secrets = stateFromStores.secrets;
    }
    if (secrets == null) {
      secrets = [];
    }
    return secrets.map((item) => {
      const obj = {};
      const merged = Object.assign(item);
      obj.def = memo.find((key) => {
        let tmp = key.key === item.name;
        if (tmp) {
          tmp = "secret" === key.type;
        }
        return tmp;
      });
      return obj;
    });
  }, items3);
  let found = memo.filter((type) => "secret" !== type.type);
  map = new Map(memo2.map((name) => {
    const items = [name.name, name];
    return items;
  }));
  if (scopeKeys == null) {
    scopeKeys = [];
  }
  const found1 = scopeKeys.filter((item) => {
    closure_0 = item;
    let someResult = found.some((key) => key.key === closure_0);
    if (!someResult) {
      someResult = map.has(item);
    }
    return someResult;
  });
  let tmp19 = !tmp17;
  let tmp11 = first(noop.useState({}), 2);
  if (found1.length <= 0) {
    tmp19 = found.length > 0;
  }
  if (tmp19) {
    tmp19 = memo2.length > 0;
  }
  let num = 0;
  if (0 === found.length) {
    num = 1;
  }
  let someResult = found1.some((item) => map.has(item));
  [tmp21, tmp22] = first(noop.useState(num), 2);
  const tmp6Result = first(noop.useState(num), 2);
  [tmp24, c18] = first(noop.useState(0), 2);
  const items4 = [memo2.length, found.length];
  const callback = obj2.useCallback((nativeEvent) => {
    _undefined2(nativeEvent.nativeEvent.layout.width);
  }, []);
  const memo3 = obj2.useMemo(() => {
    const obj = { id: "settings", label: null, count: null, page: null };
    const intl = util.intl;
    obj.label = intl.string(_modDef3547.jczqxT);
    obj.count = found.length;
    const items = [obj, ];
    const obj2 = { id: "secrets", label: null, count: null, page: null };
    const intl2 = util.intl;
    obj2.label = intl2.string(_modDef3547.iD7xfZ);
    obj2.count = memo2.length;
    items[1] = obj2;
    return items;
  }, items4);
  const tmp6Result2 = first(noop.useState(0), 2);
  const segmentedControlState = projectId(9798).useSegmentedControlState({ items: memo3, pageWidth: tmp24, defaultIndex: num, onSetActiveIndex: tmp22 });
  if (tmp19) {
    let tmp28 = 1 === tmp21;
  } else {
    tmp28 = 0 === found.length;
  }
  const items5 = [memo, first1, memo1, first];
  memo4 = obj2.useMemo(() => {
    const values = {};
    function _loop(arg0) {
      closure_0 = arg0;
      found = memo.find((key) => key.key === closure_0);
      if (null != found) {
        let tmp3 = memo1[arg0];
        if (tmp3 == null) {
          tmp3 = "checkbox" !== found.type && "";
          const tmp4 = "checkbox" !== found.type && "";
        }
        if (closure_1 !== tmp3) {
          if (typeof str !== "string") {
            let tmp6 = str;
          } else {
            tmp6 = null;
          }
          obj[arg0] = tmp6;
        }
      }
      return 1;
    }
    const entries = Object.entries(first);
    while (tmp2 !== undefined) {
      let tmp5 = first(tmp3, 2);
      closure_1 = tmp5[1];
      let _loopResult = _loop(tmp5[0]);
      continue;
    }
    const obj2 = {};
    const entries1 = Object.entries(first1);
    tmp2 = entries[Symbol.iterator]();
    while (tmp8 !== undefined) {
      let tmp11 = first(tmp9, 2);
      [tmp12, str] = tmp11;
      let str2 = str;
      if ("" !== str.trim()) {
        obj2[tmp12] = str2.trim();
      }
      continue;
    }
    if (Object.keys(values).length > 0) {
      const obj3 = { values };
      let obj4 = obj3;
    } else {
      obj4 = {};
    }
    const merged = Object.assign(obj4);
    if (Object.keys(obj2).length > 0) {
      const obj6 = { secrets: obj2 };
      let obj7 = obj6;
    } else {
      obj7 = {};
    }
    const merged1 = Object.assign(obj7);
    return {};
  }, items5);
  closure_20 = tmp30;
  const items6 = [null != memo4.values || null != memo4.secrets, notifyAgent, projectId, first2, memo4];
  const callback1 = obj2.useCallback(stateFromStores(function*(arg0, value) {
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_3 = tmp4;
            dependencyMap = tmp8;
            let rebuildRequired;
            let project2;
            if (closure_20) {
              if (!first2) {
                closure_11(true);
                project(false);
                c5 = 2;
                c6 = 3;
                c7 = 1;
                const obj4 = { value: closure_1_10(projectId, memo4), done: false };
                return obj4;
              }
            }
            c7 = 3;
          }
        } else if (1 !== tmp8) {
          if (2 === tmp8) {
            c5 = 1;
            closure_131_12(true);
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            closure_131_11(false);
            c7 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            rebuildRequired = value.rebuildRequired;
            if (!closure_131_1) {
              if (!c7.hasPendingSettingsRequest(closure_131_0)) {
                if (rebuildRequired) {
                  _undefined(closure_131_0);
                } else {
                  project2 = project.getProject(closure_131_0);
                  let application_id;
                  if (project2 != null) {
                    application_id = project2.application_id;
                  }
                  let _null = application_id;
                  if (application_id == null) {
                    _null = null;
                  }
                  _null2(13258)(_null);
                  let prop;
                  const tmp19 = _null2(13258);
                  if (project2 != null) {
                    prop = project2.preview_application_id;
                  }
                  _null2 = prop;
                  if (prop == null) {
                    _null2 = null;
                  }
                  _null2(13258)(_null2);
                  const tmp27 = _null2(13258);
                }
              }
              _null2(4527).hideActionSheet(found);
              c5 = 1;
              const obj = _null2(4527);
            }
            const intl = _null(1114).intl;
            _undefined(closure_131_0, intl.string(_null2(3547).gqJFu0));
          }
          c5 = 0;
          closure_131_11(false);
        }
        c5 = 0;
        closure_131_11(false);
        throw closure_4;
      } catch (tmp69) {
        closure_4 = tmp69;
        if (tmp5 === c5) {
          c7 = tmp3;
          throw tmp69;
        } else if (tmp2 === tmp71) {
          c6 = tmp2;
        } else {
          c6 = tmp;
        }
      }
    }
  }), items6);
  let obj3 = { startExpanded: true, header: null, children: null };
  let obj4 = { title: null };
  let intl = tmp4(1114).intl;
  obj4.title = intl.string(notifyAgent(3547).gTMvzD);
  obj3.header = memo(projectId(7149).BottomSheetTitleHeader, obj4);
  let obj5 = { style: tmp3.container, children: null };
  let tmp32Result = null;
  if (null != note) {
    tmp32Result = null;
    if ("" !== note) {
      let obj6 = { variant: "text-sm/normal", color: "text-default", children: note };
      tmp32Result = tmp32(tmp4(4556).Text, obj6);
    }
  }
  const items7 = [tmp32Result, , , , ];
  let tmp32Result5 = null;
  if (0 === found.length) {
    tmp32Result5 = null;
    if (0 === memo2.length) {
      let obj7 = { variant: "text-sm/normal", color: "text-muted", children: null };
      let intl2 = tmp4(1114).intl;
      obj7.children = intl2.string(tmp(3547).URnN4B);
      tmp32Result5 = tmp32(tmp4(4556).Text, obj7);
    }
  }
  items7[1] = tmp32Result5;
  if (found1.length > 0) {
    const obj8 = { style: tmp3.section, children: null };
    let tmp32Result6 = null;
    if (someResult) {
      const obj9 = { variant: "text-xs/normal", color: "text-muted", children: null };
      const intl4 = tmp4(1114).intl;
      obj9.children = intl4.string(tmp(3547)["Hl+eu7"]);
      tmp32Result6 = tmp32(tmp4(4556).Text, obj9);
    }
    const items8 = [
      tmp32Result6,
      found1.map(function renderScoped(item) {
          closure_0 = item;
          value = map.get(item);
          if (null != value) {
            return renderSecret(value);
          } else {
            found = found.find((key) => key.key === closure_0);
            let tmp4 = null;
            if (null != found) {
              tmp4 = renderValueSetting(found);
            }
            return tmp4;
          }
        })
    ];
    obj8.children = items8;
    let tmp33Result = tmp33(tmp34, obj8);
  } else {
    let tmp32Result7 = null;
    if (tmp19) {
      const obj10 = { onLayout: callback, children: null };
      const obj11 = { state: segmentedControlState };
      obj10.children = tmp32(tmp4(9799).SegmentedControl, obj11);
      tmp32Result7 = tmp32(tmp34, obj10);
    }
    const items9 = [tmp32Result7, ];
    const obj12 = { style: tmp3.section, children: null };
    if (tmp28) {
      const obj13 = { variant: "text-xs/normal", color: "text-muted", children: null };
      let intl3 = tmp4(1114).intl;
      obj13.children = intl3.string(tmp(3547)["Hl+eu7"]);
      const items10 = [tmp32(tmp4(4556).Text, obj13), memo2.map(renderSecret)];
      obj12.children = items10;
      let tmp33Result2 = tmp33(tmp34, obj12);
    } else {
      obj12.children = found.map(renderValueSetting);
      tmp33Result2 = tmp32(tmp34, obj12);
    }
    const obj14 = { children: null };
    items9[1] = tmp33Result2;
    obj14.children = items9;
    tmp33Result = tmp33(memo2, obj14);
  }
  items7[2] = tmp33Result;
  let tmp32Result8 = null;
  if (tmp14[0]) {
    const obj15 = { variant: "text-xs/normal", color: "text-feedback-critical", children: null };
    const intl5 = tmp4(1114).intl;
    obj15.children = intl5.string(tmp(3547).n02OEo);
    tmp32Result8 = tmp32(tmp4(4556).Text, obj15);
  }
  items7[3] = tmp32Result8;
  const obj16 = { text: null, variant: "primary", loading: null, disabled: null, onPress: null };
  const intl6 = tmp4(1114).intl;
  obj16.text = intl6.string(notifyAgent(3547).Tuz9vw);
  obj16.loading = first2;
  obj16.disabled = !(null != memo4.values || null != memo4.secrets);
  obj16.onPress = callback1;
  items7[4] = memo(projectId(4975).Button, obj16);
  obj5.children = items7;
  obj3.children = memo1(first1, obj5);
  return memo(projectId(7198).ActionSheet, obj3);
};
export const VIBEGRATIONS_SETTINGS_SHEET_KEY = "VibegrationsSettingsSheet";
