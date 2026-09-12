// Module ID: 12480
// Function ID: 12481
// Name: SearchFetchManager
// Dependencies: [12478, 12479, 2]

// Module 12480 (SearchFetchManager)
import AbstractSearchFetchManager2 from "AbstractSearchFetchManager" /* 12478 */;
import SearchFetcher from "SearchFetcher" /* 12479 */;
import size from "module_2" /* 2 */;

const AbstractSearchFetchManager = AbstractSearchFetchManager2.AbstractSearchFetchManager;
class SearchFetchManager extends AbstractSearchFetchManager {
}
SearchFetchManager.prototype["create"] = function create(arg0) {
  ({ id, searchType, searchQuery } = arg0);
  this.cancel(id);
  const searchFetcherImpl = new SearchFetcher.SearchFetcherImpl(id, searchType, searchQuery);
  const result = this.set(id, searchFetcherImpl);
  return searchFetcherImpl;
};
const searchFetchManager = new SearchFetchManager();
let result = size.fileFinishedImporting("modules/search/managers/SearchFetchManager.tsx");

export default searchFetchManager;
