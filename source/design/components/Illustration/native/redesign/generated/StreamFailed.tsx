// Module ID: 9671
// Function ID: 9672
// Name: StreamFailed
// Dependencies: [19, 17, 21, 8296, 9672, 9673, 4456, 2]
// Exports: StreamFailed, getStreamFailedSource, useStreamFailedSource

// Module 9671 (StreamFailed)
import shared from "shared" /* 4456 */;
import _mod8296 from "module_8296" /* 8296 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/StreamFailed.tsx");

export const getStreamFailedSource = function getStreamFailedSource(theme) {
  return _mod8296.getIllustrationSource(theme, {
    dark() {
      return require("module_9672");
    },
    darker() {
      return require("module_9673");
    }
  });
};
export const useStreamFailedSource = function useStreamFailedSource() {
  const obj = shared;
  return _mod8296.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_9672");
    },
    darker() {
      return require("module_9673");
    }
  });
};
export const StreamFailed = function StreamFailed(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8296.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_9672");
    },
    darker() {
      return require("module_9673");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
