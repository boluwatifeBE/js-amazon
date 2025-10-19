import { formatCurrency } from "../scripts/utils/money";

console.log("test suite: formatCurrency");
console.log("converts cents into dollars");
if (formatCurrency(2093) === "20.93") {
  console.log("code passed");
} else {
  console.log("code failed");
}

console.log("it works with 0");
if (formatCurrency(0) === "0.00") {
  console.log("code passed");
} else {
  console.log("code failed");
}

console.log("it rounds up to the nearest cent");
if (formatCurrency(2000.5) === "20.01") {
  console.log("code passed");
} else {
  console.log("code failed");
}
