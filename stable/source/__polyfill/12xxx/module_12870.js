// Module ID: 12870
// Function ID: 12871
// Dependencies: []
// Exports: parameterize

// Module 12870

export const parameterize = function parameterize(join) {
  const substr = [...arguments].slice();
  const items = [join, ...substr];
  const string = new String(String.raw.apply(items));
  const str = join.join("\0");
  string.__sentry_template_string__ = join.join("\0").replace(/%/g, "%%").replace(/\0/g, "%s");
  string.__sentry_template_values__ = substr;
  return string;
};
