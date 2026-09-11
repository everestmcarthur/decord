// Module ID: 16208
// Function ID: 16209
// Name: FavoritesGuildActionSheet
// Dependencies: [19, 1960, 21, 16209, 16210, 16211, 10313, 504, 7270, 7222, 1114, 7272, 5124, 12244, 16212, 5731, 7039, 4564, 2]
// Exports: default

// Module 16208 (FavoritesGuildActionSheet)
import useFavoritesGuildHideActionDefault from "useFavoritesGuildHideAction" /* 16209 */;
import useFavoritesGuildResetActionDefault from "useFavoritesGuildResetAction" /* 16210 */;
import useFavoritesGuildAutoAddedThreadsActionDefault from "useFavoritesGuildAutoAddedThreadsAction" /* 16211 */;
import openFavoritesGuildChannelSortModalDefault from "openFavoritesGuildChannelSortModal" /* 16212 */;
import noop from "module_19" /* 19 */;
import FavoriteStore from "FavoriteStore" /* 1960 */;

const require = fn;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/native/FavoritesGuildActionSheet.tsx");

export default function FavoritesGuildActionSheet(onClose) {
  onClose = onClose.onClose;
  const tmp2 = useFavoritesGuildHideActionDefault();
  importDefault = tmp2;
  const tmp3 = useFavoritesGuildResetActionDefault();
  dependencyMap = tmp3;
  const tmp4 = useFavoritesGuildAutoAddedThreadsActionDefault();
  const obj = onClose(10313);
  const items = [FavoriteStore];
  const stateFromStores = onClose(504).useStateFromStores(items, () => FavoriteStore.hasStoredFavorites());
  const obj3 = { header: null, children: null };
  const obj4 = { title: null };
  const intl = onClose(1114).intl;
  obj4.title = intl.string(onClose(1114).t.wMWyci);
  obj3.header = closure_4(onClose(7222).BottomSheetTitleHeader, obj4);
  let tmp8Result = null;
  if (tmp4.isAvailable) {
    const obj5 = { hasIcons: true, children: null };
    const obj7 = { label: null, subLabel: null, icon: null, value: null, onValueChange: null };
    ({ label: obj6.label, subLabel: obj6.subLabel } = tmp4);
    const obj8 = { IconComponent: tmp5(5124).ThreadIcon };
    obj7.icon = tmp8(tmp5(7272).ActionSheetRow.Icon, obj8);
    ({ isEnabled: obj6.value, toggle: obj6.onValueChange } = tmp4);
    obj5.children = tmp8(tmp5(7272).ActionSheetSwitchRow, obj7);
    tmp8Result = tmp8(tmp5(7272).ActionSheetRow.Group, obj5);
  }
  const items1 = [tmp8Result, , ];
  let tmp8Result3 = null;
  if (obj.useFavoritesAccess("FavoritesGuildActionSheet").hasAccess) {
    tmp8Result3 = null;
    if (stateFromStores) {
      const obj9 = { hasIcons: true, children: null };
      const obj10 = { label: null, icon: null, onPress: null };
      const intl2 = tmp5(1114).intl;
      obj10.label = intl2.string(tmp5(1114).t["0dOFq+"]);
      const obj11 = { IconComponent: tmp5(12244).ArrowsUpDownIcon };
      obj10.icon = tmp8(tmp5(7272).ActionSheetRow.Icon, obj11);
      obj10.onPress = function onPress() {
        onClose();
        openFavoritesGuildChannelSortModalDefault();
      };
      obj9.children = tmp8(tmp5(7272).ActionSheetRow, obj10);
      tmp8Result3 = tmp8(tmp5(7272).ActionSheetRow.Group, obj9);
    }
  }
  items1[1] = tmp8Result3;
  const obj13 = { label: tmp2.label, subLabel: tmp2.subLabel, icon: null, variant: null, onPress: null };
  if (tmp2.isPreview) {
    let EyeSlashIcon = tmp5(5731).XSmallIcon;
  } else {
    EyeSlashIcon = tmp5(7039).EyeSlashIcon;
  }
  obj13.icon = closure_4(onClose(7272).ActionSheetRow.Icon, { IconComponent: EyeSlashIcon });
  let str = "danger";
  if (tmp2.isPreview) {
    str = "default";
  }
  obj13.variant = str;
  obj13.onPress = function onPress() {
    onClose();
    closure_1.perform();
  };
  const items2 = [closure_4(onClose(7272).ActionSheetRow, obj13), ];
  let tmp8Result4 = null;
  if (tmp3.isAvailable) {
    const obj24 = { label: null, subLabel: null, icon: null, variant: "danger", onPress: null };
    ({ label: obj12.label, subLabel: obj12.subLabel } = tmp3);
    const obj25 = { IconComponent: tmp5(4564).TrashIcon };
    obj24.icon = tmp8(tmp5(7272).ActionSheetRow.Icon, obj25);
    obj24.onPress = function onPress() {
      onClose();
      closure_2.perform();
    };
    tmp8Result4 = tmp8(tmp5(7272).ActionSheetRow, obj24);
  }
  items2[1] = tmp8Result4;
  items1[2] = closure_5(onClose(7272).ActionSheetRow.Group, { hasIcons: true, children: items2 });
  obj3.children = items1;
  return closure_5(onClose(7270).ActionSheet, obj3);
};
