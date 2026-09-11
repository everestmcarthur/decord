// Module ID: 12191
// Function ID: 12192
// Name: TrackSectionHeader
// Dependencies: [9501, 8861, 1250, 2]
// Exports: default

// Module 12191 (TrackSectionHeader)
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1250 */;
import useTrackImpressionDefault from "useTrackImpression" /* 8861 */;
import AppLauncherStore from "AppLauncherStore" /* 9501 */;

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
