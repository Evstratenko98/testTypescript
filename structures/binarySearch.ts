const searchElemInArray = (array: number[]) => {
  const resIndex = 0;

  const recurseFunc = (array: number[]) => {
    console.log(array.length)
    console.log(array[array.length / 2]);
  }

  recurseFunc(array);
}

const example = [1, 2, 3, 4, 5, 6, 7, 8]

searchElemInArray(example)