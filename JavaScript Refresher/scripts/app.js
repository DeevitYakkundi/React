// import { apiKey } from "./util.js";
import * as util from "./util.js"; // to import everything

//To rename what has been imported we can use "as" 
import { apiKey3 as Passcode } from "./util.js";

console.log(Passcode + "Renamed as Passcode")
console.log(util.apiKey2 + "All imported at once and displayed using . operator")
// console.log(apiKey);