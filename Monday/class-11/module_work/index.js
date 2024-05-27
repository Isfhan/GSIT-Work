import x, { job } from "./first.js"; // esm 
import d, { add } from "./second.js";
console.log(job);
console.log(x); // default value from first.ts
d();
console.log(add(5, 7));
