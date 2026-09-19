// Module ID: 16604
// Function ID: 16605
// Name: FavoritesGuildChannels
// Dependencies: [19, 16535, 21, 7289, 5193, 16605, 16596, 16606, 16384, 16468, 16534, 16611, 16436, 2]
// Exports: default

// Module 16604 (FavoritesGuildChannels)
import useFontScale from "useFontScale" /* 5193 */;
import useScaledRowHeightDefault from "useScaledRowHeight" /* 7289 */;
import FavoritesGuildChannelList from "FavoritesGuildChannelList" /* 16605 */;
import noop from "module_19" /* 19 */;

const ChannelListPanelBackdropDefault = tmp2(16384);
const ChannelListStickyHeaderDefault = tmp2(16468);
const FavoritesGuildSuggestedChannelsDefault = tmp2(16534);
const FavoritesGuildSuggestionsLoaderDefault = tmp2(16606);
const FavoritesGuildSidebarHeaderDefault = tmp2(16611);
require = fn;
let closure_3 = fn(16535).useFavoritesGuildSuggestionCount;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty, Fragment: metroRequire } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/native/FavoritesGuildChannels.tsx");

export default function FavoritesGuildChannels(arg0) {
  const tmp = closure_3();
  let tmp2 = importDefault;
  let obj = dependencyMap;
  const tmp3 = useScaledRowHeightDefault();
  const fontScale = useFontScale.useFontScale();
  const favoritesGuildChannelList = FavoritesGuildChannelList.useFavoritesGuildChannelList({ withSuggestionsNotice: tmp > 0 });
  ({ guildChannels, shouldShowEmptyState, hasNoChannels } = favoritesGuildChannelList);
  const obj4 = { withSuggestionsNotice: tmp > 0 };
  if (!obj5.useShouldRenderChannelList()) {
    return null;
  } else {
    let tmp2Result2 = arg0;
    const items = [React4(FavoritesGuildSuggestionsLoaderDefault, {}), ];
    if (hasNoChannels) {
      const obj6 = { style: null, contentInset: null, children: null };
      ({ style: obj8.style, contentInset: obj8.contentInset } = tmp2Result2);
      const obj7 = { guild: tmp2Result2.guild, showExtraButtons: false, canOpenGuildActionSheet: false };
      const items1 = [tmp10(ChannelListStickyHeaderDefault, obj7), , ];
      tmp2Result2 = FavoritesGuildSuggestedChannelsDefault;
      items1[1] = tmp10(tmp2Result2, {});
      let tmp10Result = null;
      if (shouldShowEmptyState) {
        tmp2 = FavoritesGuildSidebarHeaderDefault;
        obj = {};
        tmp10Result = tmp10(tmp2, obj);
      }
      items1[2] = tmp10Result;
      obj6.children = items1;
      let tmp10Result1 = tmp8(ChannelListPanelBackdropDefault, obj6);
      const tmp2Result = ChannelListPanelBackdropDefault;
    } else {
      const obj9 = {};
      const merged = Object.assign(tmp2Result2);
      obj9.guildChannels = guildChannels;
      obj9.guildChannelsVersion = 0;
      obj9.favoritesSuggestionsNoticeHeight = tmp4(16534).getFavoritesSuggestionsNoticeHeight(fontScale, tmp3, tmp);
      tmp10Result1 = tmp10(tmp4(16436).ChannelList, obj9);
      const tmp4Result = tmp4(16534);
    }
    const obj10 = { children: null };
    items[1] = tmp10Result1;
    obj10.children = items;
    hasOwnProperty(timestampProducer, obj10);
  }
};
