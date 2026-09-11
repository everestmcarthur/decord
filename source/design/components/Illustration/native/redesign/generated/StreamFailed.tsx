// Module ID: 9694
// Function ID: 9695
// Name: StreamFailed
// Dependencies: [19, 17, 21, 8319, 9695, 9696, 4458, 2]
// Exports: StreamFailed, getStreamFailedSource, useStreamFailedSource

// Module 9694 (StreamFailed)
import shared from "shared" /* 4458 */;
import _mod8319 from "module_8319" /* 8319 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/StreamFailed.tsx");

export const getStreamFailedSource = function getStreamFailedSource(theme) {
  return _mod8319.getIllustrationSource(theme, {
    dark() {
      return require("module_9695");
    },
    darker() {
      return require("module_9696");
    }
  });
};
export const useStreamFailedSource = function useStreamFailedSource() {
  const obj = shared;
  return _mod8319.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_9695");
    },
    darker() {
      return require("module_9696");
    }
  });
};
export const StreamFailed = function StreamFailed(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8319.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_9695");
    },
    darker() {
      return require("module_9696");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
