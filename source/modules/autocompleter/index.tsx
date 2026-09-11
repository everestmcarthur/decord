// Module ID: 9926
// Function ID: 9927
// Name: sortByMatchScore
// Dependencies: [2, 9927, 5566, 9933, 9934, 5569]

// Module 9926 (sortByMatchScore)
import autocompleter_sortByMatchScoreDefault from "autocompleter/sortByMatchScore" /* 5569 */;
import AutocompleterDefault from "Autocompleter" /* 9927 */;
import AutocompleterConstants2 from "AutocompleterConstants" /* 9933 */;
import _modDef9934 from "module_9934" /* 9934 */;
import size from "module_2" /* 2 */;
import AutocompleterConstants from "autocompleter/AutocompleterConstants" /* 5566 */;

const result = size.fileFinishedImporting("modules/autocompleter/index.tsx");
for (const key10022 in _module1) {
  arg5[key10022] = AutocompleterConstants[key10022];
  continue;
}

export default AutocompleterDefault;
export const createHeaderResult = AutocompleterConstants2.createHeaderResult;
export const findNextSelectedResult = _modDef9934;
export const sortByMatchScore = autocompleter_sortByMatchScoreDefault;
