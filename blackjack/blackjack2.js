// Deck of cards
var suits = ['H', 'D', 'C', 'S'];
var points = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
var card = [];

// Deck Constructor
function Deck() {
    this.deck = [];
}

Deck.prototype.createDeck = function() {
    for (i = 0; i < suits.length; i++) {
        for (j = 0; j < points.length; j++) {
            card[0] = points[j];
            card[1] = suits[i];
            this.deck.push(card);
            card = [];
        };
    };
}

Deck.prototype.draw = function() {
    let cardIndex = Math.floor(Math.random() * this.deck.length);
    var randCard = this.deck[cardIndex];
    this.deck.splice(cardIndex, 1);
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

// Card Constructor
function Card(point, suit) {
    this.point = point[0];
    this.suit = point[1];
}

Card.prototype.getImageUrl = function() {
    var pointURL = '';
    switch(this.point) {
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
            pointURL = this.point;
    }
    var suitURL = this.suit;
    return `cards/${pointURL}${suitURL}.jpg`;
};

// Hand Constructor
function Hand() {
    this.cardsInHand = [];
    this.totalPoints = Number();
}

Hand.prototype.addCard = function(card) {
    this.cardsInHand.push(card);
}

Hand.prototype.getPoints = function() {
    var points = this.cardsInHand.map(function(e) {
        if (e.point > 10) {
            e.point = 10;
        }
        return e.point;
    });
    points.sort(function(a, b) {
        return b - a;
    });
    this.totalPoints = points.reduce(function(a, b) {
        if (b === 1 && a < 11) {
            b = 11;
        }
        return a + b;
    }, 0);
}

// Start game
var myDeck = new Deck();
myDeck.createDeck();
myDeck.shuffle();
var dealerHand = new Hand();
var playerHand = new Hand();

// Button events
document.getElementById("deal-button").addEventListener("click", function(){
    // Deal to dealer
    var dealer = document.getElementById("dealer-hand");
    var dealer1 = document.createElement('img');
    let myCard = new Card(myDeck.draw());
    dealer1.setAttribute('src', myCard.getImageUrl());
    var dealer2 = document.createElement('img');
    let myCard2 = new Card(myDeck.draw());
    dealer2.setAttribute('src', 'cards/Red_back.jpg');
    dealer2.id = 'hole-card';
    setTimeout(function() {
        dealer.appendChild(dealer1);
        setTimeout(function() {
            dealer.appendChild(dealer2);
        }, 500);
    }, 500); 
    dealerHand.addCard(myCard);
    dealerHand.addCard(myCard2);
    dealerHand.getPoints();

    // Deal to player
    var player = document.getElementById("player-hand");
    var player1 = document.createElement('img');
    let myCard3 = new Card(myDeck.draw());
    player1.setAttribute('src', myCard3.getImageUrl());
    var player2 = document.createElement('img');
    let myCard4 = new Card(myDeck.draw());
    player2.setAttribute('src', myCard4.getImageUrl());
    setTimeout(function() {
        player.appendChild(player1);
        setTimeout(function() {
            player.appendChild(player2);
        }, 500);
    }, 500); 
    playerHand.addCard(myCard3);
    playerHand.addCard(myCard4);
    setTimeout(function() {
        playerHand.getPoints();
        var displayPointsP = document.getElementById("player-points");
        var sumPointsP = document.createElement('span');
        sumPointsP.textContent = `${playerHand.totalPoints}`;
        displayPointsP.appendChild(sumPointsP);
    }, 1000); 
});
 
document.getElementById("hit-button").addEventListener("click", function(){
    var player = document.getElementById("player-hand");
    var player3 = document.createElement('img');
    let myCard = new Card(myDeck.draw());
    player3.setAttribute('src', myCard.getImageUrl());
    setTimeout(function() {
        player.appendChild(player3);
    }, 500); 
    playerHand.addCard(myCard);
    playerHand.getPoints();
    setTimeout(function() {
        var displayPointsP = document.getElementById("player-points");
        displayPointsP.querySelector("span").innerHTML = `${playerHand.totalPoints}`;
    }, 500);
    
    // Determine winner
    if (playerHand.totalPoints > 21) {
        var newMessage = document.getElementById('messages');
        var dealerWon = document.createElement('h1');
        dealerWon.textContent = 'You bust! Dealer won, sorry you lose!';
        setTimeout(function() {
            newMessage.appendChild(dealerWon);
        }, 800);
    }
});

document.getElementById("stand-button").addEventListener("click", function(){
    // Reveal dealer's hole card and total points
    var reveal = document.getElementById("hole-card");
    reveal.setAttribute('src', dealerHand.cardsInHand[1].getImageUrl());
    dealerHand.getPoints();
    var displayPointsD = document.getElementById("dealer-points");
    var sumPointsD = document.createElement('span');
    sumPointsD.textContent = `${dealerHand.totalPoints}`;
    displayPointsD.appendChild(sumPointsD);

    // Keep dealing to dealer until he reaches at least 17
    while (dealerHand.totalPoints < 17) {
        var dealer = document.getElementById("dealer-hand");
        var dealer3 = document.createElement('img');
        let myCard = new Card(myDeck.draw());
        dealer3.setAttribute('src', myCard.getImageUrl());
        setTimeout(function() {
            dealer.appendChild(dealer3);
        }, 500); 
        dealerHand.addCard(myCard);
        dealerHand.getPoints();
        setTimeout(function() {
            var displayPointsP = document.getElementById("dealer-points");
            displayPointsP.querySelector('span').innerHTML = `${dealerHand.totalPoints}`;
        }, 500); 
    }

    // Determine winner
    if ((playerHand.totalPoints > dealerHand.totalPoints) && playerHand.totalPoints <= 21) {
        var newMessage = document.getElementById('messages');
        var playerWon = document.createElement('h1');
        playerWon.textContent = 'You won!';
        setTimeout(function() {
            newMessage.appendChild(playerWon);
        }, 800);
    } else if ((dealerHand.totalPoints > playerHand.totalPoints) && dealerHand.totalPoints <= 21) {
        var newMessage = document.getElementById('messages');
        var dealerWon = document.createElement('h1');
        dealerWon.textContent = 'Dealer won, sorry you lose!';
        setTimeout(function() {
            newMessage.appendChild(dealerWon);
        }, 800);
    } else if (dealerHand.totalPoints == playerHand.totalPoints) {
        var newMessage = document.getElementById('messages');
        var pushWin = document.createElement('h1');
        pushWin.textContent = 'Push! No winner';
        setTimeout(function() {
            newMessage.appendChild(pushWin);
        }, 800);
    } else if (dealerHand.totalPoints > 21 && playerHand.totalPoints <= 21) {
        var newMessage = document.getElementById('messages');
        var playerWon = document.createElement('h1');
        playerWon.textContent = 'Dealer busts! You won!';
        setTimeout(function() {
            newMessage.appendChild(playerWon);
        }, 800);
    }
});

// Refactor using jQuery and add another div button for Play Again
// Turn it all into one big function



