// Module ID: 12700
// Function ID: 12701
// Name: useProvisionalAccountApplication
// Dependencies: [7709, 504, 7220, 2]
// Exports: default

// Module 12700 (useProvisionalAccountApplication)
import GameRelationshipStore from "GameRelationshipStore" /* 7709 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/provisional_accounts/hooks/useProvisionalAccountApplication.tsx");

export default function useProvisionalAccountApplication(arg0) {
  _require = arg0;
  const items = [GameRelationshipStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    const gameRelationshipsForUser = GameRelationshipStore.getGameRelationshipsForUser(closure_0);
    return 0 !== gameRelationshipsForUser.length ? gameRelationshipsForUser[0].applicationId : undefined;
  });
  const obj = require("initialize");
  return require("useGetOrFetchApplications").useGetOrFetchApplication(stateFromStores);
};
