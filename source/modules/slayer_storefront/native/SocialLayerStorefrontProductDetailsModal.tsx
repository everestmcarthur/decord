// Module ID: 10831
// Function ID: 10832
// Name: SocialLayerStorefrontProductDetailsModal
// Dependencies: [32, 19, 17, 5524, 7242, 10832, 1074, 21, 672, 576, 4574, 5696, 10833, 8335, 5601, 4570, 1114, 10834, 1178, 1925, 4816, 1611, 9398, 504, 7182, 7179, 7240, 7196, 5006, 1242, 10829, 10830, 1115, 4244, 10835, 9397, 10836, 10845, 7245, 5645, 5694, 5001, 8859, 10849, 3430, 4989, 8113, 8098, 10852, 10854, 2]
// Exports: default

// Module 10831 (SocialLayerStorefrontProductDetailsModal)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import StringUtils from "StringUtils" /* 1925 */;
import Text_Text from "Text/Text" /* 4570 */;
import StoreUtils from "StoreUtils" /* 4816 */;
import FastImageDefault from "FastImage" /* 5601 */;
import XSmallIcon from "XSmallIcon" /* 5694 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7196 */;
import SlayerStorefrontUtils from "SlayerStorefrontUtils" /* 7240 */;
import common_Video from "common/Video" /* 8335 */;
import SocialLayerStorefrontNativeActionCreators from "SocialLayerStorefrontNativeActionCreators" /* 10829 */;
import SocialLayerStorefrontActionCreators from "SocialLayerStorefrontActionCreators" /* 10830 */;
import carouselMediaItems from "carouselMediaItems" /* 10833 */;
import StorefrontNativeUtils from "StorefrontNativeUtils" /* 10834 */;
import redirectToSlayerStorefrontWebDefault from "redirectToSlayerStorefrontWeb" /* 10835 */;
import NativePaymentContext from "NativePaymentContext" /* 10854 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import SKUStore from "SKUStore" /* 5524 */;
import SocialLayerStorefrontStore from "SocialLayerStorefrontStore" /* 7242 */;
import n_mod from "module_672" /* 672 */;

