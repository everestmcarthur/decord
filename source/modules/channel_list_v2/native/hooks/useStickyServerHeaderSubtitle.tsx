// Module ID: 16264
// Function ID: 16265
// Name: useStickyServerHeaderSubtitle
// Dependencies: [4557, 1074, 504, 2]
// Exports: default

// Module 16264 (useStickyServerHeaderSubtitle)
import GuildMemberCountStore from "GuildMemberCountStore" /* 4557 */;

const require = globalThis.__r;

const require = fn;
const GuildFeatures = fn(1074).GuildFeatures;
const size = fn(2);
const result = size.fileFinishedImporting("modules/channel_list_v2/native/hooks/useStickyServerHeaderSubtitle.tsx");

export default function useStickyServerHeaderSubtitle(arg0) {
  _require = arg0;
  const items = [GuildMemberCountStore];
  return require("initialize").useStateFromStores(items, () => {
    features = features.features;
    let memberCount;
    if (features.has(GuildFeatures.COMMUNITY)) {
      memberCount = GuildMemberCountStore.getMemberCount(features.id);
    }
    return memberCount;
  });
};
