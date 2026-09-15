// Module ID: 9730
// Function ID: 9731
// Name: StreamEnded
// Dependencies: [19, 17, 21, 8352, 9731, 9732, 4491, 2]
// Exports: StreamEnded, getStreamEndedSource, useStreamEndedSource

// Module 9730 (StreamEnded)
import shared from "shared" /* 4491 */;
import _mod8352 from "module_8352" /* 8352 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/StreamEnded.tsx");

export const getStreamEndedSource = function getStreamEndedSource(theme) {
  return _mod8352.getIllustrationSource(theme, {
    dark() {
      return require("module_9731");
    },
    darker() {
      return require("module_9732");
    }
  });
};
export const useStreamEndedSource = function useStreamEndedSource() {
  const obj = shared;
  return _mod8352.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_9731");
    },
    darker() {
      return require("module_9732");
    }
  });
};
export const StreamEnded = function StreamEnded(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8352.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_9731");
    },
    darker() {
      return require("module_9732");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
