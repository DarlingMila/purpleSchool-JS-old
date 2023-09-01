const arr = [1, 40, -5, 10, 0, 200, -200];

function sortArray(array) {
  let count = 0;
  const arrLength = array.length;

  for (let i = 0; i < arrLength; i++) {

    for (let j = 0; j < arrLength; j++) {
      count++;

      if (array[i] < array[j]) {
        // const num1 = array[i];
        // const num2 = array[j];

        // array[i] = num2;
        // array[j] = num1;

        [array[i], array[j]] = [array[j], array[i]];
      }
    }
  }

  console.log(count);
  return array;
}

console.log(sortArray(arr));