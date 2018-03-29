// #1
var myArray = [-7, -5, -2, 1, 0, 2, 5, 7, 9];
var pairs = [];

for (i=0; i < myArray.length; i++) {
    for (j=i + 1; j < myArray.length; j++) {
        if (myArray[i] + myArray[j] == 0) {
            var equalZero = [myArray[i], myArray[j]];
            pairs.push(equalZero);
        }
    }
}
console.log(pairs);

// #2
var newArray = [-2, 4, 5, -1, 7];

for (i = 1; i < newArray.length; i++) {
    if (newArray[i] < newArray[i - 1]) {
        var randIndex1 = Math.floor(Math.random() * newArray.length);
        var randIndex2 = Math.floor(Math.random() * newArray.length);
        // console.log(randIndex1, randIndex2);
        var temp = newArray[randIndex1];
        newArray[randIndex1] = newArray[randIndex2];
        newArray[randIndex2] = temp;
        // console.log(temp, newArray[randIndex1], newArray[randIndex2]);
        i = 0;
    }
}
console.log(newArray);