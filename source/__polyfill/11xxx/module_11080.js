// Module ID: 11080
// Function ID: 11081
// Dependencies: [8506, 11081]

// Module 11080
import baseRest from "baseRest" /* 8506 */;
import baseDelay from "baseDelay" /* 11081 */;


export default baseRest((arg0, arg1) => baseDelay(arg0, 1, arg1));
