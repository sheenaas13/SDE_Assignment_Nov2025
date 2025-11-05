const { mergeTimeRanges } = require('./mergeTimeRanges.js');

const data = [
  [1000, 2000],
  [2500, 4000],
  [3900, 4100],
  [8000, 9000],
  [9050, 9500]
];

console.log(mergeTimeRanges(data, 200));
