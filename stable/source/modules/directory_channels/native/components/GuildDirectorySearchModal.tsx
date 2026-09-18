// Module ID: 12305
// Function ID: 12306
// Name: GuildDirectorySearchModal
// Dependencies: [19, 21, 12306, 7000, 5598, 2]
// Exports: default

// Module 12305 (GuildDirectorySearchModal)
import useInitialValueDefault from "useInitialValue" /* 5598 */;
import GuildDirectorySearchDefault from "GuildDirectorySearch" /* 12306 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
const jsx = fn(21).jsx;
const SEARCH_SCREEN_KEY = "SEARCH_SCREEN_KEY";
const size = fn(2);
const result = size.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectorySearchModal.tsx");

export default function GuildDirectorySearchModal(arg0) {
  _require = arg0;
  return jsx(require("Navigator").Navigator, {
    screens: useInitialValueDefault(() => ({
      [closure_2_4]: {
        fullscreen: true,
        headerShown: false,
        render() {
          const merged = Object.assign(closure_0);
          return jsx(GuildDirectorySearchDefault, {});
        }
      }
    })),
    initialRouteName: SEARCH_SCREEN_KEY
  });
};
