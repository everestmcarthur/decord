// Module ID: 4732
// Function ID: 4733
// Name: cloneRegExp
// Dependencies: []

// Module 4732 (cloneRegExp)
const re0 = /\w*$/;

export default function cloneRegExp(source) {
  const constructor = new source.constructor(source.source, re0.exec(source));
  constructor.lastIndex = source.lastIndex;
  return constructor;
};
