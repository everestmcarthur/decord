// Module ID: 12639
// Function ID: 12640
// Name: regionResponseToRegion
// Dependencies: [2]
// Exports: default

// Module 12639 (regionResponseToRegion)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_server/utils/regionResponseToRegion.tsx");

export default function regionResponseToRegion(id) {
  return { id: id.id, name: id.name, countryCode: id.country_code, pingUrl: id.ping_url, enabled: id.enabled };
};
