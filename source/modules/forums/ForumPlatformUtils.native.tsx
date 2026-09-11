// Module ID: 8488
// Function ID: 8489
// Name: ForumPlatformUtils
// Dependencies: [1114, 2]

// Module 8488 (ForumPlatformUtils)
import util from "util" /* 1114 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/forums/ForumPlatformUtils.native.tsx");

export default {
  getForumChannelPermissionText() {
    const intl = util.intl;
    return intl.string(util.t.LG9VAi);
  }
};
