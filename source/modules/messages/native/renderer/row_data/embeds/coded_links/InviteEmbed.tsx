// Module ID: 13282
// Function ID: 13283
// Name: InviteEmbed
// Dependencies: [4589, 1371, 1074, 7787, 13283, 7786, 13285, 13286, 13287, 13289, 13291, 11378, 11379, 2]
// Exports: createInviteEmbed

// Module 13282 (InviteEmbed)
import InviteTypeUtils from "InviteTypeUtils" /* 7786 */;
import invite_GuildInvite from "invite/GuildInvite" /* 13283 */;
import InviteStore from "InviteStore" /* 4589 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const Constants = fn(1074);
({ InviteStates: closure_4, AbortCodes: hasOwnProperty } = Constants);
const InviteTypes = fn(7787).InviteTypes;
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
              return tmp29(13285).createGroupDMInvite(invite, tmp28, theme);
            } else if (tmp32.FRIEND === inviteType) {
              const tmp29Result10 = tmp29(13286);
              return tmp29Result10.createFriendInvite(invite, tmp28, id, theme);
            } else {
              const guildInviteExtendedType = tmp29(7786).getGuildInviteExtendedType(invite);
              if (tmp29(7786).GuildInviteExtendedType.EVENT === guildInviteExtendedType) {
                return tmp29(13287).createGuildScheduledEventInviteEmbed(invite, theme);
              } else if (tmp29(7786).GuildInviteExtendedType.APPLICATION === guildInviteExtendedType) {
                const obj2 = { inviteCode: invite.code, theme };
                return tmp29(13289).createEmbeddedActivityInviteEmbed(obj2);
              } else if (tmp29(7786).GuildInviteExtendedType.PROFILE === guildInviteExtendedType) {
                return tmp29(13291).createGuildProfileInvite(invite, theme);
              } else if (tmp29(7786).GuildInviteExtendedType.VOICE_CHANNEL === guildInviteExtendedType) {
                const guild = invite.guild;
                let id1;
                if (guild != null) {
                  id1 = guild.id;
                }
                if (null != id1) {
                  const obj3 = { guildId: id1, location: "mobile_invite_embed" };
                  if (tmp29Result15.getVoiceChannelListInviteExperiment(obj3).enabled) {
                    const voiceChannelListInviteEmbed = tmp29(11379).createVoiceChannelListInviteEmbed(invite, theme);
                    if (null != voiceChannelListInviteEmbed) {
                      return voiceChannelListInviteEmbed;
                    }
                    const tmp29Result16 = tmp29(11379);
                  }
                  tmp29Result15 = tmp29(11378);
                }
                return tmp29(13283).createGuildInvite(invite, tmp28, theme);
              } else {
                return tmp29(13283).createGuildInvite(invite, tmp28, theme);
              }
              const tmp29Result11 = tmp29(7786);
            }
          }
        }
      }
      return invite_GuildInvite.createExpiredGuildInvite(author, id === tmp4, theme);
    }
  }
  obj = InviteStore;
};
