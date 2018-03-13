function Person(name, email, phone) {
    this.name = name;
    this.email = email;
    this.phone = phone;
  }
  
  Person.prototype.greet = function(other) {
    console.log('Hello ' + other.name + ', I am ' + this.name + '!');
  };

  // #1
 var sonny = new Person('Sonny', 'sonny@hotmail.com', '483-485-4948');

 // #2
 var jordan = new Person('Jordan', 'jordan@aol.com', '495-586-3456');

 // #3
sonny.greet(jordan);

// #4
jordan.greet(sonny);

// #5
console.log(`'Email: ${sonny.email}, Phone: ${sonny.phone}'`);

// #6
console.log(`'Email: ${jordan.email}, Phone: ${jordan.phone}'`);

//
//

var mom = {
    firstName: 'Alice',
    lastName: 'Wong',
    eyeColor: 'brown',
    hairColor: 'black',
    showInfo: function() {
       console.log(`'firstName: ${this.firstName}, lastName: ${this.lastName}, eyeColor: ${this.eyeColor}, hairColor: ${this.hairColor}'`);
    }
  };
  var daughter = {
    firstName: 'Ilene',
    hairColor: 'brown'
  };

// #1
daughter.__proto__ = mom;
console.log(daughter);

// #2
mom.showInfo();
daughter.showInfo();

//
//

// Rewrite as a class
function Person(name) {
    this.name = name;
    this.friends = [];
  }
  
  Person.prototype.addFriend = function(friend) {
    this.friends.push(friend);
  };
  
  Person.prototype.createGreeting = function(other) {
    return 'Yo ' + other.name + '! from ' + this.name + '.';
  };
  
  Person.prototype.greet = function(other) {
    console.log(this.createGreeting(other));
  };

// Above code as a class
class Person {
    constructor(name) {
        this.name = name;
        this.friends = [];
    }
};
Person.prototype.addFriend = function(friend) {
    this.friends.push(friend);
};
Person.prototype.createGreeting = function(other) {
    return 'Yo ' + other.name + '! from ' + this.name + '.';
};
Person.prototype.greet = function(other) {
    console.log(this.createGreeting(other));
};
Person.prototype.lazyGreet = function(other) {
    setTimeout(() => {
        console.log(this.createGreeting(other));
    },2000);
};
Person.prototype.createGreetingsForFriends = function() {
    var mythis = this;
    var greetFriends = mythis.friends.map(function(e) {      
        return mythis.createGreeting(e);
    });
    console.log(greetFriends);
};

var alfie = new Person('Alfie');
var anushka = new Person('Anushka');
var henrique = new Person('Henrique');
alfie.addFriend(anushka);
alfie.addFriend(henrique);
alfie.createGreetingsForFriends();