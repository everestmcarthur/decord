// Module ID: 7643
// Function ID: 7644
// Name: CollectiblesShopHomeRecord
// Dependencies: [7616, 7644, 7646, 7649, 7650, 7651, 7652, 7653, 7654, 7655, 7656, 7645, 2]

// Module 7643 (CollectiblesShopHomeRecord)
import ShopBlockType from "ShopBlockType" /* 7645 */;
import CollectiblesCategoryRecord from "CollectiblesCategoryRecord" /* 7616 */;

require = fn;
const CountdownTimerBlockRecord = fn(7644).CountdownTimerBlockRecord;
const FeaturedBlockRecord = fn(7646).FeaturedBlockRecord;
const FeedBlockRecord = fn(7649).FeedBlockRecord;
let closure_6 = fn(7650).GameServerHostingBannerBlockRecord;
const HeroBlockRecord = fn(7651).HeroBlockRecord;
let closure_8 = fn(7652).ImmersiveBannerBlockRecord;
const RewardHeroBlockRecord = fn(7653).RewardHeroBlockRecord;
const ShelfBlockRecord = fn(7654).ShelfBlockRecord;
let closure_11 = fn(7655).SocialLayerStorefrontPromotionalBannerBlockRecord;
const WideBannerBlockRecord = fn(7656).WideBannerBlockRecord;
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