require = fn;
function HeroMedia(mediaItem) {
  mediaItem = mediaItem.mediaItem;
  const tmp = closure_19();
  if ("video" === mediaItem.type) {
    const obj2 = { style: tmp.hero, children: null };
    const obj3 = { source: null, poster: null, muted: true, resizeMode: "cover", style: null };
    const obj4 = { uri: mediaItem.src };
    obj3.source = obj4;
    obj3.poster = mediaItem.videoThumbnailSrc;
    obj3.style = tmp.heroImage;
    obj2.children = closure_1_14(common_Video.VideoComponent, obj3);
    let tmp6 = closure_1_14(React5, obj2);
  } else if (null != mediaItem.backgroundSrc) {
    const obj5 = { style: tmp.hero, children: null };
    const obj6 = { source: null, style: null, resizeMode: "cover" };
    const obj7 = { uri: mediaItem.backgroundSrc };
    obj6.source = obj7;
    obj6.style = absoluteFill.absoluteFill;
    const items = [closure_1_14(FastImageDefault, obj6), ];
    const obj8 = { source: null, style: null, resizeMode: "cover" };
    const obj9 = { uri: mediaItem.src };
    obj8.source = obj9;
    obj8.style = tmp.heroImage;
    items[1] = closure_1_14(FastImageDefault, obj8);
    obj5.children = items;
    tmp6 = __initData(React5, obj5);
  } else {
    const obj = { style: tmp.hero, children: null };
    const obj10 = { source: null, style: null, resizeMode: "cover" };
    const obj11 = { uri: mediaItem.src };
    obj10.source = obj11;
    obj10.style = tmp.heroImage;
    obj.children = closure_1_14(FastImageDefault, obj10);
    tmp6 = closure_1_14(React5, obj);
  }
  return tmp6;
}
function InGameItemTag() {
  const obj = { variant: "text-sm/medium", color: "text-muted", children: null };
  const intl = util.intl;
  obj.children = intl.string(util.t.V91tvy);
  return closure_1_14(Text_Text.Text, obj);
}
function ProductPriceSection(sku) {
  const tmp = closure_19();
  const userPrice = StorefrontNativeUtils.useFormattedSKUPrice({ sku: sku.sku, priceSetAssignmentPurchaseType: constants3.DEFAULT }).userPrice;
  let tmp4 = null;
  if (null != userPrice) {
    const obj3 = { style: tmp.priceSection, children: null };
    const items = [closure_1_14(InGameItemTag, {}), ];
    const obj4 = { style: tmp.priceRow, children: null };
    const obj5 = { variant: "text-md/bold", color: "mobile-text-heading-primary", children: userPrice };
    obj4.children = closure_1_14(Text_Text.Text, obj5);
    items[1] = closure_1_14(React5, obj4);
    obj3.children = items;
    tmp4 = __initData(React5, obj3);
  }
  return tmp4;
}
function BundleThumbnailRow(trackPDPClick) {
  ({ items: require, mediaItems, selectedIndex: importDefault, onSelectIndex } = trackPDPClick);
  trackPDPClick = trackPDPClick.trackPDPClick;
  const tmp = closure_19();
  noop = tmp;
  let items = [onSelectIndex, trackPDPClick];
  closure_5 = noop.useCallback((arg0) => {
    trackPDPClick(SlayerShopPDPCTAType.CAROUSEL_ITEM);
    onSelectIndex(arg0);
  }, items);
  let obj = { style: tmp.section, children: null };
  let obj2 = { variant: "text-xs/semibold", color: "text-muted", children: null };
  const intl = require("util").intl;
  obj2.children = intl.string(require("util").t.U7DAV9);
  let items1 = [
    closure_14(require("Text/Text").Text, obj2),
    closure_14(closure_5, {
      horizontal: true,
      showsHorizontalScrollIndicator: false,
      contentContainerStyle: tmp.bundleThumbnailRow,
      children: mediaItems.map((item, index) => {
        dependencyMap = index;
        let label;
        if (dependencyMap[index] != null) {
          label = tmp.label;
        }
        if (label == null) {
          let title;
          if (tmp != null) {
            title = tmp.title;
          }
          label = title;
        }
        let thumbnailInnerSelected = index === closure_1;
        const obj = {
          accessibilityRole: "button",
          accessibilityLabel: label,
          accessibilityState: { selected: thumbnailInnerSelected },
          onPress() {
            return closure_5(closure_0);
          },
          style: null,
          children: null
        };
        const items = [thumbnail.thumbnail, ];
        let thumbnailSelected = thumbnailInnerSelected;
        if (thumbnailInnerSelected) {
          thumbnailSelected = tmp8.thumbnailSelected;
        }
        items[1] = thumbnailSelected;
        obj.style = items;
        const items1 = [thumbnail.thumbnailInner, ];
        if (thumbnailInnerSelected) {
          thumbnailInnerSelected = tmp8.thumbnailInnerSelected;
        }
        const obj2 = { style: items1, children: null };
        items1[1] = thumbnailInnerSelected;
        const obj3 = { source: null, style: null, resizeMode: "cover" };
        const obj4 = { uri: null };
        const tmp10 = require("FastImage");
        const tmp9 = closure_1_7;
        obj4.uri = dependencyMap(onSelectIndex[12]).getThumbnailSrc(item);
        obj3.source = obj4;
        obj3.style = thumbnail.thumbnailImage;
        obj2.children = closure_1_14(tmp10, obj3);
        obj.children = closure_1_14(tmp9, obj2);
        return closure_1_14(dependencyMap(onSelectIndex[18]).PressableOpacity, obj, index);
      })
    })
  ];
  obj.children = items1;
  return closure_15(closure_7, obj);
}
function SKUNameAndDescriptionSection(sku) {
  sku = sku.sku;
  const tmp = closure_19();
  let tmp5Result = null;
  if (!obj.isNullOrEmpty(sku.name)) {
    const obj2 = { style: tmp.section, children: null };
    const obj3 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: sku.name };
    const items = [closure_1_14(tmp2(4570).Heading, obj3), ];
    const isNullOrEmptyResult = tmp2(1925).isNullOrEmpty(sku.description);
    let tmp7Result = !isNullOrEmptyResult;
    if (!isNullOrEmptyResult) {
      const obj4 = { variant: "text-md/medium", color: "text-muted", children: sku.description };
      tmp7Result = tmp7(tmp2(4570).Text, obj4);
    }
    items[1] = tmp7Result;
    obj2.children = items;
    tmp5Result = __initData(React5, obj2);
    const tmp2Result = tmp2(1925);
    tmp7 = closure_1_14;
  }
  return tmp5Result;
}
function ItemDetailsSection(selectedItem) {
  selectedItem = selectedItem.selectedItem;
  const tmp = closure_19();
  let assetURL = null;
  if (null != selectedItem.labelIconAssetId) {
    assetURL = StoreUtils.getAssetURL(selectedItem.applicationId, selectedItem.labelIconAssetId);
  }
  let trimmed;
  if (selectedItem.title != null) {
    trimmed = str.trim();
  }
  let trimmed1;
  if (selectedItem.label != null) {
    trimmed1 = str2.trim();
  }
  let trimmed2;
  if (selectedItem.description != null) {
    trimmed2 = str3.trim();
  }
  if (obj2.isNullOrEmpty(trimmed)) {
    if (tmp8Result.isNullOrEmpty(trimmed1)) {
      let tmp11Result2 = null;
      const tmp8Result5 = tmp8(1925);
    }
    return tmp11Result2;
  }
  const obj3 = { style: tmp.section, children: null };
  obj2 = StringUtils;
  const isNullOrEmptyResult = StringUtils.isNullOrEmpty(trimmed);
  let tmp14 = !isNullOrEmptyResult;
  if (!isNullOrEmptyResult) {
    const obj4 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", children: trimmed };
    tmp14 = closure_1_14(tmp8(4570).Heading, obj4);
  }
  const items = [tmp14, , ];
  const tmp8Result6 = StringUtils;
  const isNullOrEmptyResult1 = StringUtils.isNullOrEmpty(trimmed1);
  let tmp11Result = !isNullOrEmptyResult1;
  if (!isNullOrEmptyResult1) {
    const obj5 = { style: tmp.labelRow, children: null };
    let tmp18 = null != assetURL;
    if (tmp18) {
      const obj6 = { source: null, style: null };
      const obj7 = { uri: assetURL };
      obj6.source = obj7;
      obj6.style = tmp.labelIcon;
      tmp18 = closure_1_14(FastImageDefault, obj6);
    }
    const items1 = [tmp18, ];
    const obj8 = { variant: "text-sm/medium", color: "text-muted", children: trimmed1 };
    items1[1] = closure_1_14(tmp8(4570).Text, obj8);
    obj5.children = items1;
    tmp11Result = tmp11(tmp12, obj5);
  }
  items[1] = tmp11Result;
  const tmp8Result7 = StringUtils;
  const isNullOrEmptyResult2 = StringUtils.isNullOrEmpty(trimmed2);
  let tmp23 = !isNullOrEmptyResult2;
  if (!isNullOrEmptyResult2) {
    const obj9 = { variant: "text-md/medium", color: "text-default", children: trimmed2 };
    tmp23 = closure_1_14(tmp8(4570).Text, obj9);
  }
  items[2] = tmp23;
  obj3.children = items;
  tmp11Result2 = tmp11(tmp12, obj3);
}
function SocialLayerStorefrontProductDetailsModal(skuId) {
  skuId = skuId.skuId;
  const analyticsLocations = skuId.analyticsLocations;
  let stateFromStores2;
  let memo1;
  let trackPDPClick;
  let skuAssets;
  c10 = undefined;
  c11 = undefined;
  c12 = undefined;
  const tmp = closure_19();
  dependencyMap = tmp;
  const rect = analyticsLocations(1611)();
  const storeFront = analyticsLocations(9398).useNativeIAPPayments().storeFront;
  let obj = analyticsLocations(9398);
  let items = [trackPDPClick];
  const stateFromStores = skuId(504).useStateFromStores(items, () => SKUStore.get(skuId));
  let obj2 = skuId(504);
  let items1 = [trackPDPClick];
  const stateFromStores1 = skuId(504).useStateFromStores(items1, () => SKUStore.isFetching(skuId) || SKUStore.didFetchingSkuFail(skuId));
  let obj3 = skuId(504);
  let applicationId;
  if (stateFromStores != null) {
    applicationId = stateFromStores.applicationId;
  }
  const getOrFetchApplication = skuId(7182).useGetOrFetchApplication(applicationId);
  let tmp10 = getOrFetchApplication;
  const obj4 = skuId(7182);
  if (getOrFetchApplication == null) {
    tmp10 = null;
  }
  const tmp2Result = analyticsLocations(7179);
  const items2 = [skuAssets];
  stateFromStores2 = skuId(504).useStateFromStores(items2, () => skuAssets.getSkuAssets());
  const items3 = [stateFromStores];
  const memo = stateFromStores.useMemo(() => SlayerStorefrontUtils.getCardImageURL(stateFromStores), items3);
  const tmp14 = storeFront(stateFromStores.useState(0), 2);
  const first = tmp14[0];
  const items4 = [analyticsLocations];
  memo1 = stateFromStores.useMemo(() => {
    let items = analyticsLocations;
    if (analyticsLocations == null) {
      items = [];
    }
    const items1 = [...items, AnalyticsLocationDefault.SLAYER_STOREFRONT_NATIVE_PDP];
    return items1;
  }, items4);
  analyticsLocations(5006)(() => {
    const obj2 = { location_stack: memo1, type: SocialLayerStorefrontNativeActionCreators.SOCIAL_LAYER_STOREFRONT_PRODUCT_DETAILS_MODAL_KEY, sku_id: skuId, application_id: null };
    let applicationId;
    if (stateFromStores != null) {
      applicationId = stateFromStores.applicationId;
    }
    obj2.application_id = applicationId;
    AnalyticsUtilsDefault.track(constants.OPEN_MODAL, obj2);
  });
  const items5 = [skuId, , ];
  let applicationId1;
  if (stateFromStores != null) {
    applicationId1 = stateFromStores.applicationId;
  }
  items5[1] = applicationId1;
  items5[2] = memo1;
  trackPDPClick = stateFromStores.useCallback((cta_type) => {
    const obj2 = { slayer_storefront_session_id: "Array", sku_id: skuId, guild_id: true, application_id: true, cta_type: "SOURCE", location_stack: null };
    let applicationId;
    if (stateFromStores != null) {
      applicationId = stateFromStores.applicationId;
    }
    obj2.application_id = applicationId;
    obj2.cta_type = cta_type;
    obj2.location_stack = memo1;
    AnalyticsUtilsDefault.track(constants.SLAYER_STOREFRONT_PDP_ELEMENT_CLICKED, obj2);
  }, items5);
  const items6 = [stateFromStores, stateFromStores2];
  let tmp4Result = skuId(504);
  [arr8, arr9] = storeFront(stateFromStores.useMemo(() => {
    let applicationId;
    if (stateFromStores != null) {
      applicationId = tmp.applicationId;
    }
    if (null == applicationId) {
      const items = [[], []];
      let result = items;
    } else {
      const obj2 = carouselMediaItems;
      const tenantMetadata = tmp.tenantMetadata;
      let carouselItems;
      if (tenantMetadata != null) {
        const socialLayer = tenantMetadata.socialLayer;
        if (socialLayer != null) {
          carouselItems = socialLayer.carouselItems;
        }
      }
      if (carouselItems == null) {
        carouselItems = [];
      }
      const obj = { heroWidth: carouselMediaItems.MOBILE_HERO_WIDTH_PX };
      result = obj2.convertCarouselItemsToMediaItems(carouselItems, tmp.applicationId, stateFromStores2, obj);
    }
    return result;
  }, items6), 2);
  let num = 0;
  if (first < arr9.length) {
    num = first;
  }
  let tmp22 = arr8[num];
  if (tmp22 == null) {
    tmp22 = null;
  }
  let tmp23 = arr9[num];
  if (tmp23 == null) {
    tmp23 = null;
  }
  let num2;
  if (stateFromStores != null) {
    let tenantMetadata = stateFromStores.tenantMetadata;
    if (tenantMetadata != null) {
      let socialLayer = tenantMetadata.socialLayer;
      if (socialLayer != null) {
        let carouselItems = socialLayer.carouselItems;
        if (carouselItems != null) {
          num2 = carouselItems.length;
        }
      }
    }
  }
  if (num2 == null) {
    num2 = 0;
  }
  skuAssets = tmp24;
  const tmp13Result = storeFront(stateFromStores.useMemo(() => {
    let applicationId;
    if (stateFromStores != null) {
      applicationId = tmp.applicationId;
    }
    if (null == applicationId) {
      const items = [[], []];
      let result = items;
    } else {
      const obj2 = carouselMediaItems;
      const tenantMetadata = tmp.tenantMetadata;
      let carouselItems;
      if (tenantMetadata != null) {
        const socialLayer = tenantMetadata.socialLayer;
        if (socialLayer != null) {
          carouselItems = socialLayer.carouselItems;
        }
      }
      if (carouselItems == null) {
        carouselItems = [];
      }
      const obj = { heroWidth: carouselMediaItems.MOBILE_HERO_WIDTH_PX };
      result = obj2.convertCarouselItemsToMediaItems(carouselItems, tmp.applicationId, stateFromStores2, obj);
    }
    return result;
  }, items6), 2);
  const tmp21 = arr9.length > 1;
  [tmp26, c10] = storeFront(stateFromStores.useState(false), 2);
  const tmp13Result4 = storeFront(stateFromStores.useState(false), 2);
  [tmp28, c11] = storeFront(stateFromStores.useState(false), 2);
  const tmp13Result5 = storeFront(stateFromStores.useState(false), 2);
  [tmp30, c12] = storeFront(stateFromStores.useState(0), 2);
  stateFromStores.useRef(false);
  const items7 = [stateFromStores, stateFromStores2, num2 === arr8.length, stateFromStores1, ];
  let country;
  if (storeFront != null) {
    country = storeFront.country;
  }
  items7[4] = country;
  const effect = obj6.useEffect(() => {
    if (tmp2) {
      let current = closure_9;
      if (!closure_9) {
        current = stateFromStores1;
      }
      if (!current) {
        current = ref.current;
      }
      if (!current) {
        ref.current = true;
        const obj2 = { withGoogleSkuIds: null, countryCode: null, paymentGateway: null };
        ({ applicationId, id } = tmp);
        const obj = SocialLayerStorefrontActionCreators;
        const tmp5 = require;
        obj2.withGoogleSkuIds = PlatformUtils.isAndroid();
        let country;
        if (storeFront != null) {
          country = storeFront.country;
        }
        obj2.countryCode = country;
        let APPLE;
        if (tmp5Result.isIOS()) {
          APPLE = constants2.APPLE;
        }
        obj2.paymentGateway = APPLE;
        const socialLayerStorefrontSkuForApplication = obj.fetchSocialLayerStorefrontSkuForApplication(applicationId, id, obj2);
        tmp5Result = tmp5(1115);
      }
    }
  }, items7);
  const items8 = [skuId, , ];
  let orbsReward;
  const callback1 = obj6.useCallback(() => {
    _undefined(false);
  }, []);
  if (stateFromStores != null) {
    orbsReward = stateFromStores.orbsReward;
  }
  items8[1] = orbsReward;
  items8[2] = memo1;
  const items9 = [trackPDPClick, , ];
  let applicationId2;
  const callback2 = obj6.useCallback(() => {
    _undefined(false);
    const obj2 = { skuId, orbsReward: null, analyticsLocations: null };
    let orbsReward;
    if (stateFromStores != null) {
      orbsReward = stateFromStores.orbsReward;
    }
    obj2.orbsReward = orbsReward;
    obj2.analyticsLocations = memo1;
    const result = SocialLayerStorefrontNativeActionCreators.openSocialLayerStorefrontProductSelfPurchaseSuccessModal(obj2);
    result.then(SocialLayerStorefrontNativeActionCreators.closeSocialLayerStorefrontProductDetailsModal);
  }, items8);
  if (stateFromStores != null) {
    applicationId2 = stateFromStores.applicationId;
  }
  items9[1] = applicationId2;
  items9[2] = skuId;
  const callback3 = obj6.useCallback(() => {
    callback(SlayerShopPDPCTAType.BUY_BUTTON);
    if (obj.isSocialLayerStorefrontPurchaseSupported()) {
      _undefined2(true);
      _undefined3((arg0) => arg0 + 1);
      _undefined(true);
    } else {
      let applicationId;
      if (stateFromStores != null) {
        applicationId = stateFromStores.applicationId;
      }
      const obj2 = { applicationId, skuId, source: "SocialLayerStorefrontProductDetailsModal" };
      redirectToSlayerStorefrontWebDefault(obj2).then((result) => {
        if (result) {
          result = skuId(closeButtonIcon[30]).closeSocialLayerStorefrontProductDetailsModal();
          const obj = skuId(closeButtonIcon[30]);
        }
      });
      const tmp4Result = redirectToSlayerStorefrontWebDefault(obj2);
    }
  }, items9);
  const OTPACOMOrderExperiment = tmp4(9397).OTPACOMOrderExperiment;
  let enabled = OTPACOMOrderExperiment.useConfig({ location: "SocialLayerStorefrontProductDetailsModal" }).enabled;
  const tmp13Result6 = storeFront(stateFromStores.useState(0), 2);
  if (tmp4Result6.isIOS()) {
    let GOOGLE = tmp38.APPLE_ADVANCED_COMMERCE;
    let tmp39 = tmp38;
  } else {
    GOOGLE = tmp38.GOOGLE;
    tmp39 = tmp38;
  }
  let tmp41Result = null;
  if (tmp28) {
    const obj5 = { headless: true, paymentGateway: GOOGLE, orderRequired: null, skuIds: null, isGift: false, activeSubscription: null, onOrderRetryCancellation: null, checkoutAnalyticsFields: null, children: null };
    if (enabled) {
      enabled = GOOGLE === tmp39.APPLE_ADVANCED_COMMERCE;
    }
    obj5.orderRequired = enabled;
    const items10 = [skuId];
    obj5.skuIds = items10;
    obj5.onOrderRetryCancellation = tmp4(10829).closeSocialLayerStorefrontProductDetailsModal;
    const obj7 = { is_gift: false, location_stack: memo1, payment_type: "sku", sku_id: skuId, sku_type: null, sku_product_line: null, application_id: null };
    let type;
    if (stateFromStores != null) {
      type = stateFromStores.type;
    }
    obj7.sku_type = type;
    let productLine;
    if (stateFromStores != null) {
      productLine = stateFromStores.productLine;
    }
    obj7.sku_product_line = productLine;
    let applicationId3;
    if (stateFromStores != null) {
      applicationId3 = stateFromStores.applicationId;
    }
    obj7.application_id = applicationId3;
    obj5.checkoutAnalyticsFields = obj7;
    const obj8 = { attempt: tmp30, skuId, sku: stateFromStores, analyticsLocations: memo1, onPurchaseComplete: callback2, onPurchaseError: callback1 };
    obj5.children = closure_14(tmp4(10845).HeadlessSlayerStorefrontPurchaseRunner, obj8);
    tmp41Result = tmp41(tmp2(10836), obj5, skuId);
    const tmp2Result2 = tmp2(10836);
  }
  const items11 = [skuId, memo1, trackPDPClick];
  if (null == stateFromStores) {
    return null;
  } else {
    let result = tmp4(7245).isSlayerSkuAvailableOnThisPlatform(stateFromStores);
    const intl4 = tmp4(1114).intl;
    const stringResult = intl4.string(tmp4(1114).t.boqtTA);
    const tmp4Result7 = tmp4(7245);
    let result1 = tmp4(4244).isSocialLayerStorefrontGiftingSupported();
    const items12 = [tmp.container, ];
    const tmp4Result8 = tmp4(4244);
    let num3 = 0;
    if (!tmp4Result9.isIOS()) {
      num3 = rect.top;
    }
    const obj9 = { style: null, children: null };
    const obj10 = { paddingTop: num3 };
    items12[1] = obj10;
    obj9.style = items12;
    const items13 = [tmp41Result, , , ];
    const obj11 = { style: tmp.header, children: null };
    const obj12 = {
      onPress: tmp4(10829).closeSocialLayerStorefrontProductDetailsModal,
      backImage() {
          return closure_2_14(XSmallIcon.XSmallIcon, { size: "md", style: closeButtonIcon.closeButtonIcon });
        },
      accessibilityLabel: null,
      displayMode: "minimal"
    };
    const intl = tmp4(1114).intl;
    obj12.accessibilityLabel = intl.string(tmp4(1114).t.cpT0Cq);
    const items14 = [closure_14(tmp4(5645).HeaderBackButton, obj12), ];
    const obj13 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: tmp.headerTitle, children: null };
    let name;
    if (getOrFetchApplication != null) {
      name = getOrFetchApplication.name;
    }
    obj13.children = name;
    items14[1] = closure_14(tmp4(4570).Heading, obj13);
    obj11.children = items14;
    items13[1] = closure_15(memo1, obj11);
    const obj14 = { style: tmp.scrollContainer, children: null };
    let exclusive = stateFromStores.exclusive;
    if (exclusive) {
      const obj15 = { style: stateFromStores2.absoluteFill, colors: null, pointerEvents: "none" };
      const items15 = [closure_17, closure_18];
      obj15.colors = items15;
      exclusive = tmp47(tmp2(5001), obj15);
    }
    const items16 = [exclusive, ];
    const obj16 = { contentContainerStyle: tmp.scrollContent, children: null };
    if (null != tmp23) {
      const obj17 = { mediaItem: tmp23 };
      let tmp47Result = tmp47(HeroMedia, obj17);
    } else {
      tmp47Result = null != memo;
      if (tmp47Result) {
        const obj18 = { sku: stateFromStores };
        tmp47Result = tmp47(tmp2(8859), obj18);
      }
    }
    const items17 = [tmp47Result, , ];
    let exclusive2 = stateFromStores.exclusive;
    if (exclusive2) {
      const obj19 = { style: tmp.exclusiveBadgeContainer, children: tmp47(tmp4(10849).ExclusiveBadge, {}) };
      exclusive2 = tmp47(tmp70, obj19);
    }
    items17[1] = exclusive2;
    if (tmp21) {
      const obj20 = { sku: stateFromStores };
      const items18 = [tmp47(SKUNameAndDescriptionSection, obj20), , ];
      const obj21 = { items: arr8, mediaItems: arr9, selectedIndex: num, onSelectIndex: tmp14[1], trackPDPClick };
      items18[1] = tmp47(BundleThumbnailRow, obj21);
      let tmp47Result3 = null != stateFromStores.applicationId && null != tmp22;
      if (tmp47Result3) {
        const obj22 = { selectedItem: tmp22, applicationId: stateFromStores.applicationId };
        tmp47Result3 = tmp47(ItemDetailsSection, obj22);
      }
      const obj23 = { children: null };
      items18[2] = tmp47Result3;
      obj23.children = items18;
      let tmp47Result4 = tmp69(closure_16, obj23);
    } else {
      const obj24 = { sku: stateFromStores };
      tmp47Result4 = tmp47(SKUNameAndDescriptionSection, obj24);
    }
    items17[2] = tmp47Result4;
    obj16.children = items17;
    items16[1] = closure_15(stateFromStores1, obj16);
    obj14.children = items16;
    items13[2] = closure_15(memo1, obj14);
    const obj25 = { style: null, children: null };
    const items19 = [tmp.footer, ];
    const obj26 = { paddingBottom: rect.bottom + tmp2(576).space.PX_16 };
    items19[1] = obj26;
    obj25.style = items19;
    const obj27 = { sku: stateFromStores };
    const items20 = [closure_14(ProductPriceSection, obj27), , , ];
    let tmp47Result5 = !result;
    if (!result) {
      const obj28 = { variant: "text-xs/normal", color: "text-muted", style: tmp.availabilityCopy, children: null };
      const intl2 = tmp4(1114).intl;
      obj28.children = intl2.string(tmp2(3430).gndWN7);
      tmp47Result5 = tmp47(tmp4(4570).Text, obj28);
    }
    items20[1] = tmp47Result5;
    const obj29 = { style: tmp.footerButtonRow, children: null };
    const obj30 = { style: tmp.buyButton, children: null };
    const obj31 = { variant: "primary", size: "lg", text: stringResult, loading: tmp26, disabled: null, onPress: null };
    let tmp64 = tmp26;
    if (!tmp26) {
      tmp64 = !result;
    }
    obj31.disabled = tmp64;
    obj31.onPress = callback3;
    obj30.children = closure_14(tmp4(4989).Button, obj31);
    const items21 = [closure_14(memo1, obj30), ];
    if (result1) {
      const obj32 = { icon: tmp2(8098), variant: "primary", size: "lg", disabled: tmp26, accessibilityLabel: null, onPress: null };
      const intl3 = tmp4(1114).intl;
      obj32.accessibilityLabel = intl3.string(tmp4(1114).t.QAZA5f);
      obj32.onPress = tmp46;
      result1 = tmp47(tmp4(8113).IconButton, obj32);
    }
    items21[1] = result1;
    obj29.children = items21;
    items20[2] = closure_15(memo1, obj29);
    if (result) {
      const obj33 = { style: tmp.legalCopy, children: null };
      const obj34 = { shouldAppendDisclaimer: false === tmp2Result(tmp10).hasAlreadyLinked };
      const mobileFinePrintMessageForApplication = tmp4(10852).getMobileFinePrintMessageForApplication(getOrFetchApplication, stringResult, obj34);
      obj33.children = mobileFinePrintMessageForApplication.map((children, index) => closure_1_14(skuId(closeButtonIcon[15]).Text, { variant: "text-xs/normal", color: "text-muted", children }, index));
      result = tmp47(tmp70, obj33);
      const tmp4Result10 = tmp4(10852);
    }
    items20[3] = result;
    obj25.children = items20;
    items13[3] = closure_15(memo1, obj25);
    obj9.children = items13;
    return closure_15(memo1, obj9);
  }
  tmp4Result6 = skuId(1115);
}
get_ActivityIndicator = fn(17);
({ ScrollView: hasOwnProperty, StyleSheet: metroRequire, View: closure_7 } = get_ActivityIndicator);
const SlayerShopPDPCTAType = fn(10832).SlayerShopPDPCTAType;
const Constants = fn(1074);
({ AnalyticEvents: closure_11, PaymentGateways: closure_12, PriceSetAssignmentPurchaseTypes: map1 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = jsxProd);
let n = n_mod;
const importDefaultResultResult = n(nativeDefault.unsafe_rawColors.BRAND_500);
let closure_17 = n(nativeDefault.unsafe_rawColors.BRAND_500).alpha(0.25).hex();
let n = n_mod;
const alphaResult = n(nativeDefault.unsafe_rawColors.BRAND_500).alpha(0.25);
const importDefaultResult1Result = n(nativeDefault.unsafe_rawColors.BRAND_500);
let closure_18 = n(nativeDefault.unsafe_rawColors.BRAND_500).alpha(0).hex();
const createStyles = fn(4574);
let obj = { container: { flex: 1 }, header: null, headerTitle: null, closeButtonIcon: null, scrollContent: null, scrollContainer: null, section: null, bundleThumbnailRow: null, thumbnail: null, thumbnailSelected: null, thumbnailInner: null, thumbnailInnerSelected: null, thumbnailImage: null, labelRow: null, labelIcon: null, priceRow: null, footer: null, footerButtonRow: null, buyButton: null, availabilityCopy: null, legalCopy: null, hero: null, priceSection: null, heroImage: null, exclusiveBadgeContainer: null };
const alphaResult1 = n(nativeDefault.unsafe_rawColors.BRAND_500).alpha(0);
obj.header = { height: fn(5696).NAV_BAR_HEIGHT, flexDirection: "row", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8, borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE };
obj.headerTitle = { flexShrink: 1 };
let obj2 = { height: fn(5696).NAV_BAR_HEIGHT, flexDirection: "row", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8, borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE };
obj.closeButtonIcon = { tintColor: nativeDefault.colors.INTERACTIVE_ICON_DEFAULT };
let obj3 = { tintColor: nativeDefault.colors.INTERACTIVE_ICON_DEFAULT };
obj.scrollContent = { alignItems: "stretch", gap: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_16 };
obj.scrollContainer = { flex: 1 };
let obj4 = { alignItems: "stretch", gap: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_16 };
obj.section = { width: "100%", paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
let obj6 = { width: "100%", paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
obj.bundleThumbnailRow = { flexDirection: "row", gap: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4 };
let size = { width: 64, height: 64, borderRadius: nativeDefault.radii.md, borderWidth: 2, borderColor: "transparent" };
obj.thumbnail = size;
let obj7 = { flexDirection: "row", gap: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4 };
obj.thumbnailSelected = { borderColor: nativeDefault.colors.BORDER_STRONG };
let obj8 = { borderColor: nativeDefault.colors.BORDER_STRONG };
obj.thumbnailInner = { flex: 1, borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
let obj9 = { flex: 1, borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
obj.thumbnailInnerSelected = { margin: 2, borderRadius: nativeDefault.radii.sm };
obj.thumbnailImage = { width: "100%", height: "100%" };
let obj10 = { margin: 2, borderRadius: nativeDefault.radii.sm };
obj.labelRow = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
const size1 = { width: nativeDefault.space.PX_16, height: nativeDefault.space.PX_16 };
obj.labelIcon = size1;
let obj11 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj.priceRow = { flexDirection: "row", alignItems: "center", flexWrap: "wrap", gap: nativeDefault.space.PX_8 };
let obj12 = { flexDirection: "row", alignItems: "center", flexWrap: "wrap", gap: nativeDefault.space.PX_8 };
obj.footer = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_8, borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE };
let obj13 = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_8, borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE };
obj.footerButtonRow = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj.buyButton = { flex: 1 };
obj.availabilityCopy = { textAlign: "center" };
let obj14 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj.legalCopy = { display: "flex", flexDirection: "column", gap: nativeDefault.space.PX_4 };
let obj15 = { display: "flex", flexDirection: "column", gap: nativeDefault.space.PX_4 };
obj.hero = { marginHorizontal: nativeDefault.space.PX_16, height: fn(10833).MOBILE_HERO_HEIGHT_PX, borderRadius: nativeDefault.radii.md, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let obj16 = { marginHorizontal: nativeDefault.space.PX_16, height: fn(10833).MOBILE_HERO_HEIGHT_PX, borderRadius: nativeDefault.radii.md, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj.priceSection = { width: "100%", gap: nativeDefault.space.PX_8 };
obj.heroImage = { width: "100%", height: "100%" };
let obj17 = { width: "100%", gap: nativeDefault.space.PX_8 };
obj.exclusiveBadgeContainer = { paddingHorizontal: nativeDefault.space.PX_16 };
let closure_19 = createStyles.createStyles(obj);
size = fn(2);
let result = size.fileFinishedImporting("modules/slayer_storefront/native/SocialLayerStorefrontProductDetailsModal.tsx");

export default function WrappedSocialLayerStorefrontProductDetailsModal(arg0) {
  const obj = { skuIDs: [], activeSubscription: null, children: null };
  const merged = Object.assign(arg0);
  obj.children = closure_1_14(SocialLayerStorefrontProductDetailsModal, {});
  return closure_1_14(NativePaymentContext.NativePaymentContextProvider, obj);
};
