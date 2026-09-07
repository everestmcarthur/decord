// Module ID: 9840
// Function ID: 9841
// Name: sortByMatchScore
// Dependencies: [2, 9841, 5515, 9847, 9848, 5518]

// Module 9840 (sortByMatchScore)
import set from "set" /* 2 */;
import sortByMatchScoreDefault from "sortByMatchScore" /* 5518 */;
import getAutocompleterBoosterMapDefault from "getAutocompleterBoosterMap" /* 9841 */;
import HeaderRecord2 from "HeaderRecord" /* 9847 */;
import _modDef9848 from "module_9848" /* 9848 */;
import HeaderRecord from "HeaderRecord" /* 5515 */;

const result = set.fileFinishedImporting("modules/autocompleter/index.tsx");
for (const key10022 in _module1) {
  let tmp4 = key10022;
  arg5[key10022] = HeaderRecord[key10022];
  continue;
}

export default getAutocompleterBoosterMapDefault;
export const createHeaderResult = HeaderRecord2.createHeaderResult;
export const findNextSelectedResult = _modDef9848;
export const sortByMatchScore = sortByMatchScoreDefault;
