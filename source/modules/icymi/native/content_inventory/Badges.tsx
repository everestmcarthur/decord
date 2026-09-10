// Module ID: 13038
// Function ID: 13039
// Name: Badges
// Dependencies: [19, 17, 2025, 21, 4574, 576, 13036, 8161, 4570, 504, 9255, 11636, 13039, 1114, 13041, 13043, 9230, 10212, 8750, 1090, 2]
// Exports: CustomStatusTimestampBadge, GameTimestampBadge, MarathonBadge, NewGameBadge, ResurrectedBadge, StreakBadge, TopGameBadge, TrendingBadge

// Module 13038 (Badges)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import DurationsDefault from "Durations" /* 1090 */;
import Text_Text from "Text/Text" /* 4570 */;
import utils from "utils" /* 8161 */;
import TimerIcon from "TimerIcon" /* 11636 */;
import noop from "module_19" /* 19 */;
import LocaleStore from "LocaleStore" /* 2025 */;

const GameControllerIcon = tmp2(9255);
require = fn;
class ActiveTimestamp {
  constructor(arg0) {
    entry = global.entry;
    now = undefined;
    obj = entry(closure_2[6]);
    now = obj.useTimestampTickedNow().now;
    items = [, ];
    items[0] = entry;
    items[1] = now;
    memo = closure_3.useMemo(() => utils.formatActiveTimestamp(entry, now), items);
    return jsx(entry(closure_2[8]).Text, { style: global.style, variant: "text-sm/medium", tabularNumbers: true, color: "text-feedback-positive", children: memo });
  }
}
function ContentTimestamp(entry) {
  entry = entry.entry;
  const tmp = closure_9();
  initialize;
  [][0] = LocaleStore;
  if (isEntryActiveResult) {
    const obj2 = { entry };
    let tmp7Result = tmp7(ActiveTimestamp, obj2);
  } else {
    const obj3 = { variant: "text-sm/medium", style: tmp.text, children: tmp2(8161).formatEndedTimestamp(entry, tmp6) };
    tmp7Result = tmp7(tmp2(4570).Text, obj3);
    const tmp2Result = tmp2(8161);
  }
  return tmp7Result;
}
function BaseBadge(accessibilityLabel) {
  accessibilityLabel = accessibilityLabel.accessibilityLabel;
  ({ Icon, iconColor, text } = accessibilityLabel);
  const tmp = closure_9();
  const obj = { style: tmp.badgeContainer, accessible: null != accessibilityLabel, accessibilityLabel, children: null };
  const items = [timestampProducer(Icon, { style: tmp.icon, color: iconColor }), timestampProducer(Text_Text.Text, { variant: "text-sm/medium", style: tmp.text, children: text })];
  obj.children = items;
  return React5(View, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7, Fragment: closure_8 } = jsxProd);
const createStyles = fn(4574);
let obj2 = { icon: { width: 16, height: 16 }, badgeContainer: { display: "flex", flexDirection: "row", alignItems: "center", gap: 4, backgroundColor: "rgba(255, 255, 255, 0.08)", paddingVertical: nativeDefault.space.PX_4, paddingLeft: nativeDefault.space.PX_8, paddingRight: 10, borderRadius: nativeDefault.radii.sm }, text: null };
let obj3 = { display: "flex", flexDirection: "row", alignItems: "center", gap: 4, backgroundColor: "rgba(255, 255, 255, 0.08)", paddingVertical: nativeDefault.space.PX_4, paddingLeft: nativeDefault.space.PX_8, paddingRight: 10, borderRadius: nativeDefault.radii.sm };
obj2.text = { color: nativeDefault.colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY };
let closure_9 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/icymi/native/content_inventory/Badges.tsx");

