// Module ID: 10942
// Function ID: 10943
// Name: InstantInviteIcons
// Dependencies: [17, 10943, 10944, 10945, 9866, 2]

// Module 10942 (InstantInviteIcons)
import _mod17 from "module_17" /* 17 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const Platform = _mod17.Platform;
const obj = {};
Object.defineProperty(obj, "more", { get: () => require("module_10943"), set: undefined });
Object.defineProperty(obj, "share", { get: () => require("module_10944"), set: undefined });
Object.defineProperty(obj, "revoke", { get: () => require("module_10945"), set: undefined });
Object.defineProperty(obj, "copy", { get: () => require("module_9866"), set: undefined });
const frozen = Object.freeze(obj);
const result = size.fileFinishedImporting("modules/guild_instant_invites/native/InstantInviteIcons.tsx");

export default frozen;
