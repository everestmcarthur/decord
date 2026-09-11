// Module ID: 11031
// Function ID: 11032
// Name: InstantInviteIcons
// Dependencies: [17, 11032, 11033, 11034, 9953, 2]

// Module 11031 (InstantInviteIcons)
import _mod17 from "module_17" /* 17 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const Platform = _mod17.Platform;
const obj = {};
Object.defineProperty(obj, "more", { get: () => require("module_11032"), set: undefined });
Object.defineProperty(obj, "share", { get: () => require("module_11033"), set: undefined });
Object.defineProperty(obj, "revoke", { get: () => require("module_11034"), set: undefined });
Object.defineProperty(obj, "copy", { get: () => require("module_9953"), set: undefined });
const frozen = Object.freeze(obj);
const result = size.fileFinishedImporting("modules/guild_instant_invites/native/InstantInviteIcons.tsx");

export default frozen;