export { ActiveTimestamp };
export const GameTimestampBadge = function GameTimestampBadge(entry) {
  entry = entry.entry;
  const tmp = closure_9();
  const colors = nativeDefault.colors;
  const obj2 = { style: tmp.badgeContainer, children: null };
  const isEntryActiveResult = utils.isEntryActive(entry);
  const tmp5 = utils.isEntryActive(entry) ? colors.STATUS_POSITIVE : colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY;
  const items = [timestampProducer(GameControllerIcon.GameControllerIcon, { style: tmp.icon, color: utils.isEntryActive(entry) ? colors.STATUS_POSITIVE : colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY }), timestampProducer(ContentTimestamp, { entry })];
  obj2.children = items;
  return React5(View, obj2);
};
export const MarathonBadge = function MarathonBadge(entry) {
  entry = entry.entry;
  if (obj.isEntryMarathon(entry)) {
    const tmpResult = tmp(8161);
    const colors = nativeDefault.colors;
    const isEntryActiveResult = tmp(8161).isEntryActive(entry);
    const tmp6 = tmp(8161).isEntryActive(entry) ? colors.STATUS_POSITIVE : colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY;
    const marathonDescription = tmp(8161).getMarathonDescription(entry);
    const text = marathonDescription.text;
    let tmp9 = null;
    if (null != text) {
      const obj2 = { Icon: tmp(11636).TimerIcon, iconColor: tmp6, text, accessibilityLabel: tmp8 };
      tmp9 = timestampProducer(BaseBadge, obj2);
    }
    return tmp9;
  } else {
    return null;
  }
  obj = utils;
};
export const NewGameBadge = function NewGameBadge(entry) {
  let tmp3 = null;
  if (obj.isEntryNew(entry.entry)) {
    const obj2 = { Icon: tmp(13039).NewUserIcon, text: null, iconColor: null };
    const intl = tmp(1114).intl;
    obj2.text = intl.string(tmp(1114).t.keY6mW);
    obj2.iconColor = nativeDefault.colors.STATUS_POSITIVE;
    tmp3 = timestampProducer(BaseBadge, obj2);
  }
  return tmp3;
};
export const StreakBadge = function StreakBadge(entry) {
  const streakCount = utils.getStreakCount(entry.entry);
  let tmp4 = null;
  if (null != streakCount) {
    tmp4 = null;
    if (streakCount >= 2) {
      const obj2 = { Icon: tmp(13041).FlashIcon, text: null, iconColor: null, accessibilityLabel: null };
      const intl = tmp(1114).intl;
      const obj3 = { days: streakCount };
      obj2.text = intl.formatToPlainString(tmp(1114).t["Klie/P"], obj3);
      obj2.iconColor = nativeDefault.colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY;
      const intl2 = tmp(1114).intl;
      const obj4 = { days: streakCount };
      obj2.accessibilityLabel = intl2.formatToPlainString(tmp(1114).t.nVLPBf, obj4);
      tmp4 = timestampProducer(BaseBadge, obj2);
    }
  }
  return tmp4;
};
export const TrendingBadge = function TrendingBadge(entry) {
  const trendingType = utils.getTrendingType(entry.entry);
  let tmp4 = null;
  if (null != trendingType) {
    tmp4 = null;
    if (trendingType !== tmp(13043).TrendingType.TRENDING_TYPE_UNSPECIFIED) {
      const obj2 = { Icon: tmp(9230).FireIcon, text: null, iconColor: null };
      const intl = tmp(1114).intl;
      obj2.text = intl.string(tmp(1114).t.TsWCdW);
      obj2.iconColor = nativeDefault.colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY;
      tmp4 = timestampProducer(BaseBadge, obj2);
    }
  }
  return tmp4;
};
export const ResurrectedBadge = function ResurrectedBadge(entry) {
  let tmp3 = null;
  if (null != obj.getResurrectedEntryLastPlayTime(entry.entry)) {
    const obj2 = { Icon: tmp(10212).RetryIcon, text: null, iconColor: null };
    const intl = tmp(1114).intl;
    obj2.text = intl.string(tmp(1114).t.adnLsB);
    obj2.iconColor = nativeDefault.colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY;
    tmp3 = timestampProducer(BaseBadge, obj2);
  }
  return tmp3;
};
export const TopGameBadge = function TopGameBadge(entry) {
  const entryDuration = utils.getEntryDuration(entry.entry);
  if (null == entryDuration) {
    return null;
  } else {
    const obj2 = { Icon: tmp(8750).TrophyIcon, text: null, iconColor: null };
    const obj3 = { children: null };
    const intl = tmp(1114).intl;
    const items = [intl.string(tmp(1114).t["/50eHi"]), ": ", ];
    const intl2 = tmp(1114).intl;
    const obj4 = { hours: null };
    const _Math = Math;
    obj4.hours = Math.round(entryDuration / DurationsDefault.Seconds.HOUR);
    items[2] = intl2.format(tmp(1114).t.SDRHgr, obj4);
    obj3.children = items;
    obj2.text = React5(React6, obj3);
    obj2.iconColor = nativeDefault.colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY;
    return timestampProducer(BaseBadge, obj2);
  }
};
export const CustomStatusTimestampBadge = function CustomStatusTimestampBadge(entry) {
  const tmp = closure_9();
  const obj = { style: tmp.badgeContainer, children: null };
  const items = [timestampProducer(TimerIcon.TimerIcon, { style: tmp.icon, color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT }), timestampProducer(ContentTimestamp, { entry: entry.entry })];
  obj.children = items;
  return React5(View, obj);
};
