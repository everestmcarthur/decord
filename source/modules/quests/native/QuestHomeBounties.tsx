// Module ID: 15097
// Function ID: 15098
// Name: QuestHomeBounties
// Dependencies: [32, 19, 17, 7716, 5458, 1954, 21, 576, 15098, 4574, 11805, 1114, 5706, 4570, 15095, 1943, 7402, 573, 15099, 4542, 7732, 7742, 5461, 15031, 7052, 11224, 11225, 11229, 5465, 15033, 15108, 11809, 8906, 11515, 504, 15109, 15114, 2]

// Module 15097 (QuestHomeBounties)
import DispatcherDefault from "Dispatcher" /* 573 */;
import nativeDefault from "native" /* 576 */;
import dismissible_content from "dismissible_content" /* 1943 */;
import HapticUtils from "HapticUtils" /* 4542 */;
import Text_Text from "Text/Text" /* 4570 */;
import QuestTypes from "QuestTypes" /* 5461 */;
import native from "native" /* 5706 */;
import AnalyticsActions from "AnalyticsActions" /* 7732 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7742 */;
import AdAnalyticsInterfaceExperiment from "AdAnalyticsInterfaceExperiment" /* 11224 */;
import AnalyticsHooks from "AnalyticsHooks" /* 11805 */;
import BountiesModalActionCreatorsDefault from "BountiesModalActionCreators" /* 15031 */;
import BountiesModalTypes from "BountiesModalTypes" /* 15033 */;
import openBountiesNuxPromoSheetDefault from "openBountiesNuxPromoSheet" /* 15095 */;
import BountyCard from "BountyCard" /* 15098 */;
import BountiesCtaHeaderDefault from "BountiesCtaHeader" /* 15109 */;
import QuestHomeOrbShopCarouselDefault from "QuestHomeOrbShopCarousel" /* 15114 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import BountyStore from "BountyStore" /* 7716 */;

const BountyCardDefault = BountyCard;

