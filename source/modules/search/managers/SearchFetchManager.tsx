// Module ID: 12355
// Function ID: 12356
// Name: create
// Dependencies: [12353, 12354, 2]

// Module 12355 (create)
import set from "set" /* 2 */;
import cleanUp from "cleanUp" /* 12353 */;
import fetch from "fetch" /* 12354 */;

const AbstractSearchFetchManager = cleanUp.AbstractSearchFetchManager;
class SearchFetchManager extends AbstractSearchFetchManager {
}
SearchFetchManager.prototype["create"] = function create(arg0) {
  ({ id, searchType, searchQuery } = arg0);
  this.cancel(id);
  const searchFetcherImpl = new fetch.SearchFetcherImpl(id, searchType, searchQuery);
  const result = this.set(id, searchFetcherImpl);
  return searchFetcherImpl;
};
const searchFetchManager = new SearchFetchManager();
let result = set.fileFinishedImporting("modules/search/managers/SearchFetchManager.tsx");

export default searchFetchManager;
