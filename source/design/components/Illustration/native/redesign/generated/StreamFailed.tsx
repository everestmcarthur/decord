// Module ID: 9692
// Function ID: 9693
// Name: StreamFailed
// Dependencies: [19, 17, 21, 8317, 9693, 9694, 4458, 2]
// Exports: StreamFailed, getStreamFailedSource, useStreamFailedSource

// Module 9692 (StreamFailed)
import shared from "shared" /* 4458 */;
import _mod8317 from "module_8317" /* 8317 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/StreamFailed.tsx");

export const getStreamFailedSource = function getStreamFailedSource(theme) {
  return _mod8317.getIllustrationSource(theme, {
    dark() {
      return require("module_9693");
    },
    darker() {
      return require("module_9694");
    }
  });
};
export const useStreamFailedSource = function useStreamFailedSource() {
  const obj = shared;
  return _mod8317.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_9693");
    },
    darker() {
      return require("module_9694");
    }
  });
};
export const StreamFailed = function StreamFailed(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8317.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_9693");
    },
    darker() {
      return require("module_9694");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