require = fn;
function EmptyState(reason) {
  reason = reason.reason;
  const tmp = closure_14();
  const bountyCarouselEmptyStateAnalytics = AnalyticsHooks.useBountyCarouselEmptyStateAnalytics(reason);
  if (reason === constants.COMPLETED) {
    const intl2 = tmp2(1114).intl;
    let stringResult = intl2.string(tmp2(1114).t.O2hRaZ);
  } else {
    const intl = tmp2(1114).intl;
    stringResult = intl.string(tmp2(1114).t.TKuW8z);
  }
  if (reason === constants.COMPLETED) {
    let ReqPds = tmp2(1114).t["D/790X"];
  } else {
    ReqPds = tmp2(1114).t.ReqPds;
  }
  const obj2 = { style: tmp.emptyState, children: null };
  const items = [React7(native.BountiesPosterIllocon, { size: 32 }), ];
  const obj3 = { style: tmp.emptyStateText, children: null };
  const items1 = [React7(Text_Text.Text, { variant: "text-sm/semibold", color: "text-default", children: stringResult }), ];
  const obj4 = { variant: "text-xs/medium", color: "text-muted", children: null };
  const intl3 = tmp2(1114).intl;
  obj4.children = intl3.format(ReqPds, {
    onClickLearnMore() {
      openBountiesNuxPromoSheetDefault();
    }
  });
  items1[1] = React7(Text_Text.Text, obj4);
  obj3.children = items1;
  items[1] = closure_1_10(View, obj3);
  obj2.children = items;
  return closure_1_10(View, obj2);
}
function ItemSeparator() {
  const obj = { style: { width: PX_16 } };
  return React7(View, obj);
}
function keyExtractor(id) {
  return id.id;
}
function QuestHomeBountiesCarousel(bounties) {
  bounties = bounties.bounties;
  first = undefined;
  _slicedToArray = undefined;
  first1 = undefined;
  closure_5 = undefined;
  first2 = undefined;
  closure_7 = undefined;
  closure_14 = undefined;
  let tmp = closure_14();
  first1.useRef(null);
  [first, _slicedToArray] = first1.useState(0);
  [first1, closure_5] = first1.useState(0);
  [first2, closure_7] = first1.useState(false);
  closure_8 = first1.useRef(null);
  closure_9 = first1.useRef(false);
  const visibilityRef = first1.useRef({ parent: { scrollX: 0 }, children: {}, axis: "horizontal" });
  const callback = first1.useCallback((arg0) => {
    if (null != arg0) {
      const _Object2 = Object;
      if (Object.hasOwn(visibilityRef.current.children, arg0)) {
        if (tmp8.current.children[arg0] != null) {
          const calculateVisibility2 = tmp9.calculateVisibility;
          if (calculateVisibility2 != null) {
            calculateVisibility2();
          }
        }
      }
      tmp8 = visibilityRef;
    } else {
      const _Object = Object;
      const values = Object.values(visibilityRef.current.children);
      for (const item10013 of values) {
        if (item10013 != null) {
          let calculateVisibility = item10013.calculateVisibility;
          if (calculateVisibility != null) {
            let calculateVisibilityResult = calculateVisibility();
          }
        }
        continue;
      }
    }
  }, []);
  const items = [callback];
  const items1 = [bounties.length];
  const callback1 = first1.useCallback((nativeEvent) => {
    closure_3(nativeEvent.nativeEvent.layout.width);
    visibilityRef.current.parent.layout = nativeEvent.nativeEvent.layout;
    callback();
  }, items);
  const items2 = [first];
  const memo = first1.useMemo(() => {
    const array = new Array(bounties.length);
    return array.fill(0).map((item, index) => index * ref2);
  }, items1);
  const callback2 = first1.useCallback(() => {
    const obj = { style: { width: Math.max(0, first - BountyCard.CARD_WIDTH - PX_16) } };
    return React7(View, obj);
  }, items2);
  const ref = first1.useRef(first1);
  first1.useRef(null);
  const items3 = [callback];
  const callback3 = first1.useCallback((nativeEvent) => {
    const rounded = Math.round(nativeEvent.nativeEvent.contentOffset.x / ref2);
    if (rounded !== ref.current) {
      ref.current = rounded;
      const _Date = Date;
      const timestamp = Date.now();
      let tmp5 = null == ref2.current;
      if (!tmp5) {
        tmp5 = timestamp - tmp3.current >= 50;
      }
      if (tmp5) {
        tmp3.current = timestamp;
        const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
      }
    }
    visibilityRef.current.parent.scrollX = nativeEvent.nativeEvent.contentOffset.x;
    callback();
  }, items3);
  closure_14 = first1.useRef(false);
  first1.useRef(null);
  const items4 = [first1];
  const callback4 = first1.useCallback(() => {
    closure_14.current = false;
    if (null != ref3.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(tmp.current);
      tmp.current = null;
    }
  }, []);
  const callback5 = first1.useCallback((nativeEvent) => {
    const rounded = Math.round(nativeEvent.nativeEvent.contentOffset.x / closure_13);
    closure_14.current = false;
    if (rounded !== first1) {
      let QUEST_HOME_MOBILE_CAROUSEL = dependencyMap;
      const BountyScrollingType = AnalyticsTypes.BountyScrollingType;
      let result = { scrollingType: tmp2 ? BountyScrollingType.AUTO : BountyScrollingType.MANUAL, scrollingDirection: null, carouselPosition: null, questContent: null };
      if (rounded > tmp3) {
        let LEFT = tmp6(7742).HorizontalScrollingDirection.RIGHT;
      } else {
        LEFT = tmp6(7742).HorizontalScrollingDirection.LEFT;
      }
      result.scrollingDirection = LEFT;
      result.carouselPosition = rounded;
      QUEST_HOME_MOBILE_CAROUSEL = tmp6(5461).QuestContent.QUEST_HOME_MOBILE_CAROUSEL;
      result.questContent = QUEST_HOME_MOBILE_CAROUSEL;
      result = AnalyticsActions.trackBountyCarouselScroll(result);
      closure_5(rounded);
    }
  }, items4);
  const callback6 = first1.useCallback((arg0) => {
    closure_0 = arg0;
    if (null != ref3.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(tmp.current);
      tmp.current = null;
    }
    ref3.current = setTimeout(() => {
      closure_14.current = true;
      const current = ref.current;
      if (current != null) {
        const obj = { offset: closure_0 * closure_13, animated: true };
        current.scrollToOffset(obj);
      }
      closure_15.current = null;
    }, 350);
  }, []);
  const effect = first1.useEffect(() => () => {
    if (null != ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(tmp.current);
      tmp.current = null;
    }
  }, []);
  const items5 = [bounties, first1, callback6];
  const effect1 = first1.useEffect(() => {
    function handleModalClose(key) {
      if (key.key === handleModalClose(first[23]).BOUNTIES_MODAL_KEY) {
        closure_7(false);
        const current = ref.current;
        ref.current = null;
        if (null != current) {
          let isBountyCompletedResult = bountyCompleted.isBountyCompleted(current);
          if (isBountyCompletedResult) {
            isBountyCompletedResult = !ref2.current;
          }
          ref2.current = false;
          const findIndexResult = current.findIndex((id) => id.id === current);
          closure_1 = findIndexResult;
          if (-1 !== findIndexResult) {
            const findIndexResult1 = obj.findIndex((id, index) => {
              let tmp = index > first1;
              if (tmp) {
                tmp = index > findIndexResult;
              }
              if (tmp) {
                tmp = !first2.isBountyCompleted(id.id);
              }
              return tmp;
            });
            if (isBountyCompletedResult) {
              isBountyCompletedResult = -1 !== findIndexResult1;
            }
            if (isBountyCompletedResult) {
              isBountyCompletedResult = findIndexResult1 <= closure_4 + 3;
            }
            if (isBountyCompletedResult) {
              handleModalClose(first[24]).runAfterInteractions(() => {
                callback6(findIndexResult1);
              });
              const tmpResult = handleModalClose(first[24]);
            }
          }
          obj = current;
        }
      }
    }
    const subscription = ref(first[17]).subscribe("MODAL_POP", handleModalClose);
    return () => {
      DispatcherDefault.unsubscribe("MODAL_POP", handleModalClose);
    };
  }, items5);
  const callback7 = first1.useCallback((bountyId, questContentPosition) => {
    if (obj.shouldMigrateToAdAnalyticsInterface(AdAnalyticsInterfaceExperiment.AdAnalyticsInterfaceExperimentStep.STEP_2_CLICKED_INTERNAL, "quest_home_bounties")) {
      const obj2 = { type: tmp(11229).AdUserActionType.CLICK_INTERNAL, adCreativeType: tmp(5465).AdCreativeType.BOUNTY, adCreativeId: bountyId.id, questContentCTA: tmp(7742).QuestContentCTA.START_BOUNTY, surfaceId: tmp(5461).QuestContent.QUEST_HOME_MOBILE_CAROUSEL, sourceQuestContent: tmp(5461).QuestContent.QUEST_HOME_MOBILE_CAROUSEL, questContentPosition };
      tmp(11225).captureAdUserAction(obj2);
      const tmpResult = tmp(11225);
    } else {
      const obj3 = { adContentId: bountyId.id, adCreativeType: tmp(5465).AdCreativeType.BOUNTY, questContent: tmp(5461).QuestContent.QUEST_HOME_MOBILE_CAROUSEL, questContentCTA: tmp(7742).QuestContentCTA.START_BOUNTY, sourceQuestContent: tmp(5461).QuestContent.QUEST_HOME_MOBILE_CAROUSEL, questContentPosition };
      const result = tmp(7732).trackAdContentClicked(obj3);
      const tmpResult2 = tmp(7732);
    }
    closure_8.current = bountyId.id;
    closure_9.current = BountyStore.isBountyCompleted(bountyId.id);
    closure_7(true);
    obj = AdAnalyticsInterfaceExperiment;
    const obj6 = BountiesModalActionCreatorsDefault;
    obj6.showModal({ bountyId: bountyId.id, sourceQuestContent: QuestTypes.QuestContent.QUEST_HOME_MOBILE_CAROUSEL, variant: BountiesModalTypes.BountiesModalVariant.SINGLE_VIDEO });
  }, []);
  const tmp20 = ref(first[30])();
  const isInView = tmp20.isInView;
  const items6 = [first1, callback7, isInView, first2];
  const items7 = [bounties, callback];
  const callback8 = first1.useCallback((item) => {
    item = item.item;
    const index = item.index;
    return closure_9(bounties(first[31]).BillableAdPlacementImpressionTrackerNative, {
      adContentId: item.id,
      adCreativeType: bounties(first[28]).AdCreativeType.BOUNTY,
      questContent: bounties(first[22]).QuestContent.QUEST_HOME_MOBILE_CAROUSEL,
      questContentPosition: index,
      trackGuildAndChannelMetadata: false,
      visibilityRef,
      sourceQuestContent: bounties(first[22]).QuestContent.QUEST_HOME_MOBILE_CAROUSEL,
      overrideVisibility: isInView && undefined,
      children() {
        return React7(BountyCardDefault, { bounty: item, index, isActive: index === first1, isModalVisible: first2, onPress: callback7 });
      }
    }, item.id);
  }, items6);
  const items8 = [isInView, first1, first2];
  const callback9 = first1.useCallback((arg0) => {
    const index = arg0;
    const obj = {};
    let merged = Object.assign(arg0);
    obj.onLayout = function onLayout(nativeEvent) {
      if (null != bounties[index.index]) {
        const obj2 = {};
        const merged = Object.assign(ref.current.children[tmp.id]);
        obj2.layout = nativeEvent.nativeEvent.layout;
        ref.current.children[tmp.id] = obj2;
        callback(tmp.id);
      }
      index.onLayout(nativeEvent);
    };
    return closure_9(closure_5, obj);
  }, items7);
  let obj = { style: tmp.container, children: null };
  let obj2 = { ref: tmp20.containerRef, onLayout: callback1, children: null };
  const memo1 = first1.useMemo(() => ({ isInView, activeIndex: first1, isModalVisible: first2 }), items8);
  obj2.children = closure_9(bounties(first[32]).FlashList, { ref, horizontal: true, data: bounties, renderItem: callback8, keyExtractor: callback7, contentContainerStyle: tmp.listContentContainer, snapToOffsets: memo, snapToEnd: false, decelerationRate: "fast", showsHorizontalScrollIndicator: false, ItemSeparatorComponent: callback6, ListFooterComponent: callback2, onScroll: callback3, onScrollBeginDrag: callback4, onMomentumScrollEnd: callback5, scrollEventThrottle: 16, extraData: memo1, CellRendererComponent: callback9 });
  obj.children = closure_9(closure_5, obj2);
  return closure_9(closure_5, obj);
}
const View = fn(17).View;
const constants = fn(5458).BountyCarouselEmptyStateReason;
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const PX_16 = nativeDefault.space.PX_16;
let closure_13 = fn(15098).CARD_WIDTH + PX_16;
const createStyles = fn(4574);
let closure_14 = createStyles.createStyles(() => {
  const obj = { container: { marginBottom: nativeDefault.space.PX_48 }, listContentContainer: { paddingLeft: PX_16 }, emptyState: null, emptyStateText: null };
  const obj2 = { marginBottom: nativeDefault.space.PX_48 };
  const obj3 = { paddingLeft: PX_16 };
  obj.emptyState = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.lg, overflow: "hidden", paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: 14, marginHorizontal: nativeDefault.space.PX_16 };
  obj.emptyStateText = { flex: 1, gap: 2 };
  return obj;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/quests/native/QuestHomeBounties.tsx");

export default noop.memo(function QuestHomeBounties(shopCarouselConfig) {
  ({ verticalScrollEnabled, orbShopProducts, obtainableOrbRewards, showOrbShopPlaceholderCarousel } = shopCarouselConfig);
  if (showOrbShopPlaceholderCarousel === undefined) {
    showOrbShopPlaceholderCarousel = false;
  }
  const questHomeBounties = first(11515).useQuestHomeBounties().questHomeBounties;
  const tmp3 = closure_14();
  first = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  if (questHomeBounties.length > 0) {
    const items = [tmp(1943).DismissibleContent.BOUNTIES_NUX_PROMO_SHEET];
    let items1 = items;
  } else {
    items1 = [];
  }
  const obj = first(11515);
  const tmp4 = _slicedToArray(first(7402).useSelectedDismissibleContent(items1), 2);
  first = tmp4[0];
  importDefault = tmp6;
  dependencyMap = noop.useRef(false);
  const items2 = [first];
  const effect = noop.useEffect(() => {
    let current = first !== dismissible_content.DismissibleContent.BOUNTIES_NUX_PROMO_SHEET;
    if (!current) {
      current = ref.current;
    }
    if (!current) {
      ref.current = true;
      openBountiesNuxPromoSheetDefault();
    }
  }, items2);
  const items3 = [first, tmp4[1]];
  const effect1 = noop.useEffect(() => {
    function handleHide(key) {
      if (key.key === first(closure_2[14]).PROMO_SHEET_KEY) {
        closure_1_1(constants.USER_DISMISS);
      }
    }
    if (handleHide === first(ref[15]).DismissibleContent.BOUNTIES_NUX_PROMO_SHEET) {
      const subscription = closure_1(tmp[17]).subscribe("HIDE_ACTION_SHEET", handleHide);
      return () => {
        DispatcherDefault.unsubscribe("HIDE_ACTION_SHEET", handleHide);
      };
    }
    tmp = ref;
  }, items3);
  const tmpResult = first(7402);
  const items4 = [BountyStore];
  ({ placement, buttonVariant, clickable } = shopCarouselConfig.shopCarouselConfig);
  let tmp10 = undefined !== clickable;
  const stateFromStores = first(504).useStateFromStores(items4, () => BountyStore.areAllBountiesCompleted());
  if (tmp10) {
    tmp10 = clickable;
  }
  if (0 !== questHomeBounties.length) {
    if (!stateFromStores) {
      if (verticalScrollEnabled) {
        let tmp14 = "none" !== placement && obtainableOrbRewards > 0;
        if (tmp14) {
          tmp14 = orbShopProducts.length >= tmp(15099).MIN_PRODUCTS_FOR_ORB_SHOP_CAROUSEL || showOrbShopPlaceholderCarousel;
          const tmp15 = orbShopProducts.length >= tmp(15099).MIN_PRODUCTS_FOR_ORB_SHOP_CAROUSEL || showOrbShopPlaceholderCarousel;
        }
        if (!tmp14) {
          const obj2 = { style: tmp3.container, children: null };
          const obj3 = { bounties: questHomeBounties, shopCarouselButtonVariant: buttonVariant, footer: null, replaceHeaderMediaWith: null };
          let tmp26;
          if ("inside" === placement) {
            tmp26 = null;
          }
          obj3.footer = tmp26;
          let tmp27;
          if ("replace_media" === placement) {
            tmp27 = null;
          }
          obj3.replaceHeaderMediaWith = tmp27;
          const items5 = [closure_9(BountiesCtaHeaderDefault, obj3), ];
          let tmp28 = null;
          if ("outside" === placement) {
            tmp28 = null;
          }
          items5[1] = tmp28;
          obj2.children = items5;
          return closure_10(View, obj2);
        } else {
          const obj4 = { embedded: "inside" === placement, replacesHeaderMedia: "replace_media" === placement, listEdgeSpacing: null, orbShopProducts: null, obtainableOrbRewards: null, showOrbShopPlaceholderCarousel: null, clickable: null };
          if ("outside" === placement) {
            let PX_20 = PX_16;
          } else {
            PX_20 = tmp18(576).space.PX_20;
          }
          obj4.listEdgeSpacing = PX_20;
          obj4.orbShopProducts = orbShopProducts;
          obj4.obtainableOrbRewards = obtainableOrbRewards;
          obj4.showOrbShopPlaceholderCarousel = showOrbShopPlaceholderCarousel;
          obj4.clickable = tmp10;
          closure_9(QuestHomeOrbShopCarouselDefault, obj4);
          tmp18 = importDefault;
        }
      } else {
        const obj5 = { bounties: questHomeBounties };
        return closure_9(QuestHomeBountiesCarousel, obj5);
      }
    }
  }
  const obj6 = { style: tmp3.container, children: null };
  if (verticalScrollEnabled) {
    const obj7 = { bounties: questHomeBounties, shopCarouselButtonVariant: buttonVariant, isEmptyOrCompleted: true };
    let tmp29Result = tmp29(BountiesCtaHeaderDefault, obj7);
  } else {
    const obj8 = { reason: tmp11 ? constants.EMPTY : constants.COMPLETED };
    tmp29Result = tmp29(EmptyState, obj8);
  }
  obj6.children = tmp29Result;
  return closure_9(View, obj6);
});
