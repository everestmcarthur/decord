// Module ID: 7766
// Function ID: 7767
// Name: CollectiblesShopHomeRecord
// Dependencies: [7739, 7767, 7769, 7772, 7773, 7774, 7775, 7776, 7777, 7778, 7779, 7768, 2]

// Module 7766 (CollectiblesShopHomeRecord)
import ShopBlockType from "ShopBlockType" /* 7768 */;
import CollectiblesCategoryRecord from "CollectiblesCategoryRecord" /* 7739 */;

require = fn;
const CountdownTimerBlockRecord = fn(7767).CountdownTimerBlockRecord;
const FeaturedBlockRecord = fn(7769).FeaturedBlockRecord;
const FeedBlockRecord = fn(7772).FeedBlockRecord;
let closure_6 = fn(7773).GameServerHostingBannerBlockRecord;
const HeroBlockRecord = fn(7774).HeroBlockRecord;
let closure_8 = fn(7775).ImmersiveBannerBlockRecord;
const RewardHeroBlockRecord = fn(7776).RewardHeroBlockRecord;
const ShelfBlockRecord = fn(7777).ShelfBlockRecord;
let closure_11 = fn(7778).SocialLayerStorefrontPromotionalBannerBlockRecord;
const WideBannerBlockRecord = fn(7779).WideBannerBlockRecord;
const prototype = function CollectiblesShopHomeRecord(shop_blocks) {
  const obj = Object.create(new.target.prototype);
  shop_blocks = shop_blocks.shop_blocks;
  const mapped = shop_blocks.map((type) => {
    type = type.type;
    if (ShopBlockType.ShopBlockType.HERO === type) {
      return HeroBlockRecord.fromServer(type);
    } else if (tmp(tmp2[11]).ShopBlockType.FEATURED === type) {
      return FeaturedBlockRecord.fromServer(type);
    } else if (tmp(tmp2[11]).ShopBlockType.FEED === type) {
      return FeedBlockRecord.fromServer(type);
    } else if (tmp(tmp2[11]).ShopBlockType.WIDE_BANNER === type) {
      return WideBannerBlockRecord.fromServer(type);
    } else if (tmp(tmp2[11]).ShopBlockType.SHELF === type) {
      return ShelfBlockRecord.fromServer(type);
    } else if (tmp(tmp2[11]).ShopBlockType.COUNTDOWN_TIMER === type) {
      return CountdownTimerBlockRecord.fromServer(type);
    } else if (tmp(tmp2[11]).ShopBlockType.IMMERSIVE_BANNER === type) {
      return closure_1_8.fromServer(type);
    } else if (tmp(tmp2[11]).ShopBlockType.REWARD_HERO === type) {
      return RewardHeroBlockRecord.fromServer(type);
    } else if (tmp(tmp2[11]).ShopBlockType.SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER === type) {
      return closure_1_11.fromServer(type);
    } else if (tmp(tmp2[11]).ShopBlockType.GAME_SERVER_HOSTING_BANNER === type) {
      return closure_1_6.fromServer(type);
    }
  });
  obj.shopBlocks = mapped.filter((item) => undefined !== item);
  const categories = shop_blocks.categories;
  obj.categories = categories.map((item) => CollectiblesCategoryRecord.fromServer(item));
  return obj;
}.prototype;
prototype["fromServer"] = function fromServer(shop_blocks) {
  if (typeof prototype === "function") {
    const obj = Object.create(tmp.prototype);
    shop_blocks = shop_blocks.shop_blocks;
    const mapped = shop_blocks.map((type) => {
      type = type.type;
      if (ShopBlockType.ShopBlockType.HERO === type) {
        return HeroBlockRecord.fromServer(type);
      } else if (tmp(tmp2[11]).ShopBlockType.FEATURED === type) {
        return FeaturedBlockRecord.fromServer(type);
      } else if (tmp(tmp2[11]).ShopBlockType.FEED === type) {
        return FeedBlockRecord.fromServer(type);
      } else if (tmp(tmp2[11]).ShopBlockType.WIDE_BANNER === type) {
        return WideBannerBlockRecord.fromServer(type);
      } else if (tmp(tmp2[11]).ShopBlockType.SHELF === type) {
        return ShelfBlockRecord.fromServer(type);
      } else if (tmp(tmp2[11]).ShopBlockType.COUNTDOWN_TIMER === type) {
        return CountdownTimerBlockRecord.fromServer(type);
      } else if (tmp(tmp2[11]).ShopBlockType.IMMERSIVE_BANNER === type) {
        return closure_1_8.fromServer(type);
      } else if (tmp(tmp2[11]).ShopBlockType.REWARD_HERO === type) {
        return RewardHeroBlockRecord.fromServer(type);
      } else if (tmp(tmp2[11]).ShopBlockType.SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER === type) {
        return closure_1_11.fromServer(type);
      } else if (tmp(tmp2[11]).ShopBlockType.GAME_SERVER_HOSTING_BANNER === type) {
        return closure_1_6.fromServer(type);
      }
    });
    obj.shopBlocks = mapped.filter((item) => undefined !== item);
    const categories = shop_blocks.categories;
    obj.categories = categories.map((item) => CollectiblesCategoryRecord.fromServer(item));
    return obj;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/records/CollectiblesShopHomeRecord.tsx");

export const CollectiblesShopHomeRecord = prototype;
