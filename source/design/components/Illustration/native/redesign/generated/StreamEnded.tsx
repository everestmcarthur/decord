// Module ID: 9691
// Function ID: 9692
// Name: StreamEnded
// Dependencies: [19, 17, 21, 8319, 9692, 9693, 4458, 2]
// Exports: StreamEnded, getStreamEndedSource, useStreamEndedSource

// Module 9691 (StreamEnded)
import shared from "shared" /* 4458 */;
import _mod8319 from "module_8319" /* 8319 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/StreamEnded.tsx");

export const getStreamEndedSource = function getStreamEndedSource(theme) {
  return _mod8319.getIllustrationSource(theme, {
    dark() {
      return require("module_9692");
    },
    darker() {
      return require("module_9693");
    }
  });
};
export const useStreamEndedSource = function useStreamEndedSource() {
  const obj = shared;
  return _mod8319.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_9692");
    },
    darker() {
      return require("module_9693");
    }
  });
};
export const StreamEnded = function StreamEnded(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8319.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_9692");
    },
    darker() {
      return require("module_9693");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
