// Algorithm 1

var num = 2520
var divideBy = 11
while (divideBy <= 20) {
    if(num % divideBy == 0) {
        divideBy += 1;
    } else {
        num += 1;
        divideBy = 11;
    };
};
console.log(num);

// Algorithm 2

var counter1 = 999;
var counter2 = 999;
var palList = [];

while (counter1 > 100) {
    while (counter2 > 100) {
        var list1 = [];
        var list2 = [];
        var pal = counter1 * counter2;
        pal = pal.toString();
        if (pal.length == 6) {
            list1 = pal.slice(0, 3).split('');
            list2 = pal.slice(3, 6).split('');
            list2.reverse();
        } else {
            break;
        };
        if (list1[0] == list2[0] && list1[1] == list2[1] && list1[2] == list2[2]) {
            list2.reverse();
            var newPal = list1.concat(list2);
            newPal = parseInt(newPal.join(''));
            palList.push(newPal);
            break;
        } else {
            counter2 -= 1;
        };
    };
    counter1 -= 1;
    counter2 = counter1;
};
palList.sort(function(a, b){return b-a});
console.log(palList[0]);


//Algorithm 3

var myBeer = '';

for (i = 99; i > 0; i--) {
    let isValid = true;

    switch (isValid) {
        case (i % 7 == 0 && i % 5 == 0):
            myBeer = 'Miller Lite';
            break;

        case (i % 7 == 0):
            myBeer = 'Miller';
            break;

        case (i % 5 == 0):
            myBeer = 'Lite';
            break;
        
        default:
            myBeer = 'Beer'
    }
    console.log(`${i} bottles of ${myBeer} on the wall, take one down, pass it around, ${i - 1} bottles of ${myBeer} on the wall.`);
}