// Module ID: 3332
// Function ID: 3333
// Dependencies: [1120, 3333, 1155, 2]

// Module 3332
import AssetJsonUtils from "AssetJsonUtils" /* 1120 */;
import _mod3333 from "module_3333" /* 3333 */;
import module_1155_mod from "module_1155" /* 1155 */;
import size from "module_2" /* 2 */;

let module_1155 = module_1155_mod;
const loader = module_1155.createLoader({
  () => {
    const jsonAsset = AssetJsonUtils.loadJsonAsset(_mod3333);
    return jsonAsset.then((result) => ({ default: result }));
  }
}, "en-US");
let module_1155 = module_1155_mod;
const messagesProxy = module_1155.makeMessagesProxy(loader);
const result = size.fileFinishedImporting("modules/premium/youtube_3pp/Youtube3PP.messages.js");

export default messagesProxy;
export const messagesLoader = loader;
