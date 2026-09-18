// Module ID: 9841
// Function ID: 9842
// Name: sortByMatchScore
// Dependencies: [2, 9842, 5515, 9848, 9849, 5518]

// Module 9841 (sortByMatchScore)
import autocompleter_sortByMatchScoreDefault from "autocompleter/sortByMatchScore" /* 5518 */;
import AutocompleterDefault from "Autocompleter" /* 9842 */;
import AutocompleterConstants2 from "AutocompleterConstants" /* 9848 */;
import _modDef9849 from "module_9849" /* 9849 */;
import size from "module_2" /* 2 */;
import AutocompleterConstants from "autocompleter/AutocompleterConstants" /* 5515 */;

const result = size.fileFinishedImporting("modules/autocompleter/index.tsx");
for (const key10022 in _module1) {
  arg5[key10022] = AutocompleterConstants[key10022];
  continue;
}

export default AutocompleterDefault;
export const createHeaderResult = AutocompleterConstants2.createHeaderResult;
export const findNextSelectedResult = _modDef9849;
export const sortByMatchScore = autocompleter_sortByMatchScoreDefault;
