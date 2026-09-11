// Module ID: 11077
// Function ID: 11078
// Name: ShareConstants
// Dependencies: [9928, 2]
// Exports: isAllowedType

// Module 11077 (ShareConstants)
import sortByMatchScore from "sortByMatchScore" /* 9928 */;
import size from "module_2" /* 2 */;

const items = [sortByMatchScore.AutocompleterResultTypes.USER, sortByMatchScore.AutocompleterResultTypes.TEXT_CHANNEL, sortByMatchScore.AutocompleterResultTypes.VOICE_CHANNEL, sortByMatchScore.AutocompleterResultTypes.GROUP_DM];
const ALLOWED_TYPES = Array.from(items);
const result = size.fileFinishedImporting("modules/share/ShareConstants.tsx");

export { ALLOWED_TYPES };
export const isAllowedType = function isAllowedType(type) {
  return arr.includes(type.type);
};
