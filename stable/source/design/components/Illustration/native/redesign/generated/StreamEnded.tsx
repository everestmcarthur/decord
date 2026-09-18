// Module ID: 9604
// Function ID: 9605
// Name: StreamEnded
// Dependencies: [19, 17, 21, 8234, 9605, 9606, 4411, 2]
// Exports: StreamEnded, getStreamEndedSource, useStreamEndedSource

// Module 9604 (StreamEnded)
import shared from "shared" /* 4411 */;
import _mod8234 from "module_8234" /* 8234 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/StreamEnded.tsx");

export const getStreamEndedSource = function getStreamEndedSource(theme) {
  return _mod8234.getIllustrationSource(theme, {
    dark() {
      return require("module_9605");
    },
    darker() {
      return require("module_9606");
    }
  });
};
export const useStreamEndedSource = function useStreamEndedSource() {
  const obj = shared;
  return _mod8234.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_9605");
    },
    darker() {
      return require("module_9606");
    }
  });
};
export const StreamEnded = function StreamEnded(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8234.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_9605");
    },
    darker() {
      return require("module_9606");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
