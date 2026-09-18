// Module ID: 16292
// Function ID: 16293
// Name: GuildsBarFolderSettingsModal
// Dependencies: [32, 19, 17, 5438, 16293, 21, 4560, 9364, 6981, 4527, 16294, 1896, 576, 4973, 6606, 1114, 5687, 5605, 1091, 14600, 5624, 504, 16291, 7000, 2]
// Exports: default

// Module 16292 (GuildsBarFolderSettingsModal)
import util from "util" /* 1114 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import NavigatorHeader from "NavigatorHeader" /* 5624 */;
import UserSettingsActionCreators from "UserSettingsActionCreators" /* 9364 */;
import GuildsBarFolderSettingsModalActionCreators from "GuildsBarFolderSettingsModalActionCreators" /* 16291 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import SortedGuildStore from "SortedGuildStore" /* 5438 */;

require = fn;
function GuildFolderSettingsScene(color) {
  color = color.color;
  const onColorChange = color.onColorChange;
  ({ name, onNameChange } = color);
  const tmp = closure_11();
  const items = [color, onColorChange];
  const obj = { style: tmp.scrollView, keyboardShouldPersistTaps: "always", contentInset: { top: 0 }, automaticallyAdjustContentInsets: false, contentContainerStyle: null, children: null };
  const obj2 = { padding: null, paddingBottom: null };
  const callback = noop.useCallback(() => {
    hasOwnProperty.dismiss();
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(16294, dependencyMap.paths), "RoleColorPicker", { color, onSelect: onColorChange });
  }, items);
  obj2.padding = onColorChange(576).space.PX_16;
  obj2.paddingBottom = 38 + onColorChange(6981)().insets.bottom;
  obj.contentContainerStyle = obj2;
  const obj3 = { spacing: onColorChange(576).space.PX_16, children: null };
  const obj4 = { label: null, placeholder: null, value: null, onChange: null, maxLength: 32, autoFocus: true, isClearable: true };
  const intl = color(1114).intl;
  obj4.label = intl.string(color(1114).t.tGRbjA);
  const intl2 = color(1114).intl;
  obj4.placeholder = intl2.string(color(1114).t.xV9hVh);
  obj4.value = name;
  obj4.onChange = onNameChange;
  const items1 = [closure_9(color(6606).TextInput, obj4), ];
  const obj5 = { hasIcons: false, children: null };
  const obj6 = { label: null, subLabel: null, onPress: null, arrow: true, trailing: null };
  const intl3 = color(1114).intl;
  obj6.label = intl3.string(color(1114).t.xpurRF);
  obj6.subLabel = color(1091).int2hex(color);
  obj6.onPress = callback;
  obj6.trailing = closure_9(onColorChange(14600), { color, style: tmp.colorBlock });
  obj5.children = closure_9(color(5605).TableRow, obj6);
  items1[1] = closure_9(color(5687).TableRowGroup, obj5);
  obj3.children = items1;
  obj.children = closure_10(color(4973).Stack, obj3);
  return closure_9(closure_6, obj);
}
get_ActivityIndicator = fn(17);
({ Keyboard: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const DEFAULT_FOLDER_COLOR = fn(16293).DEFAULT_FOLDER_COLOR;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4560);
let closure_11 = createStyles.createStyles({ scrollView: { flex: 1 }, colorBlock: { marginHorizontal: 0, marginVertical: 0, minWidth: 24, height: 24, borderRadius: 3 } });
let c13 = "Folder Settings";
const size = fn(2);
let result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarFolderSettingsModal.tsx");

export default function GuildFolderSettingsModal(folderId) {
  folderId = folderId.folderId;
  let first1;
  noop = undefined;
  let callback1;
  const items = [callback1];
  const items1 = [folderId];
  const stateFromStoresObject = folderId(504).useStateFromStoresObject(items, () => {
    const guildFolderById = SortedGuildStore.getGuildFolderById(folderId);
    let folderName;
    if (guildFolderById != null) {
      folderName = guildFolderById.folderName;
    }
    let str = "";
    if (null != folderName) {
      str = guildFolderById.folderName;
    }
    const obj = { initialFolderName: str, initialFolderColor: null };
    let folderColor;
    if (guildFolderById != null) {
      folderColor = guildFolderById.folderColor;
    }
    obj.initialFolderColor = null != folderColor ? guildFolderById.folderColor : DEFAULT_FOLDER_COLOR;
    return obj;
  }, items1);
  ({ initialFolderName, initialFolderColor } = stateFromStoresObject);
  const tmp4 = first1(noop.useState(initialFolderName), 2);
  const name = tmp4[0];
  dependencyMap = tmp4[1];
  const tmp6 = first1(noop.useState(initialFolderColor), 2);
  first1 = tmp6[0];
  noop = tmp6[1];
  closure_5 = tmp8;
  const items2 = [folderId, name, first1];
  const callback = obj2.useCallback(() => {
    closure_0 = folderId;
    const folderName = first;
    const folderColor = first1;
    const guildFolders = SortedGuildStore.getGuildFolders();
    UserSettingsActionCreators.saveGuildFolders(guildFolders.map((folderId) => {
      let tmp = folderId;
      if (folderId.folderId === closure_0) {
        const obj = {};
        const merged = Object.assign(folderId);
        obj.folderName = folderName;
        obj.folderColor = folderColor;
        tmp = obj;
      }
      return tmp;
    }));
    const result = GuildsBarFolderSettingsModalActionCreators.hideGuildsBarFolderModal();
  }, items2);
  callback1 = obj2.useCallback(() => {
    const result = folderId(closure_2[22]).hideGuildsBarFolderModal();
  }, []);
  const items3 = [first1, name, name !== initialFolderName || first1 !== initialFolderColor, callback, callback1];
  const memo = obj2.useMemo(() => {
    let obj = {
      name,
      onNameChange(arg0) {
        return closure_1_2(arg0);
      },
      color: first1,
      onColorChange(dependencyMap) {
        return closure_1_4(dependencyMap);
      }
    };
    const obj2 = {
      render() {
        obj = {};
        const merged = Object.assign(obj);
        return closure_2_9(GuildFolderSettingsScene, obj);
      },
      title: null,
      headerLeft: null,
      headerRight: null
    };
    const intl = util.intl;
    obj2.title = intl.string(util.t.Dx7im5);
    obj2.headerLeft = NavigatorHeader.getHeaderCloseButton(callback1);
    if (closure_5) {
      const intl2 = tmp3(1114).intl;
      let fn = tmp3(5624).getHeaderTextButton(intl2.string(tmp3(1114).t["R3BPH+"]), callback);
      const tmp3Result = tmp3(5624);
    } else {
      fn = () => null;
    }
    obj2.headerRight = fn;
    return { [c13]: obj2 };
  }, items3);
  return closure_9(folderId(7000).Navigator, { screens: memo, initialRouteName });
};
