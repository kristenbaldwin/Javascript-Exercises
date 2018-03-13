// Exercise 1

function madlib(name, subject) {
    var answer = name + "'s favorite subject in school is " + subject + ".";
    return answer;
}
madlib('Bobby', 'science');

// Exercise 2

function tipAmount(bill, levelofService) {
    if (levelofService == 'good') {
        var tip = bill * 0.2;
        return tip;
    } else if (levelofService == 'fair') {
        var tip = bill * 0.15;
        return tip;
    } else if (levelofService == 'bad') {
        var tip = bill * 0.1;
        return tip;
    }
}
tipAmount(100, 'good');
tipAmount(40, 'fair');

// Exercise 3

function totalAmount(bill, levelofService) {
    if (levelofService == 'good') {
        var tip = bill * 0.2;
        return bill + tip;
    } else if (levelofService == 'fair') {
        var tip = bill * 0.15;
        return bill + tip;
    } else if (levelofService == 'bad') {
        var tip = bill * 0.1;
        return bill + tip;
    }
}
totalAmount(100, 'good');
tipAmount(40, 'fair');

// Exercise 4

/* While loop*/
function printNumbers(start, end) {
    var counter = start;   
    while (counter <= end) {
        console.log(counter);
        counter++;
    }
}
printNumbers(1, 10);

/*For loop*/
function printNumbers(start, end) {
    for (var counter = start; counter <= end; counter++) {
        console.log(counter);
    }
}
printNumbers(1, 10);

// Exercise 5

function printSquare(size) {
    for (var i = 0; i < size; i++) {
        console.log("*".repeat(size));
    }
}
printSquare(5);

// Exercise 6

function printBox(width, height) {
    console.log("*".repeat(width));
    var blank = " ".repeat(height);
    for (var i = 0; i < height - 2; i++) {
        console.log("*" + blank + "*");
    }
    console.log("*".repeat(width));
}
printBox(6, 4);

// Exercise 7

function printBanner(phrase) {
    console.log("*".repeat(phrase.length + 4));
    console.log("* " + phrase + " *");
    console.log("*".repeat(phrase.length + 4));
}
printBanner("Welcome to DigitalCrafts");

// Exercise 8

function leetspeak(word) {
    var word = word.toUpperCase();
    var word = word.replace(/A/g, "4");
    var word = word.replace(/E/g, "3");
    var word = word.replace(/G/g, "6");
    var word = word.replace(/I/g, "1");
    var word = word.replace(/O/g, "0");
    var word = word.replace(/S/g, "5");
    var word = word.replace(/T/g, "7");
    console.log(word);
}
leetspeak('Leet');

// Exercise 9

function longLongVowels(word) {
    var word = word.replace(/oo/g, "ooooo");
    var word = word.replace(/ee/g, "eeeee");
    console.log(word);
}
longLongVowels('cheese');

// Exercise 10

var myList = [-10, 3, 8, -2, 7, -25, 56];

function positiveNumbers(x) {
    var positives = [];
    for (var i = 0; i < x.length; i++) {
        if (x[i] > 0) {
            var morePositives = positives.push(x[i]);
        }
    }
    console.log(positives);
}
positiveNumbers(myList);

// Exercise 11

function cipher(phrase) {
    var offset = 13;
    var encoded = "";
    phrase = phrase.toLowerCase();
    for (var i = 0; i < phrase.length; i++) {
        code = phrase.charCodeAt(i);
        if (code >= 97 && code <= 122) {
            encodeChar = code + offset;
            if (encodeChar > 122) {
                newChar = String.fromCharCode(encodeChar - 26);
            } else {
                newChar = String.fromCharCode(encodeChar);
            }
        } else {
            newChar = String.fromCharCode(code);
        }
        encoded += newChar;
    }
    console.log(encoded);
}
cipher('Genius without education is like silver in the mine');

// Exercise 12

function decipher(phrase, offset) {
    phrase = phrase.toLowerCase();
    var decoded = "";
    for (var i = 0; i < phrase.length; i++) {
        code = phrase.charCodeAt(i);
        if (code >= 97 && code <= 122) {
            decodeChar = code - offset;
            if (decodeChar < 97) {
                newChar = String.fromCharCode(decodeChar + 26);
            } else {
                newChar = String.fromCharCode(decodeChar);
            }
        } else {
            newChar = String.fromCharCode(code);
        }
        decoded += newChar;
    }
    console.log(decoded);
}
decipher('Travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar', 13);