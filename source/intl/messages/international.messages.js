// Module ID: 14241
// Function ID: 14242
// Dependencies: [1120, 14242, 1155, 2]

// Module 14241
import AssetJsonUtils from "AssetJsonUtils" /* 1120 */;
import _mod14242 from "module_14242" /* 14242 */;
import module_1155_mod from "module_1155" /* 1155 */;
import size from "module_2" /* 2 */;

let module_1155 = module_1155_mod;
const loader = module_1155.createLoader({
  () => {
    const jsonAsset = AssetJsonUtils.loadJsonAsset(_mod14242);
    return jsonAsset.then((result) => ({ default: result }));
  }
}, "en-US");
let module_1155 = module_1155_mod;
const messagesProxy = module_1155.makeMessagesProxy(loader);
const result = size.fileFinishedImporting("intl/messages/international.messages.js");

export default messagesProxy;
export const messagesLoader = loader;
