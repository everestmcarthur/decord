// Module ID: 12888
// Function ID: 12889
// Name: severityLevelFromString
// Dependencies: []

// Module 12888 (severityLevelFromString)
arg5.severityLevelFromString = function severityLevelFromString(arg0) {
  let str = "warning";
  if ("warn" !== arg0) {
    const items = ["fatal", "error", "warning", "log", "info", "debug"];
    let str2 = "log";
    if (items.includes(arg0)) {
      str2 = arg0;
    }
    str = str2;
  }
  return str;
};
arg5.validSeverityLevels = ["fatal", "error", "warning", "log", "info", "debug"];
