
// You should implement your task here.

module.exports = function towelSort(matrix) {

  matrix = matrix || [];

  if (matrix.length === 0) {
    return [];
  } else {
    matrix.forEach((element, index) => { index % 2 !== 0 ? console.log(element.reverse()) : element });
  }
  return matrix.flat();

}
