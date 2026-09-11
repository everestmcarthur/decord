// Module ID: 9840
// Function ID: 9841
// Name: getAppChannelApplicationUnsupportedText
// Dependencies: [9841, 1114, 2]
// Exports: default

// Module 9840 (getAppChannelApplicationUnsupportedText)
import GuildEmbeddedApplicationUnsupportedReason from "GuildEmbeddedApplicationUnsupportedReason" /* 9841 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_channels/getAppChannelApplicationUnsupportedText.tsx");

export default function getAppChannelApplicationUnsupportedText(supported) {
  if (!supported.supported) {
    const reason = supported.reason;
    if (GuildEmbeddedApplicationUnsupportedReason.GuildEmbeddedApplicationUnsupportedReason.REQUIRES_BOT === reason) {
      const intl3 = tmp(1114).intl;
      return intl3.string(tmp(1114).t.V4y5nG);
    } else if (tmp(9841).GuildEmbeddedApplicationUnsupportedReason.SURFACE_NOT_SUPPORTED === reason) {
      const intl2 = tmp(1114).intl;
      return intl2.string(tmp(1114).t["iUWcU/"]);
    } else {
      const intl = tmp(1114).intl;
      return intl.string(tmp(1114).t.GZa4J0);
    }
  }
};
