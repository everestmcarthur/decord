// Module ID: 9633
// Function ID: 9634
// Name: StreamFailed
// Dependencies: [19, 17, 21, 8259, 9634, 9635, 4425, 2]
// Exports: StreamFailed, getStreamFailedSource, useStreamFailedSource

// Module 9633 (StreamFailed)
import shared from "shared" /* 4425 */;
import _mod8259 from "module_8259" /* 8259 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/StreamFailed.tsx");

export const getStreamFailedSource = function getStreamFailedSource(theme) {
  return _mod8259.getIllustrationSource(theme, {
    dark() {
      return require("module_9634");
    },
    darker() {
      return require("module_9635");
    }
  });
};
export const useStreamFailedSource = function useStreamFailedSource() {
  const obj = shared;
  return _mod8259.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_9634");
    },
    darker() {
      return require("module_9635");
    }
  });
};
export const StreamFailed = function StreamFailed(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8259.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_9634");
    },
    darker() {
      return require("module_9635");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
