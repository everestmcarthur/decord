// Module ID: 13134
// Function ID: 13135
// Name: UserProfileActivityCardBadges
// Dependencies: [19, 17, 1074, 21, 13135, 2]
// Exports: default

// Module 13134 (UserProfileActivityCardBadges)
import noop from "module_19" /* 19 */;

const require = fn;
const View = fn(17).View;
const ActivityTypes = fn(1074).ActivityTypes;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileActivityCardBadges.tsx");

export default function UserProfileActivityCardBadges(activity) {
  activity = activity.activity;
  if (activity.type === ActivityTypes.PLAYING) {
    const items = [activity(13135).PartyBadge, activity(13135).TimestampBadge];
    let items3 = items;
  } else if (activity.type === tmp.LISTENING) {
    const items1 = [activity(13135).TimestampBadge];
    items3 = items1;
  } else if (activity.type === tmp.WATCHING) {
    const items2 = [activity(13135).TimestampBadge, activity(13135).EpisodeBadge];
    items3 = items2;
  } else {
    items3 = [];
  }
  let tmp8 = null;
  if (0 !== items3.length) {
    const obj = { style: activity.style, children: items3.map((item, index) => jsx(item, { activity }, index)) };
    tmp8 = <View style={arg0.style}>{items3.map((item, index) => jsx(item, { activity }, index))}</View>;
  }
  return tmp8;
};
