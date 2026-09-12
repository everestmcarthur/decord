// Module ID: 14274
// Function ID: 14275
// Dependencies: [1118, 14275, 1155, 2]

// Module 14274
import AssetJsonUtils from "AssetJsonUtils" /* 1118 */;
import _mod14275 from "module_14275" /* 14275 */;
import module_1155_mod from "module_1155" /* 1155 */;
import size from "module_2" /* 2 */;

let module_1155 = module_1155_mod;
const loader = module_1155.createLoader({
  () => {
    const jsonAsset = AssetJsonUtils.loadJsonAsset(_mod14275);
    return jsonAsset.then((result) => ({ default: result }));
  }
}, "en-US");
let module_1155 = module_1155_mod;
const messagesProxy = module_1155.makeMessagesProxy(loader);
const result = size.fileFinishedImporting("intl/messages/untranslated.messages.js");

export default messagesProxy;
export const messagesLoader = loader;
