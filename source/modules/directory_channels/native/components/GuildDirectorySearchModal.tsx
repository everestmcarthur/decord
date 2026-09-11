// Module ID: 12396
// Function ID: 12397
// Name: GuildDirectorySearchModal
// Dependencies: [19, 21, 12397, 7074, 5650, 2]
// Exports: default

// Module 12396 (GuildDirectorySearchModal)
import useInitialValueDefault from "useInitialValue" /* 5650 */;
import GuildDirectorySearchDefault from "GuildDirectorySearch" /* 12397 */;
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
