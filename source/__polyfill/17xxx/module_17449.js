// Module ID: 17449
// Function ID: 17450
// Dependencies: []

// Module 17449
globalThis.IntlMessageFormat.__addLocaleData({
  locale: "bg",
  pluralRuleFunction(arg0, arg1) {
    let str = "other";
    let str2 = "other";
    if (!arg1) {
      if (1 == arg0) {
        str = "one";
      }
      str2 = str;
    }
    return str2;
  }
});
