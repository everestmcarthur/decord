// Module ID: 13970
// Function ID: 13971
// Name: badges/GuildBadge
// Dependencies: [19, 8019, 21, 13971, 13974, 13975, 13976, 13977, 13978, 13979, 13980, 13981, 13982, 13983, 13984, 13985, 13986, 13987, 13988, 13989, 13990, 13991, 13992, 13993, 13994, 13995, 13996, 13997, 13998, 13999, 14000, 14001, 14002, 14003, 14004, 14005, 14006, 14007, 14008, 14009, 14010, 14011, 14012, 14013, 2]
// Exports: GuildBadge

// Module 13970 (badges/GuildBadge)
import GuildBadgeSword from "GuildBadgeSword" /* 13971 */;
import GuildBadgeWaterDrop from "GuildBadgeWaterDrop" /* 13974 */;
import GuildBadgeSkull from "GuildBadgeSkull" /* 13975 */;
import GuildBadgeToadstool from "GuildBadgeToadstool" /* 13976 */;
import GuildBadgeMoon from "GuildBadgeMoon" /* 13977 */;
import GuildBadgeLightning from "GuildBadgeLightning" /* 13978 */;
import GuildBadgeLeaf from "GuildBadgeLeaf" /* 13979 */;
import GuildBadgeHeart from "GuildBadgeHeart" /* 13980 */;
import GuildBadgeFire from "GuildBadgeFire" /* 13981 */;
import GuildBadgeCompass from "GuildBadgeCompass" /* 13982 */;
import GuildBadgeCrosshairs from "GuildBadgeCrosshairs" /* 13983 */;
import GuildBadgeFlower from "GuildBadgeFlower" /* 13984 */;
import GuildBadgeForce from "GuildBadgeForce" /* 13985 */;
import GuildBadgeGem from "GuildBadgeGem" /* 13986 */;
import GuildBadgeLava from "GuildBadgeLava" /* 13987 */;
import GuildBadgePsychic from "GuildBadgePsychic" /* 13988 */;
import GuildBadgeSmoke from "GuildBadgeSmoke" /* 13989 */;
import GuildBadgeSnow from "GuildBadgeSnow" /* 13990 */;
import GuildBadgeSound from "GuildBadgeSound" /* 13991 */;
import GuildBadgeSun from "GuildBadgeSun" /* 13992 */;
import GuildBadgeWind from "GuildBadgeWind" /* 13993 */;
import GuildBadgeBunny from "GuildBadgeBunny" /* 13994 */;
import GuildBadgeDog from "GuildBadgeDog" /* 13995 */;
import GuildBadgeFrog from "GuildBadgeFrog" /* 13996 */;
import GuildBadgeGoat from "GuildBadgeGoat" /* 13997 */;
import GuildBadgeCat from "GuildBadgeCat" /* 13998 */;
import GuildBadgeDiamond from "GuildBadgeDiamond" /* 13999 */;
import GuildBadgeCrown from "GuildBadgeCrown" /* 14000 */;
import GuildBadgeTrophy from "GuildBadgeTrophy" /* 14001 */;
import GuildBadgeMoneyBag from "GuildBadgeMoneyBag" /* 14002 */;
import GuildBadgeDollarSign from "GuildBadgeDollarSign" /* 14003 */;
import GuildBadgeClover from "GuildBadgeClover" /* 14004 */;
import GuildBadgeBlossom from "GuildBadgeBlossom" /* 14005 */;
import GuildBadgePottedPlant from "GuildBadgePottedPlant" /* 14006 */;
import GuildBadgeMaple from "GuildBadgeMaple" /* 14007 */;
import GuildBadgeWiltedFlower from "GuildBadgeWiltedFlower" /* 14008 */;
import GuildBadgeButterfly from "GuildBadgeButterfly" /* 14009 */;
import GuildBadgeSnail from "GuildBadgeSnail" /* 14010 */;
import GuildBadgeCaterpillar from "GuildBadgeCaterpillar" /* 14011 */;
import GuildBadgeSpider from "GuildBadgeSpider" /* 14012 */;
import GuildBadgeBee from "GuildBadgeBee" /* 14013 */;
import noop from "module_19" /* 19 */;

require = fn;
const GuildTagBadgeKind = fn(8019).GuildTagBadgeKind;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_tag/native/badges/GuildBadge.tsx");

