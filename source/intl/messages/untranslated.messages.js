// Module ID: 14239
// Function ID: 14240
// Dependencies: [1120, 14240, 1155, 2]

// Module 14239
import AssetJsonUtils from "AssetJsonUtils" /* 1120 */;
import _mod14240 from "module_14240" /* 14240 */;
import module_1155_mod from "module_1155" /* 1155 */;
import size from "module_2" /* 2 */;

let module_1155 = module_1155_mod;
const loader = module_1155.createLoader({
  () => {
    const jsonAsset = AssetJsonUtils.loadJsonAsset(_mod14240);
    return jsonAsset.then((result) => ({ default: result }));
  }
}, "en-US");
let module_1155 = module_1155_mod;
const messagesProxy = module_1155.makeMessagesProxy(loader);
const result = size.fileFinishedImporting("intl/messages/untranslated.messages.js");

export default messagesProxy;
export const messagesLoader = loader;
