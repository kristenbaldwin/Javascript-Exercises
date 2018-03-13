// Exercise 1
var count1 = counter();
var count2 = counter();

function counter () {
    var count = 0;
    var newCount = function () {
        count++;
        return count;
    }
    return newCount;
};

// Exercise 2
var count1 = counter(4);
var count2 = counter(2);

function counter (x) {
    var count = x;
    var newCount = function () {
        count++;
        return count;
    }
    return newCount;
};

// Exercise 3
var count = new Counter(4);

function Counter(start) {
    this.start = start;
}

Counter.prototype.increment = function() {
    this.start += 1;
    return this.start;
}

Counter.prototype.decrement = function() {
    this.start -= 1;
    return this.start;
}
