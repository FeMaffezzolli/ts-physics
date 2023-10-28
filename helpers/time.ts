export function calculateDiffInHours(date1, date2) {
  const diffInMs = Math.abs(date1 - date2);
  return diffInMs / (1000 * 60 * 60);
}