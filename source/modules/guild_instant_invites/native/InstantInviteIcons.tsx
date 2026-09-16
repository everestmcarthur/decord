// Module ID: 11086
// Function ID: 11087
// Name: InstantInviteIcons
// Dependencies: [17, 11087, 11088, 11089, 10000, 2]

// Module 11086 (InstantInviteIcons)
import _mod17 from "module_17" /* 17 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const Platform = _mod17.Platform;
const obj = {};
Object.defineProperty(obj, "more", { get: () => require("module_11087"), set: undefined });
Object.defineProperty(obj, "share", { get: () => require("module_11088"), set: undefined });
Object.defineProperty(obj, "revoke", { get: () => require("module_11089"), set: undefined });
Object.defineProperty(obj, "copy", { get: () => require("module_10000"), set: undefined });
const frozen = Object.freeze(obj);
const result = size.fileFinishedImporting("modules/guild_instant_invites/native/InstantInviteIcons.tsx");

export default frozen;
