// Module ID: 4733
// Function ID: 4734
// Name: cloneRegExp
// Dependencies: []

// Module 4733 (cloneRegExp)
const re0 = /\w*$/;

export default function cloneRegExp(source) {
  const constructor = new source.constructor(source.source, re0.exec(source));
  constructor.lastIndex = source.lastIndex;
  return constructor;
};
