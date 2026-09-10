// Module ID: 16886
// Function ID: 16887
// Name: WebhookEmpty
// Dependencies: [19, 17, 21, 8259, 16887, 16888, 16889, 4425, 2]
// Exports: WebhookEmpty, getWebhookEmptySource, useWebhookEmptySource

// Module 16886 (WebhookEmpty)
import shared from "shared" /* 4425 */;
import _mod8259 from "module_8259" /* 8259 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/WebhookEmpty.tsx");

export const getWebhookEmptySource = function getWebhookEmptySource(theme) {
  return _mod8259.getIllustrationSource(theme, {
    dark() {
      return require("module_16887");
    },
    darker() {
      return require("module_16888");
    },
    light() {
      return require("module_16889");
    }
  });
};
export const useWebhookEmptySource = function useWebhookEmptySource() {
  const obj = shared;
  return _mod8259.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_16887");
    },
    darker() {
      return require("module_16888");
    },
    light() {
      return require("module_16889");
    }
  });
};
export const WebhookEmpty = function WebhookEmpty(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8259.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_16887");
    },
    darker() {
      return require("module_16888");
    },
    light() {
      return require("module_16889");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
