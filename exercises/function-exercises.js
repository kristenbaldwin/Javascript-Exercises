// Exercise 1
/*
var myArr = [1, -4, 22, 6, -8, -20, 15];
var newArr = myArr.filter(function(e) {
    return e > 0;
});
console.log(newArr);

// Exercise 2

var myArr = [1, -4, 22, 6, -8, -20, 15];
var newArr = myArr.filter(function(e) {
    return e % 2 == 0;
});
console.log(newArr);

// Exercise 3

var myArr = [1, -4, 22, 6, -8, -20, 15];
var newArr = myArr.map(function(e) {
    return Math.pow(e, 2);
});
console.log(newArr);

// Exercise 4

var cities = [
    { name: 'Los Angeles', temperature: 60.0},
    { name: 'Atlanta', temperature: 52.0 },
    { name: 'Detroit', temperature: 48.0 },
    { name: 'New York', temperature: 80.0 }
];

var coolCities = cities.filter(function(e) {
    return e.temperature < 70;
});
console.log(coolCities);

// Exercise 5

var cities = [
    { name: 'Los Angeles', temperature: 60.0},
    { name: 'Atlanta', temperature: 52.0 },
    { name: 'Detroit', temperature: 48.0 },
    { name: 'New York', temperature: 80.0 }
];

var newArr = cities.map(function(e) {
    return e.name;
});
console.log(newArr);

// Exercise 6

var people = [
    'Dom',
    'Lyn',
    'Kirk',
    'Autumn',
    'Trista',
    'Jesslyn',
    'Kevin',
    'John',
    'Eli',
    'Juan',
    'Robert',
    'Keyur',
    'Jason',
    'Che',
    'Ben'
];

people.forEach(function(e) {
    console.log('Good Job, ' + e + ' !');
});

// Exercise 7

var people = [
    'Dom',
    'Lyn',
    'Kirk',
    'Autumn',
    'Trista',
    'Jesslyn',
    'Kevin',
    'John',
    'Eli',
    'Juan',
    'Robert',
    'Keyur',
    'Jason',
    'Che',
    'Ben'
];

people.sort();

// Exercise 8

var people = [
    'Dom',
    'Lyn',
    'Kirk',
    'Autumn',
    'Trista',
    'Jesslyn',
    'Kevin',
    'John',
    'Eli',
    'Juan',
    'Robert',
    'Keyur',
    'Jason',
    'Che',
    'Ben'
];

function inOrder() {
    var newArr = people.sort(function(a, b) {
        var x = a.length;
        var y = b.length;
        if (x > y) {return 1;}
        if (x < y) {return -1;}
        return 0;
    });
    console.log(newArr);
};
inOrder();

// Exercise 9 - Waiting for answer from Veronica
*/
var arr = [
    [1, 3, 4],
    [2, 4, 6, 8],
    [3, 6]
];
var newArray = [];
var sumList = [];

function sumArray(x) {
    sumList = x.reduce(function(a, b) {return a + b;}, 0);
};

arr.sort(function(a, b) {
    return (sumArray(a) - sumArray(b)); 
});


// Exercise 10
/*
function x() {
    console.log("Hello, world!")
};
function call3Times(fun) {
    fun();
    fun();
    fun();
};

call3Times(x);

// Exercise 11

function callNTimes(number, fun) {
   for (var i = 0; i < number; i++) {
       fun();
   };
};
callNTimes(5, x);

// Exercise 12

var arr = [2, 7, 12];
function sumArr(x) {
    var sum = x.reduce(function(a, b) {return a + b;}, 0);
    console.log(sum);
};
sumArr(arr);
*/
// Exercise 13

var words = ['very', 'important', 'person'];

var acro = words.reduce(function (a, b){
    return a + b.charAt(0).toUpperCase();
}, '');
console.log(acro);

