// Module ID: 9778
// Function ID: 9779
// Name: createWebviewHtmlFile
// Dependencies: [5, 17, 1150, 1152, 1232, 2]
// Exports: createInjectedJavascriptForIOS, default

// Module 9778 (createWebviewHtmlFile)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const require = fn;
let closure_5 = async function _createWebviewHtmlFile(arg0, value) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_2 = tmp3;
          closure_1 = tmp7;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          closure_129_2 = undefined;
          closure_129_3 = undefined;
          closure_129_4 = undefined;
          ({ iFrameUri: closure_129_0, iFrameSandboxAttributes: closure_129_1, referrerPolicy: closure_129_2, insets: closure_129_3, messageForDisallowedNavigationError: closure_129_4 } = closure_0);
          closure_129_5 = undefined;
          closure_129_6 = undefined;
          c5 = 1;
          c6 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp7) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          closure_129_5 = "discord_activity_data/activity.html";
          const obj7 = { iFrameUri: closure_129_0, iFrameSandboxAttributes: closure_129_1, referrerPolicy: closure_129_2, insets: closure_129_3, messageForDisallowedNavigationError: closure_129_4 };
          closure_129_6 = (function generateWebviewHtml(arg0) {
            ({ iFrameUri, iFrameSandboxAttributes, referrerPolicy, insets, messageForDisallowedNavigationError } = arg0);
            let str = "";
            let str2 = "";
            if (obj.isAndroid()) {
              if (insets == null) {
                insets = { top: 0, bottom: 0, left: 0, right: 0 };
              }
              const _HermesInternal = HermesInternal;
              const combined = "\n  " + "iframeWindow" + ".addEventListener(\"load\", () => {\n    var iframeDoc = " + "iframeWindow" + ".document;\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-left', '" + insets.left + "px');\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-right', '" + insets.right + "px');\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-top', '" + insets.top + "px');\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-bottom', '" + insets.bottom + "px');\n    " + "isIframeLoaded" + " = true;\n  });\n";
              const _HermesInternal2 = HermesInternal;
              const _HermesInternal3 = HermesInternal;
              str2 = "\n      <script type=\"text/javascript\">\n        var iframe = document.getElementById(\"activityFrame\");\n        var iframeWindow = iframe.contentWindow;\n        var isIframeLoaded = false;\n        " + combined + "\n        " + "\n  function updateSafeAreaVars(insets) {\n    var iframeDoc = " + "iframeWindow" + ".document;\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-left', `${insets.left}px`);\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-right', `${insets.right}px`);\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-top', `${insets.top}px`);\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-bottom', `${insets.bottom}px`);\n    " + "iframeWindow" + ".dispatchEvent(new Event('resize'));\n    // Force redraw\n    iframeDoc.documentElement.offsetHeight;\n  }\n  " + "iframeWindow" + ".addEventListener('message', function (e) {\n    const messageData = e.data;\n    const {type, data} = messageData;\n    if (type === 'safeAreaUpdateEvent') {\n      const {insets} = data;\n      if (" + "isIframeLoaded" + ") {\n        updateSafeAreaVars(insets);\n      } else {\n        " + "iframeWindow" + ".addEventListener(\"load\", () => {\n          updateSafeAreaVars(insets);\n        });\n      }\n    }\n  });\n" + "\n      </script>\n      ";
            }
            if (null != messageForDisallowedNavigationError) {
              const _HermesInternal4 = HermesInternal;
              const _HermesInternal5 = HermesInternal;
              str = "\n      <script type=\"text/javascript\">\n        var iframe = document.getElementById(\"activityFrame\");\n        var iframeWindow = iframe.contentWindow;\n        " + "\n  " + "iframeWindow" + ".addEventListener('beforeunload', function (e) {\n    window.ReactNativeWebView.postMessage('" + messageForDisallowedNavigationError + "');\n    e.preventDefault();\n  });\n" + "\n      </script>\n      ";
            }
            return "\n  <html>\n  <head>\n      <style>\n      body {\n          padding: 0;\n          margin: 0;\n          width: 100vw;\n          min-height: 100vh; /* This keeps a small white gap at the bottom of the screen, the options below help prevent this. */\n          min-height: -moz-available; /* See: https://ilxanlar.medium.com/you-shouldnt-rely-on-css-100vh-and-here-s-why-1b4721e74487 for more info */\n          min-height: -webkit-fill-available;\n          min-height: fill-available;\n      }\n      </style>\n      <meta\n      name=\"viewport\"\n      content=\"width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, viewport-fit=cover\"\n      />\n  </head>\n  <body>\n      <script type=\"text/javascript\">\n          window.addEventListener('message', e => {\n            window.ReactNativeWebView.postMessage(JSON.stringify(e.data));\n          });\n      </script>\n      <iframe id=\"activityFrame\" width=\"100%\" height=\"100%\" src=\"" + iFrameUri + "\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen sandbox=\"" + iFrameSandboxAttributes + "\" referrerPolicy=\"" + referrerPolicy + "\">\n      </iframe>\n      " + str2 + "\n      " + str + "\n  </body>\n  </html>\n";
          })(obj7);
          c4 = 1;
          if (obj12.isAndroid()) {
            const obj6 = closure_130_1(closure_130_2[3]);
            let writeFileResult;
            if (obj6 != null) {
              writeFileResult = obj6.writeFile("cache", closure_129_5, closure_129_6, "utf8");
            }
            c5 = 4;
            c6 = 1;
            const obj8 = { value: writeFileResult, done: false };
            return obj8;
          } else {
            const DCDFileManager = closure_130_4.DCDFileManager;
            c5 = 3;
            c6 = 1;
            const obj9 = { value: DCDFileManager.writeFile("cache", closure_129_5, closure_129_6, "utf8"), done: false };
            return obj9;
          }
          obj12 = closure_130_0(closure_130_2[2]);
        }
      } else if (2 === tmp7) {
        c4 = 0;
        closure_129_7 = closure_3;
        closure_130_1(closure_130_2[4]).captureException(closure_129_7);
        c6 = 3;
        return { value: null, done: true };
      } else {
        if (3 === tmp7) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            const obj10 = { value, done: true };
            return obj10;
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          const obj = { value, done: true };
          return obj;
        }
        c4 = 0;
        c6 = 3;
        const obj11 = { value, done: true };
        return obj11;
      }
    } catch (tmp31) {
      closure_3 = tmp31;
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp31;
      } else {
        c5 = tmp;
      }
    }
  }
};
const NativeModules = fn(17).NativeModules;
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/native/createWebviewHtmlFile.tsx");

