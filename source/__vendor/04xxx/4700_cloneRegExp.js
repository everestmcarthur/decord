// Module ID: 4700
// Function ID: 4701
// Name: cloneRegExp
// Dependencies: []

// Module 4700 (cloneRegExp)
const re0 = /\w*$/;

export default function cloneRegExp(source) {
  const constructor = new source.constructor(source.source, re0.exec(source));
  constructor.lastIndex = source.lastIndex;
  return constructor;
};
