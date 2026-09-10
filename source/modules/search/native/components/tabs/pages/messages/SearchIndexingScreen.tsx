// Module ID: 16795
// Function ID: 16796
// Name: SearchIndexingScreen
// Dependencies: [19, 21, 12428, 12410, 16730, 2]
// Exports: default

// Module 16795 (SearchIndexingScreen)
import search_tracking_TrackingDefault from "search/tracking/Tracking" /* 12428 */;
import pages_ErrorScreenDefault from "pages/ErrorScreen" /* 16730 */;
import noop from "module_19" /* 19 */;

const require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/tabs/pages/messages/SearchIndexingScreen.tsx");

export default function SearchIndexingScreen(searchContext) {
  searchContext = searchContext.searchContext;
  const items = [searchContext];
  const effect = noop.useEffect(() => {
    search_tracking_TrackingDefault.trackSearchIndexing({ searchContext });
  }, items);
  const text = searchContext(12410).getIndexingErrorText(searchContext);
  return jsx(pages_ErrorScreenDefault, { text });
};
