// Module ID: 14424
// Function ID: 14425
// Dependencies: []
// Exports: default

// Module 14424

export default () => (arg0) => {
  closure_0 = arg0;
  return {
    features: {
      apiResponse(request, response, tmp4Result) {
        let status = response;
        if (response) {
          status = response.status;
        }
        if (status) {
          status = typeof response.status === "number";
        }
        if (status) {
          status = response.status >= 200;
        }
        if (status) {
          status = response.status <= 299;
        }
        closure_0.send("api.response", { request, response, duration: tmp4Result }, !status);
      }
    }
  };
};
