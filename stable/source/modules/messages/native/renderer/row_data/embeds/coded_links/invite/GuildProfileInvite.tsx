// Module ID: 13221
// Function ID: 13222
// Name: GuildProfileInvite
// Dependencies: [32, 2025, 11314, 1074, 7736, 7946, 5548, 4411, 576, 1971, 9198, 9196, 1396, 1926, 1878, 1114, 9211, 8747, 7737, 11, 2019, 7187, 1091, 7937, 7947, 2]
// Exports: createGuildProfileInvite

// Module 13221 (GuildProfileInvite)
import nativeDefault from "native" /* 576 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1091 */;
import GuildRoleUtils from "GuildRoleUtils" /* 2019 */;
import guild_boosting_RoleIconUtils from "guild_boosting/RoleIconUtils" /* 7187 */;
import RowGeneratorStyleSheet from "RowGeneratorStyleSheet" /* 7937 */;
import getEmbedThemeColorsDefault from "getEmbedThemeColors" /* 7946 */;
import _slicedToArray from "module_32" /* 32 */;
import LocaleStore from "LocaleStore" /* 2025 */;

require = fn;
const CodedLinkExtendedType = fn(11314).CodedLinkExtendedType;
const GuildFeatures = fn(1074).GuildFeatures;
const InviteTypes = fn(7736).InviteTypes;
const size = fn(2);
let result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/invite/GuildProfileInvite.tsx");

