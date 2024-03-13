function insertSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      let nti = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > nti) {
        arr[j + 1] = arr[j];
        j = j - 1;
      }
      arr[j + 1] = nti;
    }
  }
  
  let arr = [3, 1, 4, 5, 2];
  
  insertSort(arr);
  console.log(arr);