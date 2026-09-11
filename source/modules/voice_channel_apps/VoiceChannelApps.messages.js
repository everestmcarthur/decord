// Module ID: 3688
// Function ID: 3689
// Dependencies: [1120, 3689, 1155, 2]

// Module 3688
import AssetJsonUtils from "AssetJsonUtils" /* 1120 */;
import _mod3689 from "module_3689" /* 3689 */;
import module_1155_mod from "module_1155" /* 1155 */;
import size from "module_2" /* 2 */;

let module_1155 = module_1155_mod;
const loader = module_1155.createLoader({
  () => {
    const jsonAsset = AssetJsonUtils.loadJsonAsset(_mod3689);
    return jsonAsset.then((result) => ({ default: result }));
  }
}, "en-US");
let module_1155 = module_1155_mod;
const messagesProxy = module_1155.makeMessagesProxy(loader);
const result = size.fileFinishedImporting("modules/voice_channel_apps/VoiceChannelApps.messages.js");

export default messagesProxy;
export const messagesLoader = loader;
