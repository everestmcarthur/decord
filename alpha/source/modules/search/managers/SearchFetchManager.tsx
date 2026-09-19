// Module ID: 12603
// Function ID: 12604
// Name: SearchFetchManager
// Dependencies: [12601, 12602, 2]

// Module 12603 (SearchFetchManager)
import AbstractSearchFetchManager2 from "AbstractSearchFetchManager" /* 12601 */;
import SearchFetcher from "SearchFetcher" /* 12602 */;
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
