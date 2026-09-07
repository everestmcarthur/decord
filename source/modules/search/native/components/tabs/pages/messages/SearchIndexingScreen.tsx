// Module ID: 16701
// Function ID: 16702
// Name: SearchIndexingScreen
// Dependencies: [19, 21, 12362, 12344, 16641, 2]
// Exports: default

// Module 16701 (SearchIndexingScreen)
import _modDef16641 from "module_16641" /* 16641 */;
import closure_3 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/search/native/components/tabs/pages/messages/SearchIndexingScreen.tsx");

export default function SearchIndexingScreen(searchContext) {
  searchContext = searchContext.searchContext;
  const items = [searchContext];
  const effect = React.useEffect(() => {
    let obj = closure_1_1(closure_1_2[2]);
    obj = { searchContext };
    obj.trackSearchIndexing(obj);
  }, items);
  const text = searchContext(12344).getIndexingErrorText(searchContext);
  return jsx(_modDef16641, { text });
};
