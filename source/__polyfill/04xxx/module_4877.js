// Module ID: 4877
// Function ID: 4878
// Dependencies: [4878]

// Module 4877
import _mod4878 from "module_4878" /* 4878 */;


export default function getPolyfill() {
  if (String.prototype.trim) {
    const trim = "\u200B".trim;
    if ("\u200B" === "\u200B".trim()) {
      const trim2 = "\u180E".trim;
      if ("\u180E" === "\u180E".trim()) {
        const trim3 = "_\u180E".trim;
        if ("_\u180E" === "_\u180E".trim()) {
          const trim4 = "\u180E_".trim;
          if ("\u180E_" === "\u180E_".trim()) {
            const _String = String;
          }
          return trim5;
        }
      }
    }
  }
  trim5 = _mod4878;
};
