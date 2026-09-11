// Module ID: 17631
// Function ID: 17632
// Name: AuditLogActionIcon
// Dependencies: [19, 17, 17621, 1074, 21, 4606, 576, 17632, 17605, 8848, 4561, 15009, 4549, 8755, 5140, 16811, 5148, 9876, 5124, 10203, 11307, 12621, 17634, 11200, 5122, 9526, 17636, 17637, 17638, 1178, 2]
// Exports: default

// Module 17631 (AuditLogActionIcon)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1178 */;
import ChatIcon from "ChatIcon" /* 5122 */;
import RobotIcon2 from "RobotIcon" /* 9526 */;
import _modDef17636 from "module_17636" /* 17636 */;
import _modDef17637 from "module_17637" /* 17637 */;
import _modDef17638 from "module_17638" /* 17638 */;
import noop from "module_19" /* 19 */;

require = fn;
function AuditIcons(action) {
  action = action.action;
  const tmp = closure_10();
  const tmp2 = hasOwnProperty(action);
  if (constants.CREATE === tmp2) {
    let tmp4 = _modDef17636;
  } else if (tmp3.UPDATE === tmp2) {
    tmp4 = _modDef17637;
  } else {
    tmp4 = null;
    if (tmp3.DELETE === tmp2) {
      tmp4 = _modDef17638;
    }
  }
  if (action === constants2.MESSAGE_DELETE) {
    let RobotIcon = ChatIcon.ChatIcon;
  } else {
    if (action !== tmp12.AUTO_MODERATION_BLOCK_MESSAGE) {
      if (action !== tmp12.AUTO_MODERATION_FLAG_TO_CHANNEL) {
        if (action !== tmp12.AUTO_MODERATION_USER_COMMUNICATION_DISABLED) {
          if (action !== tmp12.AUTO_MODERATION_QUARANTINE_USER) {
            RobotIcon = obj3[tmp11];
          }
        }
      }
    }
    RobotIcon = RobotIcon2.RobotIcon;
  }
  const obj = { style: tmp.actionImageContainer, children: null };
  const items = [React6(RobotIcon, { size: "custom", style: tmp.iconComponent }), , ];
  obj3 = { style: null };
  const items1 = [, ];
  ({ actionImageOverlay: arr2[0], actionImage: arr2[1] } = tmp);
  obj3.style = items1;
  items[1] = React6(View, obj3);
  items[2] = React6(native.Icon, { style: tmp.actionImage, source: tmp4, disableColor: true });
  obj.children = items;
  return React7(View, obj);
}
const View = fn(17).View;
const AuditLogRecord = fn(17621);
({ getTargetType: closure_4, getActionType: hasOwnProperty } = AuditLogRecord);
const Constants = fn(1074);
({ AuditLogTargetTypes, AuditLogActionTypes: metroRequire, AuditLogActions: closure_7 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4606);
const obj2 = { actionImageContainer: { height: 24, width: 24 }, actionImageOverlay: null, iconComponent: null, actionImage: null };
let size = { borderRadius: nativeDefault.radii.round, width: 13, height: 13, bottom: 0, right: 0, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj2.actionImageOverlay = size;
obj2.iconComponent = { width: 22, height: 22 };
obj2.actionImage = { position: "absolute" };
let closure_10 = createStyles.createStyles(obj2);
let obj3 = { [ALL]: fn(17632).ListBulletsIcon, [CHANNEL]: fn(17605).ChannelListIcon, [CHANNEL_OVERWRITE]: fn(17605).ChannelListIcon, [EMOJI]: fn(8848).ReactionIcon, [GUILD]: fn(4561).CircleInformationIcon, [GUILD_PROFILE]: fn(4561).CircleInformationIcon, [INTEGRATION]: fn(15009).PuzzlePieceIcon, [INVITE]: fn(4549).LinkIcon, [ROLE]: fn(8755).FlagIcon, [USER]: fn(5140).GroupIcon, [WEBHOOK]: fn(16811).WebhookIcon, [STAGE_INSTANCE]: fn(5148).StageIcon, [GUILD_SCHEDULED_EVENT]: fn(9876).CalendarIcon, [GUILD_SCHEDULED_EVENT_EXCEPTION]: fn(9876).CalendarIcon, [THREAD]: fn(5124).ThreadIcon, [STICKER]: fn(10203).StickerIcon, [APPLICATION_COMMAND]: fn(11307).SlashBoxIcon, [AUTO_MODERATION_RULE]: fn(16811).WebhookIcon, [GUILD_SOUNDBOARD]: fn(12621).SoundboardIcon, [ONBOARDING_PROMPT]: fn(5140).GroupIcon, [GUILD_ONBOARDING]: fn(5140).GroupIcon, [HOME_SETTINGS]: fn(5140).GroupIcon, [GUILD_MEMBER_VERIFICATION]: fn(5140).GroupIcon, [VOICE_CHANNEL_STATUS]: fn(17605).ChannelListIcon, [GUILD_HOME]: fn(17634).HomeIcon, [UNKNOWN]: fn(11200).CircleQuestionIcon };
({ ALL, CHANNEL, CHANNEL_OVERWRITE, EMOJI, GUILD, GUILD_PROFILE, INTEGRATION, INVITE, ROLE, USER, WEBHOOK, STAGE_INSTANCE, GUILD_SCHEDULED_EVENT, GUILD_SCHEDULED_EVENT_EXCEPTION, THREAD, STICKER, APPLICATION_COMMAND, AUTO_MODERATION_RULE, GUILD_SOUNDBOARD, ONBOARDING_PROMPT, GUILD_ONBOARDING, HOME_SETTINGS, GUILD_MEMBER_VERIFICATION, VOICE_CHANNEL_STATUS, GUILD_HOME, UNKNOWN } = AuditLogTargetTypes);
size = fn(2);
const result = size.fileFinishedImporting("modules/guild_moderation/native/AuditLogActionIcon.tsx");

export default function AuditLogActionIcon(action) {
  const obj = { style: closure_10().actionImageContainer, children: React6(AuditIcons, { action: action.action }) };
  return React6(View, obj);
};
