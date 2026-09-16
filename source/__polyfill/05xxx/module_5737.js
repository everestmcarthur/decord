// Module ID: 5737
// Function ID: 5738
// Dependencies: []
// Exports: getDefaultSidebarWidth

// Module 5737

export const getDefaultSidebarWidth = (width) => {
  width = width.width;
  let num = 360;
  if (width - 56 <= 360) {
    num = width - 56;
  }
  return num;
};
