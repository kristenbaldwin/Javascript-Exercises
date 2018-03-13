// Card Constructor
function Card(point, suit) {
    this.point = point;
    this.suit = suit;
}

Card.prototype.getImageUrl = function(card) {
    var pointURL = '';
    switch(card[0]) {
        case 1: 
            pointURL = 'A';
            break;
        case 11:
            pointURL = 'J';
            break;
        case 12:
            pointURL = 'Q';
            break;
        case 13:
            pointURL = 'K';
            break;
        default:
            pointURL = card[0];
    }
    var suitURL = '';
    switch(card[1]) {
        case 'hearts':
            suitURL = 'H';
            break;
        case 'diamonds':
            suitURL = 'D';
            break;
        case 'clubs':
            suitURL = 'C';
            break;
        case 'spades':
            suitURL = 'S';
    }
    return `cards/${pointURL}${suitURL}.jpg`;
};

// Hand Constructor
function Hand() {
    this.cardsInHand = [];
}

Hand.prototype.addCard = function(card) {
    this.cardsInHand.push(card);
}

Hand.prototype.getPoints = function() {
    var self = this;
    var points = self.cardsInHand.map(function(e) {
        return e.point;
    });
    points.reduce(function(a, b) {
        return a + b;
    }, 0);
}

// Deck Constructor
function Deck() {
    this.deck = [];
}

Deck.prototype.draw = function() {
    let cardIndex = Math.floor(Math.random() * deck.length);
    var randCard = deck[cardIndex];
    randCard.splice(cardIndex, 1);
    return randCard;
}

Deck.prototype.shuffle = function() {
    for (var i = this.deck.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = this.deck[i];
        this.deck[i] = this.deck[j];
        this.deck[j] = temp;
    }
    return this.deck;
}

Deck.prototype.numCardsLeft = function() {
    return this.deck.length;
}