// Module ID: 10097
// Function ID: 10098
// Name: AutocompleterConstants
// Dependencies: [5727, 2]
// Exports: createHeaderResult

// Module 10097 (AutocompleterConstants)
import AutocompleterConstants from "autocompleter/AutocompleterConstants" /* 5727 */;
import size from "module_2" /* 2 */;

({ HeaderRecord: closure_0, AutocompleterResultTypes: closure_1 } = AutocompleterConstants);
const result = size.fileFinishedImporting("modules/autocompleter/createAutocompleterResult.tsx");

export const createHeaderResult = function createHeaderResult(intl) {
  const obj = { type: constants.HEADER, record: new React(intl), score: 0 };
  return obj;
};
