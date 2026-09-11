// Module ID: 11029
// Function ID: 11030
// Name: InstantInviteIcons
// Dependencies: [17, 11030, 11031, 11032, 9951, 2]

// Module 11029 (InstantInviteIcons)
import _mod17 from "module_17" /* 17 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const Platform = _mod17.Platform;
const obj = {};
Object.defineProperty(obj, "more", { get: () => require("module_11030"), set: undefined });
Object.defineProperty(obj, "share", { get: () => require("module_11031"), set: undefined });
Object.defineProperty(obj, "revoke", { get: () => require("module_11032"), set: undefined });
Object.defineProperty(obj, "copy", { get: () => require("module_9951"), set: undefined });
const frozen = Object.freeze(obj);
const result = size.fileFinishedImporting("modules/guild_instant_invites/native/InstantInviteIcons.tsx");

export default frozen;
