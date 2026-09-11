// Module ID: 17640
// Function ID: 17641
// Name: EmptyServerSettingsAuditLog
// Dependencies: [19, 17, 21, 8317, 17641, 17642, 17643, 4458, 2]
// Exports: EmptyServerSettingsAuditLog, getEmptyServerSettingsAuditLogSource, useEmptyServerSettingsAuditLogSource

// Module 17640 (EmptyServerSettingsAuditLog)
import shared from "shared" /* 4458 */;
import _mod8317 from "module_8317" /* 8317 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/EmptyServerSettingsAuditLog.tsx");

export const getEmptyServerSettingsAuditLogSource = function getEmptyServerSettingsAuditLogSource(theme) {
  return _mod8317.getIllustrationSource(theme, {
    dark() {
      return require("module_17641");
    },
    darker() {
      return require("module_17642");
    },
    light() {
      return require("module_17643");
    }
  });
};
export const useEmptyServerSettingsAuditLogSource = function useEmptyServerSettingsAuditLogSource() {
  const obj = shared;
  return _mod8317.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_17641");
    },
    darker() {
      return require("module_17642");
    },
    light() {
      return require("module_17643");
    }
  });
};
export const EmptyServerSettingsAuditLog = function EmptyServerSettingsAuditLog(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8317.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_17641");
    },
    darker() {
      return require("module_17642");
    },
    light() {
      return require("module_17643");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
