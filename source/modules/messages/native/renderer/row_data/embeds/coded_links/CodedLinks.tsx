// Module ID: 13303
// Function ID: 13304
// Name: CodedLinks
// Dependencies: [32, 4246, 1979, 1371, 7762, 12033, 4594, 13304, 13305, 13315, 13317, 13310, 13319, 13312, 11573, 11901, 11624, 13320, 1369, 2]
// Exports: createCodedLinkEmbeds

// Module 13303 (CodedLinks)
import ApplicationCodedLink from "ApplicationCodedLink" /* 7762 */;
import _slicedToArray from "module_32" /* 32 */;
import LurkingStore from "LurkingStore" /* 4246 */;
import GuildStore from "GuildStore" /* 1979 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/CodedLinks.tsx");

export const createCodedLinkEmbeds = function createCodedLinkEmbeds(message, message2, channel, forcedTheme) {
  closure_1 = channel;
  const theme = forcedTheme;
  if (null != message.author) {
    if (0 !== message2.codedLinks.length) {
      let currentUser = UserStore.getCurrentUser();
      const codedLinks = message2.codedLinks;
      return codedLinks.map((item) => {
        ({ type, code, url } = item);
        if (obj.isApplicationCodedLink(type)) {
          if (null == closure_1) {
            return null;
          } else {
            if (tmpResult.isApplicationCodedLinkMobileSupported(type)) {
              const applicationCodedLinkData = tmp(7762).getApplicationCodedLinkData(type, code, url);
              if (null == applicationCodedLinkData) {
                return null;
              } else {
                const obj2 = { appId: applicationCodedLinkData.applicationId, channel: tmp34, message, theme };
                const appLinkGateResult = tmp(12033).getAppLinkGateResult(obj2);
                if ("unavailable" === appLinkGateResult.state) {
                  return null;
                } else if ("blocked" === appLinkGateResult.state) {
                  return appLinkGateResult.model;
                } else {
                  const app = appLinkGateResult.app;
                  const type2 = applicationCodedLinkData.type;
                  if (tmp(4594).CodedLinkType.ACTIVITY_BOOKMARK === type2) {
                    const obj3 = { theme: tmp38, embedUrl: url, message: tmp37, app, params: applicationCodedLinkData.params };
                    return tmp(13304).createActivityMessageEmbed(obj3);
                  } else {
                    if (tmp(4594).CodedLinkType.APP_DIRECTORY_PROFILE !== type2) {
                      if (tmp(4594).CodedLinkType.APP_OAUTH2_LINK !== type2) {
                        return null;
                      }
                    }
                    const obj4 = { theme: tmp38, embedUrl: url, message: tmp37, app };
                    return tmp(12033).createAppMessageEmbed(obj4);
                  }
                }
                const tmpResult19 = tmp(12033);
              }
              const tmpResult18 = tmp(7762);
            } else {
              return null;
            }
            tmpResult = tmp(7762);
          }
        } else if (tmp(4594).CodedLinkType.INVITE === type) {
          return tmp(13305).createInviteEmbed(message, code, theme);
        } else if (tmp(4594).CodedLinkType.TEMPLATE === type) {
          return tmp(13315).createGuildTemplateEmbed(code, theme);
        } else if (tmp(4594).CodedLinkType.BUILD_OVERRIDE === type) {
          return tmp(13317).createBuildOverrideEmbed(code, theme);
        } else if (tmp(4594).CodedLinkType.MANUAL_BUILD_OVERRIDE === type) {
          currentUser = UserStore.getCurrentUser();
          let isStaffResult;
          if (currentUser != null) {
            isStaffResult = currentUser.isStaff();
          }
          if (!isStaffResult) {
            const currentUser1 = UserStore.getCurrentUser();
            let isStaffPersonalResult;
            if (currentUser1 != null) {
              isStaffPersonalResult = currentUser1.isStaffPersonal();
            }
            isStaffResult = isStaffPersonalResult;
          }
          if (!isStaffResult) {
            let tmp26 = null != GuildStore.getGuild("943265993613008967");
            if (tmp26) {
              tmp26 = !LurkingStore.isLurking("943265993613008967");
            }
            isStaffResult = tmp26;
          }
          let buildOverrideEmbed = null;
          if (isStaffResult) {
            buildOverrideEmbed = tmp(13317).createBuildOverrideEmbed(code, theme);
            const tmpResult25 = tmp(13317);
          }
          return buildOverrideEmbed;
        } else if (tmp(4594).CodedLinkType.EVENT === type) {
          return tmp(13310).createGuildScheduledEventLinkEmbed(code, theme);
        } else if (tmp(4594).CodedLinkType.CHANNEL_LINK === type) {
          return tmp(13319).createVoiceChannelLinkEmbed(code, theme);
        } else if (tmp(4594).CodedLinkType.EMBEDDED_ACTIVITY_INVITE === type) {
          const obj5 = { theme, inviteCode: code };
          return tmp(13312).createEmbeddedActivityInviteEmbed(obj5);
        } else if (tmp(4594).CodedLinkType.EXPERIMENT === type) {
          let experimentEmbed = null;
          if (tmpResult29.canSeeExperimentEmbeds()) {
            experimentEmbed = tmp(11901).createExperimentEmbed(url, theme);
            const tmpResult30 = tmp(11901);
          }
          return experimentEmbed;
        } else {
          if (tmp(4594).CodedLinkType.GUILD_PRODUCT !== type) {
            if (tmp(4594).CodedLinkType.SERVER_SHOP !== type) {
              if (tmp(4594).CodedLinkType.SOCIAL_LAYER_STOREFRONT !== type) {
                if (tmp(4594).CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP !== type) {
                  if (tmp(4594).CodedLinkType.QUESTS_EMBED === type) {
                    const obj6 = { theme, questId: code, currentUser };
                    return tmp(13320).createQuestsEmbed(obj6);
                  } else {
                    if (tmp(4594).CodedLinkType.COLLECTIBLES_SHOP !== type) {
                      if (tmp(4594).CodedLinkType.GAME_PROFILE !== type) {
                        if (tmp(4594).CodedLinkType.GAME_SERVER_SHARE !== type) {
                          if (tmp(4594).CodedLinkType.USER_PROFILE !== type) {
                            return tmp(1369).assertNever(type);
                          }
                        }
                      }
                    }
                    return null;
                  }
                }
              }
              if (type === tmp(4594).CodedLinkType.SOCIAL_LAYER_STOREFRONT_APP) {
                [tmp13, tmp14] = code.split("-");
                const tmp12 = _slicedToArray(code.split("-"), 2);
                const obj7 = { skuId: tmp13, guildOrApplication: null, theme: null };
                const obj8 = { type: "application", applicationId: tmp14 };
                obj7.guildOrApplication = obj8;
                obj7.theme = theme;
                return tmp(11624).createSocialLayerStorefrontProductDetailsEmbed(obj7);
              } else {
                [tmp8, tmp9] = code.split("-");
                const tmp7 = _slicedToArray(code.split("-"), 2);
                const obj9 = { skuId: tmp8, guildOrApplication: null, theme: null };
                const obj10 = { type: "guild", guildId: tmp9 };
                obj9.guildOrApplication = obj10;
                obj9.theme = theme;
                return tmp(11624).createSocialLayerStorefrontProductDetailsEmbed(obj9);
              }
            }
          }
          return null;
        }
        obj = ApplicationCodedLink;
      });
    }
  }
  return [];
};
