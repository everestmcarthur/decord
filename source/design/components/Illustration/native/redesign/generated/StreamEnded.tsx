// Module ID: 9630
// Function ID: 9631
// Name: StreamEnded
// Dependencies: [19, 17, 21, 8259, 9631, 9632, 4425, 2]
// Exports: StreamEnded, getStreamEndedSource, useStreamEndedSource

// Module 9630 (StreamEnded)
import shared from "shared" /* 4425 */;
import _mod8259 from "module_8259" /* 8259 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/StreamEnded.tsx");

export const getStreamEndedSource = function getStreamEndedSource(theme) {
  return _mod8259.getIllustrationSource(theme, {
    dark() {
      return require("module_9631");
    },
    darker() {
      return require("module_9632");
    }
  });
};
export const useStreamEndedSource = function useStreamEndedSource() {
  const obj = shared;
  return _mod8259.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_9631");
    },
    darker() {
      return require("module_9632");
    }
  });
};
export const StreamEnded = function StreamEnded(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8259.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_9631");
    },
    darker() {
      return require("module_9632");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
