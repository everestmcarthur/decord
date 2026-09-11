// Module ID: 8965
// Function ID: 8966
// Name: GameProfileSimilarGames
// Dependencies: [19, 17, 21, 576, 4606, 8767, 8777, 8771, 1114, 4602, 8966, 1477, 8964, 8811, 2]
// Exports: default

// Module 8965 (GameProfileSimilarGames)
import nativeDefault from "native" /* 576 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1477 */;
import GameProfileActionCreatorsDefault from "GameProfileActionCreators" /* 8771 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8777 */;
import useSimilarGamesDefault from "useSimilarGames" /* 8966 */;
import noop from "module_19" /* 19 */;

require = fn;
function Spacer() {
  const obj = { style: { width: PX_12 } };
  return React5(timestampProducer, obj);
}
function ListPadding() {
  const obj = { style: { width: nativeDefault.space.PX_16 } };
  return React5(timestampProducer, obj);
}
function SimilarGameCard(game) {
  game = game.game;
  const trackAction = game.trackAction;
  const cardWidth = game.cardWidth;
  let shouldOpenGameProfile;
  const tmp = closure_13();
  const result = 1.34 * cardWidth;
  const coverURL = game.getCoverURL(Math.ceil(result));
  const size = { width: cardWidth, height: result };
  let obj = { gameId: game.id, source: game(shouldOpenGameProfile[6]).GameProfileSources.SimilarGames };
  const tmp5Result = trackAction(shouldOpenGameProfile[5])(obj);
  shouldOpenGameProfile = tmp5Result.shouldOpenGameProfile;
  const gameId = tmp5Result.gameId;
  const items = [game.id, trackAction, shouldOpenGameProfile, gameId];
  let obj2 = {
    style: null,
    onPress: gameId.useCallback(() => {
      trackAction(GameProfileAnalyticUtils.GameProfileTrackActionActions.ClickSimilarGame, game.id);
      let tmp4 = shouldOpenGameProfile;
      if (shouldOpenGameProfile) {
        tmp4 = null != gameId;
      }
      if (tmp4) {
        const obj2 = { gameId, gameProfileModalChecks: null, source: null };
        const obj3 = { shouldOpenGameProfile: true, gameId };
        obj2.gameProfileModalChecks = obj3;
        obj2.source = GameProfileAnalyticUtils.GameProfileSources.SimilarGames;
        GameProfileActionCreatorsDefault.openGameProfileModal(obj2);
      }
    }, items),
    accessibilityRole: "button",
    accessibilityLabel: null,
    children: null
  };
  const items1 = [tmp.card, { width: cardWidth }];
  obj2.style = items1;
  const intl = game(shouldOpenGameProfile[8]).intl;
  obj2.accessibilityLabel = intl.formatToPlainString(game(shouldOpenGameProfile[8]).t["8QLQB+"], { gameName: game.name });
  if (null != coverURL) {
    const obj4 = { source: null, style: null };
    const obj5 = { uri: coverURL };
    obj4.source = obj5;
    const items2 = [tmp.coverArt, size];
    obj4.style = items2;
    let tmp8Result = tmp8(closure_4, obj4);
  } else {
    const obj6 = { style: null, children: null };
    const items3 = [tmp.coverArtFallback, size];
    obj6.style = items3;
    const obj7 = { variant: "text-xs/medium", color: "text-overlay-light", lineClamp: 3, children: game.name };
    obj6.children = tmp8(game(shouldOpenGameProfile[9]).Text, obj7);
    tmp8Result = tmp8(closure_6, obj6);
  }
  obj2.children = tmp8Result;
  return closure_7(closure_5, obj2);
}
function LoadingCard(cardWidth) {
  cardWidth = cardWidth.cardWidth;
  const obj = { style: { width: cardWidth }, children: null };
  const obj2 = { style: null };
  const items = [closure_13().loadingArt, ];
  const size = { width: cardWidth, height: 1.34 * cardWidth };
  items[1] = size;
  obj2.style = items;
  obj.children = React5(timestampProducer, obj2);
  return React5(timestampProducer, obj);
}
get_ActivityIndicator = fn(17);
({ Image: closure_4, Pressable: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const PX_16 = nativeDefault.space.PX_16;
const PX_12 = nativeDefault.space.PX_12;
const data = Array.from({ length: 3 }, (arg0, arg1) => arg1);
const createStyles = fn(4606);
let obj2 = { container: { gap: nativeDefault.space.PX_8, marginHorizontal: -1 * nativeDefault.space.PX_16 }, header: null, card: null, coverArt: null, coverArtFallback: null, loadingArt: null };
let obj3 = { gap: nativeDefault.space.PX_8, marginHorizontal: -1 * nativeDefault.space.PX_16 };
obj2.header = { paddingHorizontal: nativeDefault.space.PX_16 };
let obj4 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj2.card = { gap: nativeDefault.space.PX_4 };
let obj5 = { gap: nativeDefault.space.PX_4 };
obj2.coverArt = { borderRadius: nativeDefault.radii.sm };
let obj6 = { borderRadius: nativeDefault.radii.sm };
obj2.coverArtFallback = { borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, justifyContent: "center", alignItems: "center", padding: nativeDefault.space.PX_8 };
let obj7 = { borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, justifyContent: "center", alignItems: "center", padding: nativeDefault.space.PX_8 };
obj2.loadingArt = { borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_13 = createStyles.createStyles(obj2);
let size = fn(2);
let result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileSimilarGames.tsx");

export default function GameProfileSimilarGames(trackAction) {
  trackAction = trackAction.trackAction;
  const tmp = closure_13();
  ({ similarGames, isFetching } = useSimilarGamesDefault(trackAction.gameId));
  const result = (useWindowDimensionsDefault().width - 2 * PX_16 - 2 * PX_12 - PX_12) / 3;
  importDefault = result;
  if (isFetching) {
    const obj = { style: tmp.container, children: null };
    const obj2 = { style: tmp.header, children: null };
    const obj3 = { variant: "heading-sm/semibold", color: "mobile-text-heading-primary", children: null };
    const intl = trackAction(1114).intl;
    obj3.children = intl.string(trackAction(1114).t["6rLyQB"]);
    obj2.children = closure_7(trackAction(4602).Text, obj3);
    const items = [closure_7(closure_6, obj2), ];
    const obj4 = {
      horizontal: true,
      renderScrollComponent: tmp2(8811),
      data,
      renderItem() {
          return React5(LoadingCard, { cardWidth });
        },
      showsHorizontalScrollIndicator: false,
      ItemSeparatorComponent: Spacer,
      ListHeaderComponent: ListPadding,
      ListFooterComponent: ListPadding
    };
    items[1] = closure_7(trackAction(8964).FlashList, obj4);
    obj.children = items;
    let tmp7 = closure_8(closure_6, obj);
  } else {
    tmp7 = null;
    if (0 !== similarGames.length) {
      const obj5 = { style: tmp.container, children: null };
      const obj6 = { style: tmp.header, children: null };
      const obj7 = { variant: "heading-sm/semibold", color: "mobile-text-heading-primary", children: null };
      const intl2 = trackAction(1114).intl;
      obj7.children = intl2.string(trackAction(1114).t["6rLyQB"]);
      obj6.children = closure_7(trackAction(4602).Text, obj7);
      const items1 = [closure_7(closure_6, obj6), ];
      const obj8 = {
        horizontal: true,
        renderScrollComponent: tmp2(8811),
        data: similarGames,
        renderItem(game) {
              return React5(SimilarGameCard, { game: game.item, trackAction, cardWidth });
            },
        showsHorizontalScrollIndicator: false,
        ItemSeparatorComponent: Spacer,
        ListHeaderComponent: ListPadding,
        ListFooterComponent: ListPadding,
        decelerationRate: "fast",
        snapToInterval: result + tmp5
      };
      items1[1] = closure_7(trackAction(8964).FlashList, obj8);
      obj5.children = items1;
      tmp7 = closure_8(closure_6, obj5);
    }
  }
  return tmp7;
};
