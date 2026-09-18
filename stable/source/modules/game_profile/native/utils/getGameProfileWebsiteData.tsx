// Module ID: 8891
// Function ID: 8892
// Name: getGameProfileWebsiteData
// Dependencies: [21, 8695, 8892, 8692, 1114, 8100, 8894, 8102, 8104, 8896, 8898, 8900, 2]
// Exports: default

// Module 8891 (getGameProfileWebsiteData)
import jsxProd from "jsxProd" /* 21 */;
import ThirdPartyGameApplicationWebsiteCategory from "ThirdPartyGameApplicationWebsiteCategory" /* 8695 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/game_profile/native/utils/getGameProfileWebsiteData.tsx");

export default function getGameProfileWebsiteData(category, color) {
  category = category.category;
  if (ThirdPartyGameApplicationWebsiteCategory.ThirdPartyGameApplicationWebsiteCategory.OFFICIAL === category) {
    const obj2 = { icon: null, action: null, title: null, url: null };
    const obj3 = { size: "md", color };
    obj2.icon = jsx(tmp(8892).GlobeEarthIcon, { size: "md", color });
    obj2.action = tmp(8692).GameProfileTrackActionActions.WebsiteLink;
    const intl8 = tmp(1114).intl;
    obj2.title = intl8.string(tmp(1114).t.fOUKvg);
    obj2.url = category.url;
    return obj2;
  } else if (tmp(8695).ThirdPartyGameApplicationWebsiteCategory.TWITTER === category) {
    const obj4 = { icon: null, action: null, title: null, url: null };
    const obj5 = { size: "md", color };
    obj4.icon = jsx(tmp(8100).XNeutralIcon, { size: "md", color });
    obj4.action = tmp(8692).GameProfileTrackActionActions.XLink;
    const intl7 = tmp(1114).intl;
    obj4.title = intl7.string(tmp(1114).t.INic4y);
    obj4.url = category.url;
    return obj4;
  } else if (tmp(8695).ThirdPartyGameApplicationWebsiteCategory.YOUTUBE === category) {
    const obj6 = { icon: null, action: null, title: null, url: null };
    const obj7 = { size: "md", color };
    obj6.icon = jsx(tmp(8894).YoutubeNeutralIcon, { size: "md", color });
    obj6.action = tmp(8692).GameProfileTrackActionActions.YouTubeLink;
    const intl6 = tmp(1114).intl;
    obj6.title = intl6.string(tmp(1114).t.lNmxbE);
    obj6.url = category.url;
    return obj6;
  } else if (tmp(8695).ThirdPartyGameApplicationWebsiteCategory.FACEBOOK === category) {
    const obj8 = { icon: null, action: null, title: null, url: null };
    const obj9 = { size: "md", color };
    obj8.icon = jsx(tmp(8102).FacebookNeutralIcon, { size: "md", color });
    obj8.action = tmp(8692).GameProfileTrackActionActions.FacebookLink;
    const intl5 = tmp(1114).intl;
    obj8.title = intl5.string(tmp(1114).t.FjyREK);
    obj8.url = category.url;
    return obj8;
  } else if (tmp(8695).ThirdPartyGameApplicationWebsiteCategory.INSTAGRAM === category) {
    const obj10 = { icon: null, action: null, title: null, url: null };
    const obj11 = { size: "md", color };
    obj10.icon = jsx(tmp(8104).InstagramNeutralIcon, { size: "md", color });
    obj10.action = tmp(8692).GameProfileTrackActionActions.InstagramLink;
    const intl4 = tmp(1114).intl;
    obj10.title = intl4.string(tmp(1114).t["cgR+IK"]);
    obj10.url = category.url;
    return obj10;
  } else if (tmp(8695).ThirdPartyGameApplicationWebsiteCategory.BLUESKY === category) {
    const obj12 = { icon: null, action: null, title: null, url: null };
    const obj13 = { size: "md", color };
    obj12.icon = jsx(tmp(8896).BlueskyNeutralIcon, { size: "md", color });
    obj12.action = tmp(8692).GameProfileTrackActionActions.BlueskyLink;
    const intl3 = tmp(1114).intl;
    obj12.title = intl3.string(tmp(1114).t["D/PHq5"]);
    obj12.url = category.url;
    return obj12;
  } else if (tmp(8695).ThirdPartyGameApplicationWebsiteCategory.REDDIT === category) {
    const obj14 = { icon: null, action: null, title: null, url: null };
    const obj15 = { size: "md", color };
    obj14.icon = jsx(tmp(8898).RedditNeutralIcon, { size: "md", color });
    obj14.action = tmp(8692).GameProfileTrackActionActions.RedditLink;
    const intl2 = tmp(1114).intl;
    obj14.title = intl2.string(tmp(1114).t["Hgb+fc"]);
    obj14.url = category.url;
    return obj14;
  } else if (tmp(8695).ThirdPartyGameApplicationWebsiteCategory.TWITCH === category) {
    const obj = { icon: null, action: null, title: null, url: null };
    const obj16 = { size: "md", color };
    obj.icon = jsx(tmp(8900).TwitchNeutralIcon, { size: "md", color });
    obj.action = tmp(8692).GameProfileTrackActionActions.TwitchLink;
    const intl = tmp(1114).intl;
    obj.title = intl.string(tmp(1114).t["7xtz4G"]);
    obj.url = category.url;
    return obj;
  } else {
    return null;
  }
};
