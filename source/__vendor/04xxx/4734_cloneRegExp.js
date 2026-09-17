// Module ID: 4734
// Function ID: 4735
// Name: cloneRegExp
// Dependencies: []

// Module 4734 (cloneRegExp)
const re0 = /\w*$/;

export default function cloneRegExp(source) {
  const constructor = new source.constructor(source.source, re0.exec(source));
  constructor.lastIndex = source.lastIndex;
  return constructor;
};
