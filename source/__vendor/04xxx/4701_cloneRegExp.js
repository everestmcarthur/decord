// Module ID: 4701
// Function ID: 4702
// Name: cloneRegExp
// Dependencies: []

// Module 4701 (cloneRegExp)
const re0 = /\w*$/;

export default function cloneRegExp(source) {
  const constructor = new source.constructor(source.source, re0.exec(source));
  constructor.lastIndex = source.lastIndex;
  return constructor;
};
