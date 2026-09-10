// Module ID: 8573
// Function ID: 8574
// Name: extractPolyPoints
// Dependencies: []
// Exports: default

// Module 8573 (extractPolyPoints)

export default function extractPolyPoints(join) {
  let str = join;
  if (Array.isArray(join)) {
    str = join.join(",");
  }
  const parts = str.replace(/[^eE]-/, " -").split(/(?:\s+|\s*,\s*)/g);
  return parts.join(" ");
};
