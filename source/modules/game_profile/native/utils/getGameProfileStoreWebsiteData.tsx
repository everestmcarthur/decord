// Module ID: 8698
// Function ID: 8699
// Name: getGameProfileStoreWebsiteData
// Dependencies: [19, 21, 8694, 8699, 8691, 1114, 8701, 8703, 8705, 8707, 8709, 8713, 2]
// Exports: default

// Module 8698 (getGameProfileStoreWebsiteData)
import noopAll from "noop" /* 19 */;
import ThirdPartyGameApplicationWebsiteCategory from "ThirdPartyGameApplicationWebsiteCategory" /* 8694 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/game_profile/native/utils/getGameProfileStoreWebsiteData.tsx");

export default function getGameProfileStoreWebsiteData(category) {
  category = category.category;
  if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.STEAM === category) {
    let obj = { icon: null, action: null, title: null, url: null };
    obj[0] = jsx(tmp(8699).SteamNeutralIcon, { size: "md" });
    obj[1] = tmp(8691).GameProfileTrackActionActions.SteamStoreLink;
    const intl7 = tmp(1114).intl;
    obj[2] = intl7.string(tmp(1114).t.FsANs4);
    obj[3] = category.url;
    return obj;
  } else if (tmp(8694).ThirdPartyGameApplicationWebsiteCategory.EPICGAMES === category) {
    obj = { icon: null, action: null, title: null, url: null };
    obj[0] = jsx(tmp(8701).EpicGamesNeutralIcon, { size: "md" });
    obj[1] = tmp(8691).GameProfileTrackActionActions.EpicStoreLink;
    const intl6 = tmp(1114).intl;
    obj[2] = intl6.string(tmp(1114).t.ZbBMHa);
    obj[3] = category.url;
    return obj;
  } else if (tmp(8694).ThirdPartyGameApplicationWebsiteCategory.ROBLOX === category) {
    obj1 = { icon: null, action: null, title: null, url: null };
    obj1[0] = jsx(tmp(8703).RobloxNeutralIcon, { size: "md" });
    obj1[1] = tmp(8691).GameProfileTrackActionActions.RobloxStoreLink;
    const intl5 = tmp(1114).intl;
    obj1[2] = intl5.string(tmp(1114).t["pJ+P+h"]);
    obj1[3] = category.url;
    return obj1;
  } else if (tmp(8694).ThirdPartyGameApplicationWebsiteCategory.BATTLENET === category) {
    const obj2 = { icon: null, action: null, title: null, url: null };
    obj2[0] = jsx(tmp(8705).BattlenetNeutralIcon, { size: "md" });
    obj2[1] = tmp(8691).GameProfileTrackActionActions.BattlenetStoreLink;
    const intl4 = tmp(1114).intl;
    obj2[2] = intl4.string(tmp(1114).t["A7grp+"]);
    obj2[3] = category.url;
    return obj2;
  } else if (tmp(8694).ThirdPartyGameApplicationWebsiteCategory.RIOT === category) {
    const obj3 = { icon: null, action: null, title: null, url: null };
    obj3[0] = jsx(tmp(8707).RiotGamesNeutralIcon, { size: "md" });
    obj3[1] = tmp(8691).GameProfileTrackActionActions.RiotStoreLink;
    const intl3 = tmp(1114).intl;
    obj3[2] = intl3.string(tmp(1114).t.h6MapL);
    obj3[3] = category.url;
    return obj3;
  } else if (tmp(8694).ThirdPartyGameApplicationWebsiteCategory.MINECRAFT === category) {
    const obj4 = { icon: null, action: null, title: null, url: null };
    obj4[0] = jsx(tmp(8709).MinecraftNeutralIcon, { size: "md" });
    obj4[1] = tmp(8691).GameProfileTrackActionActions.MinecraftStoreLink;
    const intl2 = tmp(1114).intl;
    obj4[2] = intl2.string(tmp(1114).t["HZbmO+"]);
    obj4[3] = category.url;
    return obj4;
  } else if ("XBOX_GAME_PASS" === category) {
    obj = { icon: null, action: null, title: null, url: null };
    obj[0] = jsx(tmp(8713).XboxNeutralIcon, { size: "md" });
    obj[1] = tmp(8691).GameProfileTrackActionActions.XboxGamePassStoreLink;
    const intl = tmp(1114).intl;
    obj[2] = intl.string(tmp(1114).t["QpN/Iz"]);
    obj[3] = category.url;
    return obj;
  } else {
    return null;
  }
};
