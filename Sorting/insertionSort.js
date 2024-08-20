function insertSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      let num = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > num) {
        arr[j + 1] = arr[j];
        j = j - 1;
      }
      arr[j + 1] = num;
    }
  }
  
  let arr = [3, 1, 4, 5, 2];
  
  insertSort(arr);
  console.log(arr);