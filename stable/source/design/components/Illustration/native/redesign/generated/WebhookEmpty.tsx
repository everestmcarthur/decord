// Module ID: 16849
// Function ID: 16850
// Name: WebhookEmpty
// Dependencies: [19, 17, 21, 8234, 16850, 16851, 16852, 4411, 2]
// Exports: WebhookEmpty, getWebhookEmptySource, useWebhookEmptySource

// Module 16849 (WebhookEmpty)
import shared from "shared" /* 4411 */;
import _mod8234 from "module_8234" /* 8234 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/WebhookEmpty.tsx");

export const getWebhookEmptySource = function getWebhookEmptySource(theme) {
  return _mod8234.getIllustrationSource(theme, {
    dark() {
      return require("module_16850");
    },
    darker() {
      return require("module_16851");
    },
    light() {
      return require("module_16852");
    }
  });
};
export const useWebhookEmptySource = function useWebhookEmptySource() {
  const obj = shared;
  return _mod8234.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_16850");
    },
    darker() {
      return require("module_16851");
    },
    light() {
      return require("module_16852");
    }
  });
};
export const WebhookEmpty = function WebhookEmpty(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8234.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_16850");
    },
    darker() {
      return require("module_16851");
    },
    light() {
      return require("module_16852");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
