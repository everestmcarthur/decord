// Module ID: 5823
// Function ID: 5824
// Dependencies: []
// Exports: getHeaderTitle

// Module 5823

export const getHeaderTitle = function getHeaderTitle(options, name) {
  if (typeof options.headerTitle === "string") {
    let title = options.headerTitle;
  } else {
    title = name;
    if (undefined !== options.title) {
      title = options.title;
    }
  }
  return title;
};
