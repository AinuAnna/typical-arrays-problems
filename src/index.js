
exports.min = function min(array) {
  if ((array || []).length === 0)
    return 0;
  var min = array[0]; // min

  for (var i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }
  return min;
}
exports.max = function max(array) {
  if ((array || []).length === 0)
    return 0;
  var max = array[0]; // max
  for (var i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
} 
exports.avg = function avg(array) {
  if ((array || []).length === 0)
    return 0;
  var sum = array[0]; // sum
  for (var i = 1; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum / array.length;
}
