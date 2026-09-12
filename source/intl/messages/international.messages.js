// Module ID: 14276
// Function ID: 14277
// Dependencies: [1118, 14277, 1155, 2]

// Module 14276
import AssetJsonUtils from "AssetJsonUtils" /* 1118 */;
import _mod14277 from "module_14277" /* 14277 */;
import module_1155_mod from "module_1155" /* 1155 */;
import size from "module_2" /* 2 */;

let module_1155 = module_1155_mod;
const loader = module_1155.createLoader({
  () => {
    const jsonAsset = AssetJsonUtils.loadJsonAsset(_mod14277);
    return jsonAsset.then((result) => ({ default: result }));
  }
}, "en-US");
let module_1155 = module_1155_mod;
const messagesProxy = module_1155.makeMessagesProxy(loader);
const result = size.fileFinishedImporting("intl/messages/international.messages.js");

export default messagesProxy;
export const messagesLoader = loader;
