// Module ID: 11200
// Function ID: 11201
// Name: InstantInviteIcons
// Dependencies: [17, 11201, 11202, 11203, 10115, 2]

// Module 11200 (InstantInviteIcons)
import _mod17 from "module_17" /* 17 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const Platform = _mod17.Platform;
const obj = {};
Object.defineProperty(obj, "more", { get: () => require("module_11201"), set: undefined });
Object.defineProperty(obj, "share", { get: () => require("module_11202"), set: undefined });
Object.defineProperty(obj, "revoke", { get: () => require("module_11203"), set: undefined });
Object.defineProperty(obj, "copy", { get: () => require("module_10115"), set: undefined });
const frozen = Object.freeze(obj);
const result = size.fileFinishedImporting("modules/guild_instant_invites/native/InstantInviteIcons.tsx");

export default frozen;