export const createGuildProfileInvite = function createGuildProfileInvite(invite, theme) {
  const tmp3 = getEmbedThemeColorsDefault(theme);
  const guildProfileFromInvite = id(5548).buildGuildProfileFromInvite(invite);
  let obj = id(5548);
  let obj2 = id(4411);
  const unsafe_rawColors = nativeDefault.unsafe_rawColors;
  let fromGuildProfileResult = null;
  const isThemeDarkResult = id(4411).isThemeDark(theme);
  if (null != guildProfileFromInvite) {
    fromGuildProfileResult = tmp4(1971).fromGuildProfile(guildProfileFromInvite);
    const tmp4Result = tmp4(1971);
  }
  const tmp7 = id(4411).isThemeDark(theme) ? unsafe_rawColors.PRIMARY_660 : unsafe_rawColors.PRIMARY_160;
  let profilePrimaryColor = id(9198).getProfilePrimaryColor(guildProfileFromInvite);
  const tmp4Result10 = id(9198);
  if (profilePrimaryColor == null) {
    profilePrimaryColor = tmp7;
  }
  const tmp4Result11 = id(9196);
  let memberCount;
  [tmp11, tmp12] = id(9196).getBackgroundForProfile(theme, profilePrimaryColor);
  if (guildProfileFromInvite != null) {
    memberCount = guildProfileFromInvite.memberCount;
  }
  if (memberCount == null) {
    memberCount = invite.approximate_member_count;
  }
  let onlineCount;
  if (guildProfileFromInvite != null) {
    onlineCount = guildProfileFromInvite.onlineCount;
  }
  if (onlineCount == null) {
    onlineCount = invite.approximate_presence_count;
  }
  let icon;
  if (guildProfileFromInvite != null) {
    icon = guildProfileFromInvite.icon;
  }
  if (null != icon) {
    ({ id: obj8.id, icon: obj8.icon } = guildProfileFromInvite);
    const guildIconURL = tmp(1396).getGuildIconURL({ id: null, icon: null, canAnimate: true, size: 128 });
    let obj3 = { id: null, icon: null, canAnimate: true, size: 128 };
    let tmpResult = tmp(1396);
  } else {
    let str;
    if (guildProfileFromInvite != null) {
      str = guildProfileFromInvite.name;
    }
    if (str == null) {
      str = "";
    }
    const acronym = tmp4(1926).getAcronym(str);
    const tmp4Result12 = tmp4(1926);
  }
  let hasItem;
  if (fromGuildProfileResult != null) {
    const features = fromGuildProfileResult.features;
    hasItem = features.has(GuildFeatures.DISCOVERABLE);
  }
  let tmp20;
  if (hasItem) {
    let customBanner;
    if (guildProfileFromInvite != null) {
      customBanner = guildProfileFromInvite.customBanner;
    }
    if (null != customBanner) {
      let obj4 = { id: null, splash: null, size: null };
      ({ id: obj10.id, customBanner: obj10.splash } = guildProfileFromInvite);
      obj4.size = 400 * tmp(1878)();
      const guildDiscoverySplashURL = tmp(1396).getGuildDiscoverySplashURL(obj4);
      tmp20 = guildDiscoverySplashURL;
      const tmpResult3 = tmp(1396);
    }
  }
  let tmp23 = null != memberCount;
  if (tmp23) {
    tmp23 = memberCount >= 5;
  }
  if (!tmp23) {
    let tmp24 = null != onlineCount;
    if (tmp24) {
      tmp24 = onlineCount > 0;
    }
    tmp23 = tmp24;
  }
  let tmp25;
  let tmp26;
  if (tmp23) {
    let formatToPlainStringResult;
    if (null != onlineCount) {
      let intl = tmp4(1114).intl;
      let obj5 = { membersOnline: onlineCount };
      formatToPlainStringResult = intl.formatToPlainString(tmp4(1114).t["LC+S+m"], obj5);
    }
    let formatToPlainStringResult1;
    if (null != memberCount) {
      const intl2 = tmp4(1114).intl;
      const obj6 = { count: memberCount };
      formatToPlainStringResult1 = intl2.formatToPlainString(tmp4(1114).t.zRl6XR, obj6);
    }
    tmp25 = formatToPlainStringResult1;
    tmp26 = formatToPlainStringResult;
  }
  let guildProfileCTAType = null;
  if (null != guildProfileFromInvite) {
    guildProfileCTAType = tmp4(9211).getGuildProfileCTAType(guildProfileFromInvite, invite.code);
    const tmp4Result13 = tmp4(9211);
  }
  if (id(9211).CTATypes.IS_MEMBER === guildProfileCTAType) {
    const intl7 = tmp4(1114).intl;
    let stringResult = intl7.string(tmp4(1114).t.IRoQXr);
  } else if (tmp4(9211).CTATypes.HAS_APPLICATION === guildProfileCTAType) {
    const intl6 = tmp4(1114).intl;
    stringResult = intl6.string(tmp4(1114).t["4yfIDk"]);
  } else if (tmp4(9211).CTATypes.APPLY_TO_JOIN === guildProfileCTAType) {
    const intl5 = tmp4(1114).intl;
    stringResult = intl5.string(tmp4(1114).t["7XdMW2"]);
  } else if (tmp4(9211).CTATypes.ACCEPT_ROLES === guildProfileCTAType) {
    const intl4 = tmp4(1114).intl;
    stringResult = intl4.string(tmp4(1114).t.MMlhsr);
  } else {
    if (tmp4(9211).CTATypes.LURK_DISCOVERABLE !== guildProfileCTAType) {
      const JOIN_VIA_INVITE = tmp4(9211).CTATypes.JOIN_VIA_INVITE;
    }
    const intl3 = tmp4(1114).intl;
    stringResult = intl3.string(tmp4(1114).t.XpeFYr);
  }
  let guildBadgeImageSource;
  if (null != fromGuildProfileResult) {
    guildBadgeImageSource = tmp4(8747).getGuildBadgeImageSource(fromGuildProfileResult, theme);
    const tmp4Result14 = tmp4(8747);
  }
  let found;
  if (guildProfileFromInvite != null) {
    const traits = guildProfileFromInvite.traits;
    if (traits != null) {
      found = traits.filter((label) => {
        let tmp = null != label;
        if (tmp) {
          tmp = label.label.trim().length > 0;
        }
        return tmp;
      });
    }
  }
  let formatToPlainStringResult2;
  if (null != guildProfileFromInvite) {
    const tmp4Result15 = tmp4(7737);
    const establishedDate = tmp4Result15.getEstablishedDate(tmp(11).extractTimestamp(guildProfileFromInvite.id), LocaleStore.locale);
    const intl8 = tmp4(1114).intl;
    const obj7 = { createdAtDate: establishedDate };
    formatToPlainStringResult2 = intl8.formatToPlainString(tmp4(1114).t.zb2Q56, obj7);
    const tmpResult4 = tmp(11);
  }
  let mapped;
  if (null != invite.roles) {
    if (invite.roles.length > 0) {
      if (null != invite.guild) {
        id = invite.guild.id;
        const items = [];
        HermesBuiltin.arraySpread(invite.roles, 0);
        const sorted = items.sort(tmp4(2019).sortInviteRoles);
        mapped = sorted.map((color) => {
          const result = GuildRoleUtils.inviteRoleToDisplayData(id, color);
          let roleIconData = guild_boosting_RoleIconUtils.getRoleIconData(result, 16);
          if (roleIconData == null) {
            roleIconData = {};
          }
          ({ customIconSrc, unicodeEmoji } = roleIconData);
          let num = color.color;
          if (num == null) {
            num = 0;
          }
          const tmpResult = utils_ColorUtils;
          if (null != customIconSrc) {
            const obj3 = { source: customIconSrc, unicodeEmoji: null, name: null, size: 16, alt: null };
            let surrogates;
            if (unicodeEmoji != null) {
              surrogates = unicodeEmoji.surrogates;
            }
            obj3.unicodeEmoji = surrogates;
            obj3.name = color.name;
            const intl = tmp(1114).intl;
            const obj4 = { name: color.name };
            obj3.alt = intl.formatToPlainString(tmp(1114).t["9+YWrE"], obj4);
            const tmp5 = obj3;
          }
          const obj5 = { id: color.id, name: color.name, color: null, roleIcon: null };
          const int2hexResult = utils_ColorUtils.int2hex(num);
          obj5.color = RowGeneratorStyleSheet.processColorOrThrow(int2hexResult);
          obj5.roleIcon = tmp5;
          return obj5;
        });
      }
    }
  }
  const obj9 = {};
  const merged = Object.assign(tmp3.baseColors);
  obj9.extendedType = CodedLinkExtendedType.GUILD_PROFILE_INVITE;
  obj9.acceptLabelText = stringResult;
  obj9.onlineText = tmp26;
  obj9.memberText = tmp25;
  let name;
  if (guildProfileFromInvite != null) {
    name = guildProfileFromInvite.name;
  }
  obj9.titleText = name;
  let tmp40;
  if (null != guildIconURL) {
    tmp40 = guildIconURL;
  }
  obj9.thumbnailUrl = tmp40;
  obj9.thumbnailText = acronym;
  let str2;
  if (guildProfileFromInvite != null) {
    str2 = guildProfileFromInvite.description;
  }
  if (str2 == null) {
    str2 = "";
  }
  obj9.bodyText = str2;
  obj9.embedCanBeTapped = true;
  obj9.canBeAccepted = true;
  let GUILD = invite.type;
  if (GUILD == null) {
    GUILD = InviteTypes.GUILD;
  }
  obj9.type = GUILD;
  obj9.inviteSplash = tmp20;
  const tmp10 = _slicedToArray(id(9196).getBackgroundForProfile(theme, profilePrimaryColor), 2);
  obj9.bannerColor = id(7937).processColorOrThrow(tmp11);
  const tmp4Result16 = id(7937);
  obj9.bannerColorSecondary = id(7937).processColorOrThrow(tmp12);
  if (found == null) {
    found = [];
  }
  let tmp42 = found.length > 0;
  if (!tmp42) {
    let gameApplicationIds;
    if (guildProfileFromInvite != null) {
      gameApplicationIds = guildProfileFromInvite.gameApplicationIds;
    }
    if (gameApplicationIds == null) {
      gameApplicationIds = [];
    }
    tmp42 = gameApplicationIds.length > 0;
  }
  obj9.hasProfileOverflow = tmp42;
  let assetUriForEmbed;
  if (null != guildBadgeImageSource) {
    assetUriForEmbed = tmp4(7947).getAssetUriForEmbed(guildBadgeImageSource);
    const tmp4Result18 = tmp4(7947);
  }
  obj9.badgeIconUrl = assetUriForEmbed;
  obj9.acceptLabelBackgroundColor = tmp3.colors.acceptLabelGreenBackgroundColor;
  obj9.establishedText = formatToPlainStringResult2;
  obj9.headerText = null;
  obj9.roles = mapped;
  let stringResult1;
  if (null != mapped) {
    if (mapped.length > 0) {
      const intl9 = tmp4(1114).intl;
      stringResult1 = intl9.string(tmp4(1114).t.stcSfI);
    }
  }
  obj9.rolesHeadingText = stringResult1;
  return obj9;
};
