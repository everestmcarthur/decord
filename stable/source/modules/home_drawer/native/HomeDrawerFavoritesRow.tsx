// Module ID: 16315
// Function ID: 16316
// Name: HomeDrawerFavoritesRow
// Dependencies: [19, 21, 16308, 4556, 1114, 2]
// Exports: HomeDrawerFavoritesRowExpandedChildren

// Module 16315 (HomeDrawerFavoritesRow)
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4556 */;
import HomeDrawerShared from "HomeDrawerShared" /* 16308 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/home_drawer/native/HomeDrawerFavoritesRow.tsx");

export const HomeDrawerFavoritesRowExpandedChildren = function HomeDrawerFavoritesRowExpandedChildren() {
  const obj = { title: null, subtitle: null };
  const obj2 = { variant: "text-md/medium", color: "text-default", lineClamp: 1, children: null };
  const intl = util.intl;
  obj2.children = intl.string(util.t.wMWyci);
  obj.title = jsx(Text_Text.Text, { variant: "text-md/medium", color: "text-default", lineClamp: 1, children: null });
  return jsx(HomeDrawerShared.HomeDrawerSharedItem, { title: null, subtitle: null });
};
