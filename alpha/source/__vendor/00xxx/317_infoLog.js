// Module ID: 317
// Function ID: 318
// Name: infoLog
// Dependencies: []
// Exports: default

// Module 317 (infoLog)

export default function infoLog() {
  const items = [...HermesBuiltin.copyRestArgs()];
  return console.log.apply(items);
};
