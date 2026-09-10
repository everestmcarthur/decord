// Module ID: 16943
// Function ID: 16944
// Name: WebhookEmpty
// Dependencies: [19, 17, 21, 8296, 16944, 16945, 16946, 4456, 2]
// Exports: WebhookEmpty, getWebhookEmptySource, useWebhookEmptySource

// Module 16943 (WebhookEmpty)
import shared from "shared" /* 4456 */;
import _mod8296 from "module_8296" /* 8296 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/WebhookEmpty.tsx");

export const getWebhookEmptySource = function getWebhookEmptySource(theme) {
  return _mod8296.getIllustrationSource(theme, {
    dark() {
      return require("module_16944");
    },
    darker() {
      return require("module_16945");
    },
    light() {
      return require("module_16946");
    }
  });
};
export const useWebhookEmptySource = function useWebhookEmptySource() {
  const obj = shared;
  return _mod8296.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_16944");
    },
    darker() {
      return require("module_16945");
    },
    light() {
      return require("module_16946");
    }
  });
};
export const WebhookEmpty = function WebhookEmpty(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8296.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_16944");
    },
    darker() {
      return require("module_16945");
    },
    light() {
      return require("module_16946");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
