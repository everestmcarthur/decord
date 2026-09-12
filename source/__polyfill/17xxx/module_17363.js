// Module ID: 17363
// Function ID: 17364
// Dependencies: []

// Module 17363
globalThis.IntlMessageFormat.__addLocaleData({
  locale: "hu",
  pluralRuleFunction(arg0, arg1) {
    if (arg1) {
      if (1 == arg0) {
        let str2 = "one";
      } else {
        str2 = "other";
      }
      let str = str2;
    } else {
      str = "other";
      if (1 == arg0) {
        str = "one";
      }
    }
    return str;
  }
});
