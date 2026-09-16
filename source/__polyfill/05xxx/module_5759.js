// Module ID: 5759
// Function ID: 5760
// Dependencies: []
// Exports: getLabel

// Module 5759

export const getLabel = function getLabel(label, arg1) {
  if (undefined !== label.label) {
    let title = label.label;
  } else {
    title = arg1;
    if (undefined !== label.title) {
      title = label.title;
    }
  }
  return title;
};
