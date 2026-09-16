// Module ID: 11757
// Function ID: 11758
// Name: handleAcceptEventInstantInvite
// Dependencies: [7636, 10433, 7849, 8508, 9838, 2]
// Exports: default

// Module 11757 (handleAcceptEventInstantInvite)
import InstantInviteActionCreatorsDefault from "InstantInviteActionCreators" /* 8508 */;
import GuildScheduledEventModalActionCreators from "GuildScheduledEventModalActionCreators" /* 9838 */;
import GuildScheduledEventStore from "GuildScheduledEventStore" /* 7636 */;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_scheduled_events/native/handleAcceptEventInstantInvite.tsx");

export default function handleAcceptEventInstantInvite(code) {
  if (!obj.handleNSFWGuildInvite(code)) {
    if (tmpResult.isGuildScheduledEventInviteEmbed(code)) {
      if (null != code.code) {
        const guild_scheduled_event = code.guild_scheduled_event;
        let id;
        if (guild_scheduled_event != null) {
          id = guild_scheduled_event.id;
        }
        const guildScheduledEvent = GuildScheduledEventStore.getGuildScheduledEvent(id);
        if (null != guildScheduledEvent) {
          const obj2 = {
            inviteKey: code.code,
            context: { location: "Guild Scheduled Event Invite Button Embed" },
            callback() {
                      const result = GuildScheduledEventModalActionCreators.transitionToEventDetailsFromInvite(guildScheduledEvent);
                    }
          };
          InstantInviteActionCreatorsDefault.acceptInvite(obj2);
        }
      }
    }
    tmpResult = guildScheduledEvent(7849);
  }
};
