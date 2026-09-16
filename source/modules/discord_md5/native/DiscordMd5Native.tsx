// Module ID: 5241
// Function ID: 5242
// Name: DiscordMd5Native
// Dependencies: [5242, 1151, 2]

// Module 5241 (DiscordMd5Native)
import NativeFileModuleDefault from "NativeFileModule" /* 1151 */;
import DiscordMd5 from "DiscordMd5" /* 5242 */;

const prototype = function DiscordMd5Native() {
  return HermesBuiltin.applyArguments(new.target, new.target);
}.prototype;
class prototype extends tmp2 {
}
prototype["fromFileUri"] = function fromFileUri(uri) {
  let num = arg1;
  if (arg1 === undefined) {
    num = 4096;
  }
  return NativeFileModuleDefault.getFileHash(uri, "md5", num);
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/discord_md5/native/DiscordMd5Native.tsx");

export default prototype;
