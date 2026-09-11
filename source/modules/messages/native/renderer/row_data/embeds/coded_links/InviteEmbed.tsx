// Module ID: 13305
// Function ID: 13306
// Name: InviteEmbed
// Dependencies: [4590, 1371, 1074, 7808, 13306, 7807, 13308, 13309, 13310, 13312, 13314, 11400, 11401, 2]
// Exports: createInviteEmbed

// Module 13305 (InviteEmbed)
import InviteTypeUtils from "InviteTypeUtils" /* 7807 */;
import invite_GuildInvite from "invite/GuildInvite" /* 13306 */;
import InviteStore from "InviteStore" /* 4590 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const Constants = fn(1074);
({ InviteStates: closure_4, AbortCodes: hasOwnProperty } = Constants);
const InviteTypes = fn(7808).InviteTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/coded_links/InviteEmbed.tsx");

export const createInviteEmbed = function createInviteEmbed(author, code, theme) {
  const invite = InviteStore.getInvite(code);
  if (null == invite) {
    return null;
  } else {
    const currentUser = UserStore.getCurrentUser();
    if (currentUser != null) {
      const id = currentUser.id;
    }
    if (invite.state === constants.RESOLVING) {
      return invite_GuildInvite.createResolvingGuildInvite(theme);
    } else {
      if (invite.state !== tmp5.EXPIRED) {
        if (invite.state !== tmp5.BANNED) {
          if (invite.state === tmp5.ERROR) {
            const inviteError = obj.getInviteError(code);
            if (null == inviteError) {
              let erroredGuildInvite = invite_GuildInvite.createErroredGuildInvite(code, tmp28, theme);
            } else if (inviteError.code === constants2.INVITES_DISABLED) {
              erroredGuildInvite = invite_GuildInvite.createDisabledGuildInvite(invite, theme);
            } else {
              erroredGuildInvite = invite_GuildInvite.createErroredGuildInvite(code, tmp28, theme);
            }
            return erroredGuildInvite;
          } else {
            const inviteType = InviteTypeUtils.getInviteType(invite);
            if (InviteTypes.GROUP_DM === inviteType) {
              return tmp29(13308).createGroupDMInvite(invite, tmp28, theme);
            } else if (tmp32.FRIEND === inviteType) {
              const tmp29Result10 = tmp29(13309);
              return tmp29Result10.createFriendInvite(invite, tmp28, id, theme);
            } else {
              const guildInviteExtendedType = tmp29(7807).getGuildInviteExtendedType(invite);
              if (tmp29(7807).GuildInviteExtendedType.EVENT === guildInviteExtendedType) {
                return tmp29(13310).createGuildScheduledEventInviteEmbed(invite, theme);
              } else if (tmp29(7807).GuildInviteExtendedType.APPLICATION === guildInviteExtendedType) {
                const obj2 = { inviteCode: invite.code, theme };
                return tmp29(13312).createEmbeddedActivityInviteEmbed(obj2);
              } else if (tmp29(7807).GuildInviteExtendedType.PROFILE === guildInviteExtendedType) {
                return tmp29(13314).createGuildProfileInvite(invite, theme);
              } else if (tmp29(7807).GuildInviteExtendedType.VOICE_CHANNEL === guildInviteExtendedType) {
                const guild = invite.guild;
                let id1;
                if (guild != null) {
                  id1 = guild.id;
                }
                if (null != id1) {
                  const obj3 = { guildId: id1, location: "mobile_invite_embed" };
                  if (tmp29Result15.getVoiceChannelListInviteExperiment(obj3).enabled) {
                    const voiceChannelListInviteEmbed = tmp29(11401).createVoiceChannelListInviteEmbed(invite, theme);
                    if (null != voiceChannelListInviteEmbed) {
                      return voiceChannelListInviteEmbed;
                    }
                    const tmp29Result16 = tmp29(11401);
                  }
                  tmp29Result15 = tmp29(11400);
                }
                return tmp29(13306).createGuildInvite(invite, tmp28, theme);
              } else {
                return tmp29(13306).createGuildInvite(invite, tmp28, theme);
              }
              const tmp29Result11 = tmp29(7807);
            }
          }
        }
      }
      return invite_GuildInvite.createExpiredGuildInvite(author, id === tmp4, theme);
    }
  }
  obj = InviteStore;
};