export const GuildBadge = function GuildBadge(arg0) {
  ({ badge, primaryTintColor, secondaryTintColor } = arg0);
  const merged = Object.assign(arg0, Object.assign({ badge: 0, primaryTintColor: 0, secondaryTintColor: 0 }));
  if (GuildTagBadgeKind.SWORD === badge) {
    const obj2 = { primaryTintColor, secondaryTintColor };
    const merged1 = Object.assign(merged);
    return jsx(GuildBadgeSword.GuildBadgeSword, { primaryTintColor, secondaryTintColor });
  } else if (tmp2.WATER_DROP === badge) {
    const obj3 = { primaryTintColor };
    const merged2 = Object.assign(merged);
    return jsx(GuildBadgeWaterDrop.GuildBadgeWaterDrop, { primaryTintColor });
  } else if (tmp2.SKULL === badge) {
    const obj4 = { primaryTintColor };
    const merged3 = Object.assign(merged);
    return jsx(GuildBadgeSkull.GuildBadgeSkull, { primaryTintColor });
  } else if (tmp2.TOADSTOOL === badge) {
    const obj5 = { primaryTintColor, secondaryTintColor };
    const merged4 = Object.assign(merged);
    return jsx(GuildBadgeToadstool.GuildBadgeToadstool, { primaryTintColor, secondaryTintColor });
  } else if (tmp2.MOON === badge) {
    const obj6 = { primaryTintColor };
    const merged5 = Object.assign(merged);
    return jsx(GuildBadgeMoon.GuildBadgeMoon, { primaryTintColor });
  } else if (tmp2.LIGHTNING === badge) {
    const obj7 = { primaryTintColor };
    const merged6 = Object.assign(merged);
    return jsx(GuildBadgeLightning.GuildBadgeLightning, { primaryTintColor });
  } else if (tmp2.LEAF === badge) {
    const obj8 = { primaryTintColor };
    const merged7 = Object.assign(merged);
    return jsx(GuildBadgeLeaf.GuildBadgeLeaf, { primaryTintColor });
  } else if (tmp2.HEART === badge) {
    const obj9 = { primaryTintColor };
    const merged8 = Object.assign(merged);
    return jsx(GuildBadgeHeart.GuildBadgeHeart, { primaryTintColor });
  } else if (tmp2.FIRE === badge) {
    const obj10 = { primaryTintColor };
    const merged9 = Object.assign(merged);
    return jsx(GuildBadgeFire.GuildBadgeFire, { primaryTintColor });
  } else if (tmp2.COMPASS === badge) {
    const obj11 = { primaryTintColor, secondaryTintColor };
    const merged10 = Object.assign(merged);
    return jsx(GuildBadgeCompass.GuildBadgeCompass, { primaryTintColor, secondaryTintColor });
  } else if (tmp2.CROSSHAIRS === badge) {
    const obj12 = { primaryTintColor, secondaryTintColor };
    const merged11 = Object.assign(merged);
    return jsx(GuildBadgeCrosshairs.GuildBadgeCrosshairs, { primaryTintColor, secondaryTintColor });
  } else if (tmp2.FLOWER === badge) {
    const obj13 = { primaryTintColor, secondaryTintColor };
    const merged12 = Object.assign(merged);
    return jsx(GuildBadgeFlower.GuildBadgeFlower, { primaryTintColor, secondaryTintColor });
  } else if (tmp2.FORCE === badge) {
    const obj14 = { primaryTintColor, secondaryTintColor };
    const merged13 = Object.assign(merged);
    return jsx(GuildBadgeForce.GuildBadgeForce, { primaryTintColor, secondaryTintColor });
  } else if (tmp2.GEM === badge) {
    const obj15 = { primaryTintColor, secondaryTintColor };
    const merged14 = Object.assign(merged);
    return jsx(GuildBadgeGem.GuildBadgeGem, { primaryTintColor, secondaryTintColor });
  } else if (tmp2.LAVA === badge) {
    const obj16 = { primaryTintColor, secondaryTintColor };
    const merged15 = Object.assign(merged);
    return jsx(GuildBadgeLava.GuildBadgeLava, { primaryTintColor, secondaryTintColor });
  } else if (tmp2.PSYCHIC === badge) {
    const obj17 = { primaryTintColor, secondaryTintColor };
    const merged16 = Object.assign(merged);
    return jsx(GuildBadgePsychic.GuildBadgePsychic, { primaryTintColor, secondaryTintColor });
  } else if (tmp2.SMOKE === badge) {
    const obj18 = { primaryTintColor, secondaryTintColor };
    const merged17 = Object.assign(merged);
    return jsx(GuildBadgeSmoke.GuildBadgeSmoke, { primaryTintColor, secondaryTintColor });
  } else if (tmp2.SNOW === badge) {
    const obj19 = { primaryTintColor, secondaryTintColor };
    const merged18 = Object.assign(merged);
    return jsx(GuildBadgeSnow.GuildBadgeSnow, { primaryTintColor, secondaryTintColor });
  } else if (tmp2.SOUND === badge) {
    const obj20 = { primaryTintColor, secondaryTintColor };
    const merged19 = Object.assign(merged);
    return jsx(GuildBadgeSound.GuildBadgeSound, { primaryTintColor, secondaryTintColor });
  } else if (tmp2.SUN === badge) {
    const obj21 = { primaryTintColor, secondaryTintColor };
    const merged20 = Object.assign(merged);
    return jsx(GuildBadgeSun.GuildBadgeSun, { primaryTintColor, secondaryTintColor });
  } else if (tmp2.WIND === badge) {
    const obj22 = { primaryTintColor, secondaryTintColor };
    const merged21 = Object.assign(merged);
    return jsx(GuildBadgeWind.GuildBadgeWind, { primaryTintColor, secondaryTintColor });
  } else if (tmp2.BUNNY === badge) {
    const obj23 = { primaryTintColor };
    const merged22 = Object.assign(merged);
    return jsx(GuildBadgeBunny.GuildBadgeBunny, { primaryTintColor });
  } else if (tmp2.DOG === badge) {
    const obj24 = { primaryTintColor, secondaryTintColor };
    const merged23 = Object.assign(merged);
    return jsx(GuildBadgeDog.GuildBadgeDog, { primaryTintColor, secondaryTintColor });
  } else if (tmp2.FROG === badge) {
    const obj25 = { primaryTintColor, secondaryTintColor };
    const merged24 = Object.assign(merged);
    return jsx(GuildBadgeFrog.GuildBadgeFrog, { primaryTintColor, secondaryTintColor });
  } else if (tmp2.GOAT === badge) {
    const obj26 = { primaryTintColor };
    const merged25 = Object.assign(merged);
    return jsx(GuildBadgeGoat.GuildBadgeGoat, { primaryTintColor });
  } else if (tmp2.CAT === badge) {
    const obj27 = { primaryTintColor };
    const merged26 = Object.assign(merged);
    return jsx(GuildBadgeCat.GuildBadgeCat, { primaryTintColor });
  } else if (tmp2.DIAMOND === badge) {
    const obj28 = { primaryTintColor };
    const merged27 = Object.assign(merged);
    return jsx(GuildBadgeDiamond.GuildBadgeDiamond, { primaryTintColor });
  } else if (tmp2.CROWN === badge) {
    const obj29 = { primaryTintColor, secondaryTintColor };
    const merged28 = Object.assign(merged);
    return jsx(GuildBadgeCrown.GuildBadgeCrown, { primaryTintColor, secondaryTintColor });
  } else if (tmp2.TROPHY === badge) {
    const obj30 = { primaryTintColor };
    const merged29 = Object.assign(merged);
    return jsx(GuildBadgeTrophy.GuildBadgeTrophy, { primaryTintColor });
  } else if (tmp2.MONEY_BAG === badge) {
    const obj31 = { primaryTintColor };
    const merged30 = Object.assign(merged);
    return jsx(GuildBadgeMoneyBag.GuildBadgeMoneyBag, { primaryTintColor });
  } else if (tmp2.DOLLAR_SIGN === badge) {
    const obj32 = { primaryTintColor };
    const merged31 = Object.assign(merged);
    return jsx(GuildBadgeDollarSign.GuildBadgeDollarSign, { primaryTintColor });
  } else if (tmp2.CLOVER === badge) {
    const obj33 = { primaryTintColor };
    const merged32 = Object.assign(merged);
    return jsx(GuildBadgeClover.GuildBadgeClover, { primaryTintColor });
  } else if (tmp2.BLOSSOM === badge) {
    const obj34 = { primaryTintColor };
    const merged33 = Object.assign(merged);
    return jsx(GuildBadgeBlossom.GuildBadgeBlossom, { primaryTintColor });
  } else if (tmp2.POTTED_PLANT === badge) {
    const obj35 = { primaryTintColor, secondaryTintColor };
    const merged34 = Object.assign(merged);
    return jsx(GuildBadgePottedPlant.GuildBadgePottedPlant, { primaryTintColor, secondaryTintColor });
  } else if (tmp2.MAPLE === badge) {
    const obj36 = { primaryTintColor };
    const merged35 = Object.assign(merged);
    return jsx(GuildBadgeMaple.GuildBadgeMaple, { primaryTintColor });
  } else if (tmp2.WILTED_FLOWER === badge) {
    const obj37 = { primaryTintColor, secondaryTintColor };
    const merged36 = Object.assign(merged);
    return jsx(GuildBadgeWiltedFlower.GuildBadgeWiltedFlower, { primaryTintColor, secondaryTintColor });
  } else if (tmp2.BUTTERFLY === badge) {
    const obj38 = { primaryTintColor, secondaryTintColor };
    const merged37 = Object.assign(merged);
    return jsx(GuildBadgeButterfly.GuildBadgeButterfly, { primaryTintColor, secondaryTintColor });
  } else if (tmp2.SNAIL === badge) {
    const obj39 = { primaryTintColor, secondaryTintColor };
    const merged38 = Object.assign(merged);
    return jsx(GuildBadgeSnail.GuildBadgeSnail, { primaryTintColor, secondaryTintColor });
  } else if (tmp2.CATERPILLAR === badge) {
    const obj40 = { primaryTintColor, secondaryTintColor };
    const merged39 = Object.assign(merged);
    return jsx(GuildBadgeCaterpillar.GuildBadgeCaterpillar, { primaryTintColor, secondaryTintColor });
  } else if (tmp2.SPIDER === badge) {
    const obj41 = { primaryTintColor, secondaryTintColor };
    const merged40 = Object.assign(merged);
    return jsx(GuildBadgeSpider.GuildBadgeSpider, { primaryTintColor, secondaryTintColor });
  } else if (tmp2.BEE === badge) {
    const obj = { primaryTintColor };
    const merged41 = Object.assign(merged);
    return jsx(GuildBadgeBee.GuildBadgeBee, { primaryTintColor });
  } else {
    return null;
  }
};
