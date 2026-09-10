// Module ID: 12126
// Function ID: 12127
// Name: TrackSectionHeader
// Dependencies: [9440, 8801, 1250, 2]
// Exports: default

// Module 12126 (TrackSectionHeader)
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1250 */;
import useTrackImpressionDefault from "useTrackImpression" /* 8801 */;
import AppLauncherStore from "AppLauncherStore" /* 9440 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/screens/home/TrackSectionHeader.tsx");

export default function TrackSectionHeader(viewed) {
  viewed = viewed.viewed;
  ({ sectionName, numItems, numVisibleItems, children } = viewed);
  const obj = { type: discord_common_AnalyticsUtils.ImpressionTypes.VIEW, name: discord_common_AnalyticsUtils.ImpressionNames.APP_LAUNCHER_SECTION, properties: null };
  const tmp = useTrackImpressionDefault;
  obj.properties = { section_name: sectionName, num_items: numItems, num_visible_items: numVisibleItems, source: AppLauncherStore.entrypoint() };
  const items = [viewed];
  tmp(obj, { disableTrack: !viewed }, items);
  return children;
};
