// Module ID: 9928
// Function ID: 9929
// Name: sortByMatchScore
// Dependencies: [2, 9929, 5567, 9935, 9936, 5570]

// Module 9928 (sortByMatchScore)
import autocompleter_sortByMatchScoreDefault from "autocompleter/sortByMatchScore" /* 5570 */;
import AutocompleterDefault from "Autocompleter" /* 9929 */;
import AutocompleterConstants2 from "AutocompleterConstants" /* 9935 */;
import _modDef9936 from "module_9936" /* 9936 */;
import size from "module_2" /* 2 */;
import AutocompleterConstants from "autocompleter/AutocompleterConstants" /* 5567 */;

const result = size.fileFinishedImporting("modules/autocompleter/index.tsx");
for (const key10022 in _module1) {
  arg5[key10022] = AutocompleterConstants[key10022];
  continue;
}

export default AutocompleterDefault;
export const createHeaderResult = AutocompleterConstants2.createHeaderResult;
export const findNextSelectedResult = _modDef9936;
export const sortByMatchScore = autocompleter_sortByMatchScoreDefault;
