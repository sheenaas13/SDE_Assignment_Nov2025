
// Function to merge time ranges if they overlap or have small gaps
function mergeTimeRanges(ranges, threshold) {
  if (!ranges || ranges.length === 0) return [];

  // Sort by start time
  ranges.sort((a, b) => a[0] - b[0]);

  let result = [];
  let current = ranges[0];

  for (let i = 1; i < ranges.length; i++) {
    let next = ranges[i];

    // Check if next range overlaps or gap <= threshold
    if (next[0] <= current[1] + threshold) {
      // Merge the two
      current[1] = Math.max(current[1], next[1]);
    } else {
      // Push the finished range
      result.push(current);
      current = next;
    }
  }

  // Push the last one
  result.push(current);

  return result;
}

module.exports = { mergeTimeRanges };
