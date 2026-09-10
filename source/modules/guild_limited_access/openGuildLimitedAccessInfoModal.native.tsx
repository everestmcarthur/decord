// Module ID: 13856
// Function ID: 13857
// Name: openGuildLimitedAccessInfoModal
// Dependencies: [19, 17, 21, 4439, 4919, 13857, 1896, 2]
// Exports: default

// Module 13856 (openGuildLimitedAccessInfoModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 4919 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Keyboard = fn(17).Keyboard;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_limited_access/openGuildLimitedAccessInfoModal.native.tsx");

export default function openGuildLimitedAccessInfoModal(arg0) {
  _require = arg0;
  Keyboard.dismiss();
  const bestActiveInput = require("ChatInputUtils").getBestActiveInput();
  if (bestActiveInput != null) {
    bestActiveInput.blur();
  }
  let obj = require("ChatInputUtils");
  actions_AlertActionCreatorsDefault.openLazy({
    importer() {
      return asyncRequireImpl(13857, dependencyMap.paths).then((result) => {
        closure_0 = result.default;
        return (arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj.guildId = guildId;
          return <closure_0 />;
        };
      });
    }
  });
};
