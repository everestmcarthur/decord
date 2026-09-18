// Module ID: 9607
// Function ID: 9608
// Name: StreamFailed
// Dependencies: [19, 17, 21, 8234, 9608, 9609, 4411, 2]
// Exports: StreamFailed, getStreamFailedSource, useStreamFailedSource

// Module 9607 (StreamFailed)
import shared from "shared" /* 4411 */;
import _mod8234 from "module_8234" /* 8234 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/StreamFailed.tsx");

export const getStreamFailedSource = function getStreamFailedSource(theme) {
  return _mod8234.getIllustrationSource(theme, {
    dark() {
      return require("module_9608");
    },
    darker() {
      return require("module_9609");
    }
  });
};
export const useStreamFailedSource = function useStreamFailedSource() {
  const obj = shared;
  return _mod8234.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_9608");
    },
    darker() {
      return require("module_9609");
    }
  });
};
export const StreamFailed = function StreamFailed(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8234.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_9608");
    },
    darker() {
      return require("module_9609");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
