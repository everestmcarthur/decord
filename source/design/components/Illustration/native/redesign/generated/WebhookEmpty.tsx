// Module ID: 16932
// Function ID: 16933
// Name: WebhookEmpty
// Dependencies: [19, 17, 21, 8319, 16933, 16934, 16935, 4458, 2]
// Exports: WebhookEmpty, getWebhookEmptySource, useWebhookEmptySource

// Module 16932 (WebhookEmpty)
import shared from "shared" /* 4458 */;
import _mod8319 from "module_8319" /* 8319 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/WebhookEmpty.tsx");

export const getWebhookEmptySource = function getWebhookEmptySource(theme) {
  return _mod8319.getIllustrationSource(theme, {
    dark() {
      return require("module_16933");
    },
    darker() {
      return require("module_16934");
    },
    light() {
      return require("module_16935");
    }
  });
};
export const useWebhookEmptySource = function useWebhookEmptySource() {
  const obj = shared;
  return _mod8319.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_16933");
    },
    darker() {
      return require("module_16934");
    },
    light() {
      return require("module_16935");
    }
  });
};
export const WebhookEmpty = function WebhookEmpty(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8319.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_16933");
    },
    darker() {
      return require("module_16934");
    },
    light() {
      return require("module_16935");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
