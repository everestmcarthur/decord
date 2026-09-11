// Module ID: 8856
// Function ID: 8857
// Name: GameProfileShopCarousel
// Dependencies: [19, 17, 7616, 21, 4607, 576, 8857, 8964, 8965, 563, 8779, 7615, 7256, 4603, 1114, 5027, 7283, 8966, 8813, 2]
// Exports: default

// Module 8856 (GameProfileShopCarousel)
import nativeDefault from "native" /* 576 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7256 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7615 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8779 */;
import CollectiblesShopCardV2 from "CollectiblesShopCardV2" /* 8857 */;
import noop from "module_19" /* 19 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 7616 */;

require = fn;
function HorizontalSpacing() {
  const obj = { style: { width: CollectiblesShopCardV2.COLLECTIBLES_SHOP_CARD_GAP } };
  return timestampProducer(View, obj);
}
function GameProfileShopCarouselContent(trackAction) {
  ({ collectionId, closeModal } = trackAction);
  trackAction = trackAction.trackAction;
  const tmp = closure_8();
  dependencyMap = tmp;
  const gameProfileShopCollection = closeModal(8964).useGameProfileShopCollection(collectionId);
  const obj = closeModal(8964);
  const fetchCollectiblesProducts = closeModal(8965).useFetchCollectiblesProducts(gameProfileShopCollection);
  let obj2 = closeModal(8965);
  let items = [CollectiblesCategoryStore];
  const stateFromStoresArray = closeModal(563).useStateFromStoresArray(items, () => {
    const mapped = gameProfileShopCollection.map((item) => product.getProduct(item));
    return mapped.filter((item) => null != item);
  });
  const items1 = [trackAction, closeModal];
  let tmp7 = null;
  if (0 !== stateFromStoresArray.length) {
    const obj4 = { style: tmp.container, children: null };
    const obj5 = { style: tmp.header, children: null };
    const obj6 = { variant: "heading-sm/semibold", color: "mobile-text-heading-primary", children: null };
    const intl = tmp2(1114).intl;
    obj6.children = intl.string(tmp2(1114).t["5DYPT8"]);
    const items2 = [closure_6(tmp2(4603).Text, obj6), ];
    const obj7 = { text: null, variant: "tertiary", size: "sm", icon: null, iconPosition: "end", onPress: null };
    const intl2 = tmp2(1114).intl;
    obj7.text = intl2.string(tmp2(1114).t.budhsM);
    obj7.icon = closure_6(tmp2(7283).ChevronSmallRightIcon, { size: "sm" });
    obj7.onPress = tmp6;
    items2[1] = closure_6(tmp2(5027).Button, obj7);
    obj5.children = items2;
    const items3 = [closure_7(View, obj5), ];
    const obj8 = {
      horizontal: true,
      renderScrollComponent: trackAction(8813),
      data: stateFromStoresArray,
      renderItem(item) {
          item = item.item;
          return closure_1_6(trackAction(card[6]), {
            solidBackground: true,
            cardStyle: card.card,
            product: item,
            hideWishlistButton: true,
            hidePrice: true,
            onPress() {
              trackAction(GameProfileAnalyticUtils.GameProfileTrackActionActions.DiscordCollectiblesShop);
              closeModal();
              const obj2 = { analyticsLocations: null, analyticsSource: null, initialProductSkuId: null };
              const items = [AnalyticsLocationDefault.GAME_PROFILE];
              obj2.analyticsLocations = items;
              obj2.analyticsSource = AnalyticsLocationDefault.GAME_PROFILE;
              obj2.initialProductSkuId = item.skuId;
              CollectiblesActionCreators.openCollectiblesShop(obj2);
            }
          });
        },
      showsHorizontalScrollIndicator: false,
      ItemSeparatorComponent: HorizontalSpacing,
      ListHeaderComponent: HorizontalSpacing,
      ListFooterComponent: HorizontalSpacing,
      decelerationRate: "fast",
      snapToInterval: tmp2(8857).COLLECTIBLES_SHOP_CARD_WIDTH + tmp2(8857).COLLECTIBLES_SHOP_CARD_GAP
    };
    items3[1] = closure_6(tmp2(8966).FlashList, obj8, collectionId);
    obj4.children = items3;
    tmp7 = closure_7(View, obj4);
  }
  return tmp7;
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4607);
let obj2 = { container: { gap: nativeDefault.space.PX_8, marginHorizontal: -1 * nativeDefault.space.PX_16 }, header: null, card: null };
const obj3 = { gap: nativeDefault.space.PX_8, marginHorizontal: -1 * nativeDefault.space.PX_16 };
obj2.header = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: nativeDefault.space.PX_8, marginHorizontal: nativeDefault.space.PX_16 };
let obj4 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: nativeDefault.space.PX_8, marginHorizontal: nativeDefault.space.PX_16 };
obj2.card = { borderRadius: nativeDefault.radii.lg };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileShopCarousel.tsx");

export default function GameProfileShopCarousel(game) {
  game = game.game;
  let first;
  ({ closeModal, trackAction } = game);
  if (game != null) {
    const shopCollectionIds = game.shopCollectionIds;
    if (shopCollectionIds != null) {
      first = shopCollectionIds[0];
    }
  }
  let tmp2 = null;
  if (null != first) {
    const obj = { collectionId: first, closeModal, trackAction };
    tmp2 = timestampProducer(GameProfileShopCarouselContent, obj);
  }
  return tmp2;
};
