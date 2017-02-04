/*jshint esversion: 6*/

// let myArray = [9,2,5,6,4,3,7,10,1,8];

function insertionSort(myArray) {
  for (var i = 0; i < myArray.length; i++) {
    var temp = myArray[i];
    for (var j = i - 1; j >= 0 && (myArray[j] > temp); j--) {
      myArray[j+1] = myArray[j];
    }
    myArray[j+ 1] = temp;
    console.log(myArray);
  }
  return myArray;
}

// console.log(insertionSort(myArray));

module.exports = insertionSort;