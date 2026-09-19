// Module ID: 9687
// Function ID: 9688
// Name: StreamEnded
// Dependencies: [19, 17, 21, 8501, 9688, 9689, 4607, 2]
// Exports: StreamEnded, getStreamEndedSource, useStreamEndedSource

// Module 9687 (StreamEnded)
import shared from "shared" /* 4607 */;
import _mod8501 from "module_8501" /* 8501 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/StreamEnded.tsx");

export const getStreamEndedSource = function getStreamEndedSource(theme) {
  return _mod8501.getIllustrationSource(theme, {
    dark() {
      return require("module_9688");
    },
    darker() {
      return require("module_9689");
    }
  });
};
export const useStreamEndedSource = function useStreamEndedSource() {
  const obj = shared;
  return _mod8501.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_9688");
    },
    darker() {
      return require("module_9689");
    }
  });
};
export const StreamEnded = function StreamEnded(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8501.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_9688");
    },
    darker() {
      return require("module_9689");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
