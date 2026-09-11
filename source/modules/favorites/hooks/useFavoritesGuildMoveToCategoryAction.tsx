// Module ID: 11093
// Function ID: 11094
// Name: useFavoritesGuildMoveToCategoryAction
// Dependencies: [19, 10315, 11094, 10314, 1114, 2]
// Exports: default

// Module 11093 (useFavoritesGuildMoveToCategoryAction)
import FavoritesActionCreators from "FavoritesActionCreators" /* 10314 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildMoveToCategoryAction.tsx");

export default function useFavoritesGuildMoveToCategoryAction(id) {
  const isFavoritesGuildSelected = favorite(10315).useIsFavoritesGuildSelected();
  let obj = favorite(10315);
  favorite = favorite(10315).useFavorite(id.id);
  const obj2 = favorite(10315);
  id = undefined;
  if (favorite != null) {
    id = favorite.id;
  }
  [][0] = id;
  if (isFavoritesGuildSelected) {
    if (null != favorite) {
      const found = arr.filter((id) => {
        let tmp = null != id.id;
        if (tmp) {
          tmp = id.id !== favorite.parentId;
        }
        return tmp;
      });
      const mapped = found.map((id) => ({ id: id.id, label: id.name }));
      if (null != favorite.parentId) {
        const obj3 = { label: null, destinations: null, perform: null };
        const intl = tmp(1114).intl;
        obj3.label = intl.string(tmp(1114).t.FAplms);
        let tmp8 = mapped;
        if (tmp12) {
          const obj4 = { id: null, label: null };
          const intl2 = tmp(1114).intl;
          obj4.label = intl2.string(tmp(1114).t.GSfOoo);
          const items = [obj4];
          HermesBuiltin.arraySpread(mapped, 1);
          tmp8 = items;
        }
        obj3.destinations = tmp8;
        obj3.perform = tmp6;
        let tmp7 = obj3;
      } else {
        tmp7 = null;
      }
      return tmp7;
    }
  }
  return null;
};
