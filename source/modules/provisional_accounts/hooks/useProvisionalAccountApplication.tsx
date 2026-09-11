// Module ID: 12725
// Function ID: 12726
// Name: useProvisionalAccountApplication
// Dependencies: [7731, 504, 7242, 2]
// Exports: default

// Module 12725 (useProvisionalAccountApplication)
import GameRelationshipStore from "GameRelationshipStore" /* 7731 */;

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