export default function createWebviewHtmlFile() {
  const self = this;
  const apply = closure_5.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const createInjectedJavascriptForIOS = function createInjectedJavascriptForIOS(rect1) {
  let rect = rect1;
  if (rect1 == null) {
    rect = { top: 0, bottom: 0, left: 0, right: 0 };
  }
  const combined = "\n  " + "iframeWindow" + ".addEventListener(\"load\", () => {\n    var iframeDoc = " + "iframeWindow" + ".document;\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-left', '" + rect.left + "px');\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-right', '" + rect.right + "px');\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-top', '" + rect.top + "px');\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-bottom', '" + rect.bottom + "px');\n    " + "isIframeLoaded" + " = true;\n  });\n";
  return "\nvar iframeWindow = window;\nvar isIframeLoaded = false;\n" + combined + "\n" + "\n  function updateSafeAreaVars(insets) {\n    var iframeDoc = " + "iframeWindow" + ".document;\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-left', `${insets.left}px`);\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-right', `${insets.right}px`);\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-top', `${insets.top}px`);\n    iframeDoc.documentElement.style.setProperty('--discord-safe-area-inset-bottom', `${insets.bottom}px`);\n    " + "iframeWindow" + ".dispatchEvent(new Event('resize'));\n    // Force redraw\n    iframeDoc.documentElement.offsetHeight;\n  }\n  " + "iframeWindow" + ".addEventListener('message', function (e) {\n    const messageData = e.data;\n    const {type, data} = messageData;\n    if (type === 'safeAreaUpdateEvent') {\n      const {insets} = data;\n      if (" + "isIframeLoaded" + ") {\n        updateSafeAreaVars(insets);\n      } else {\n        " + "iframeWindow" + ".addEventListener(\"load\", () => {\n          updateSafeAreaVars(insets);\n        });\n      }\n    }\n  });\n" + "\n";
};
