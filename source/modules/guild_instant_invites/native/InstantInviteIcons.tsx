// Module ID: 10942
// Function ID: 10943
// Name: get more
// Dependencies: [17, 10943, 10944, 10945, 9865, 2]

// Module 10942 (get more)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const Platform = get_ActivityIndicator.Platform;
const obj = {};
Object.defineProperty(obj, "more", { get: () => require(10943) /* registerAsset */, set: undefined });
Object.defineProperty(obj, "share", { get: () => require(10944) /* registerAsset */, set: undefined });
Object.defineProperty(obj, "revoke", { get: () => require(10945) /* registerAsset */, set: undefined });
Object.defineProperty(obj, "copy", { get: () => require(9865) /* registerAsset */, set: undefined });
const frozen = Object.freeze(obj);
const result = set.fileFinishedImporting("modules/guild_instant_invites/native/InstantInviteIcons.tsx");

export default frozen;
