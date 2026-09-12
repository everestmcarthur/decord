// Module ID: 16959
// Function ID: 16960
// Name: WebhookEmpty
// Dependencies: [19, 17, 21, 8349, 16960, 16961, 16962, 4488, 2]
// Exports: WebhookEmpty, getWebhookEmptySource, useWebhookEmptySource

// Module 16959 (WebhookEmpty)
import shared from "shared" /* 4488 */;
import _mod8349 from "module_8349" /* 8349 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/WebhookEmpty.tsx");

export const getWebhookEmptySource = function getWebhookEmptySource(theme) {
  return _mod8349.getIllustrationSource(theme, {
    dark() {
      return require("module_16960");
    },
    darker() {
      return require("module_16961");
    },
    light() {
      return require("module_16962");
    }
  });
};
export const useWebhookEmptySource = function useWebhookEmptySource() {
  const obj = shared;
  return _mod8349.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_16960");
    },
    darker() {
      return require("module_16961");
    },
    light() {
      return require("module_16962");
    }
  });
};
export const WebhookEmpty = function WebhookEmpty(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8349.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_16960");
    },
    darker() {
      return require("module_16961");
    },
    light() {
      return require("module_16962");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
