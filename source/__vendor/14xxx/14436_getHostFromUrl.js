// Module ID: 14436
// Function ID: 14437
// Name: getHostFromUrl
// Dependencies: []

// Module 14436 (getHostFromUrl)
arg5.getHostFromUrl = function getHostFromUrl(scriptURL) {
  const match = scriptURL.match(/^(?:https?:\/\/)?(\[[^\]]+\]|[^/:\s]+)(?::\d+)?(?:[/?#]|$)/);
  let tmp2;
  if (match != null) {
    tmp2 = match[1];
  }
  if (typeof tmp2 !== "string") {
    const _Error = Error;
    error = new Error("Invalid URL - host not found");
    throw error;
  } else {
    return tmp2;
  }
};
