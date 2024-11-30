const utilStunks = require("./dist")

console.log(utilStunks.abbreviate(12500, { round: true, display: 0 }));
console.log(utilStunks.msToTime(Date.now(), { removeMs: true }));
console.log(utilStunks.randomArray(["Amanda", "Bruno", "Carlos", "Daniel"]));
console.log(utilStunks.relativeTime(Date.now() + 1200))