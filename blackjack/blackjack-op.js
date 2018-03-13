$(function domReady() {
    $('#play-again-button').hide();

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
        return `cards/${pointURL}${this.suit}.jpg`;
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

    var myDeck, dealerHand, playerHand;
    startGame();

    // Deal button
    $('#deal-button').click(function() {
        // Deal to dealer
        let myCard = new Card(myDeck.draw());
        $('#dealer-hand').append('<img src="' + myCard.getImageUrl() + '">').show(500);
        let myCard2 = new Card(myDeck.draw());
        $('#dealer-hand').append('<img src="cards/Red_back.jpg" id="hole-card">').show(500);
        dealerHand.addCard(myCard);
        dealerHand.addCard(myCard2);
        dealerHand.getPoints();

        // Deal to player
        let myCard3 = new Card(myDeck.draw());
        $('#player-hand').append('<img src="' + myCard3.getImageUrl() + '">').show(500);
        let myCard4 = new Card(myDeck.draw());
        $('#player-hand').append('<img src="' + myCard4.getImageUrl() + '">').show(500);
        playerHand.addCard(myCard3);
        playerHand.addCard(myCard4);
        playerHand.getPoints();
        $('#player-points').text(`${playerHand.totalPoints}`).show(500);
        $('#deal-button').hide();
    });

    // Hit button
    $('#hit-button').click(function() {
        // Deal to player
        let myCard = new Card(myDeck.draw());
        $('#player-hand').append('<img src="' + myCard.getImageUrl() + '">').show(500);
        playerHand.addCard(myCard);
        playerHand.getPoints();
        $('#player-points').text(`${playerHand.totalPoints}`).show(500);
        
        // If player busts
        if (playerHand.totalPoints > 21) {
            $('#messages').text('You bust! Dealer won, sorry you lose!').show(800);
            gameOver();
        }
    });

    // Stand button
    $('#stand-button').click(function() { 
        // Reveal dealer's hole card and total 
        $('#hole-card').attr('src', dealerHand.cardsInHand[1].getImageUrl());
        dealerHand.getPoints();
        $('#dealer-points').text(`${dealerHand.totalPoints}`);

        // Keep dealing to dealer until he reaches at least 17
        while (dealerHand.totalPoints < 17) {
            let myCard = new Card(myDeck.draw());
            $('#dealer-hand').append('<img src="' + myCard.getImageUrl() + '">').show(500);
            dealerHand.addCard(myCard);
            dealerHand.getPoints();
            $('#dealer-points').text(`${dealerHand.totalPoints}`).show(500);
        }

        // Determine winner
        var message;
        if ((playerHand.totalPoints > dealerHand.totalPoints) && playerHand.totalPoints <= 21) {
            message = 'You won!';
        } else if ((dealerHand.totalPoints > playerHand.totalPoints) && dealerHand.totalPoints <= 21) {
            message = 'Dealer won, sorry you lose!';
        } else if (dealerHand.totalPoints == playerHand.totalPoints) {
            message = 'Push! No winner';
        } else if (dealerHand.totalPoints > 21 && playerHand.totalPoints <= 21) {
            message = 'Dealer busts! You won!';
        }
        $('#messages').text(`${message}`).show(800);
        gameOver();
    });

    function gameOver() {
        $('#hit-button').hide();
        $('#stand-button').hide();
        $('#play-again-button').show();
    }

    // Play again
    $('#play-again-button').click(function() {
        $('#deal-button').show();
        $('#hit-button').show();
        $('#stand-button').show();
        $('#play-again-button').hide();
        $('#player-hand').html('');
        $('#dealer-hand').html('');
        $('#messages').text('');
        $('#player-points').text('');
        $('#dealer-points').text('');
        startGame();
    });

    function startGame() {
        myDeck = new Deck();
        myDeck.createDeck();
        myDeck.shuffle();
        dealerHand = new Hand();
        playerHand = new Hand();
    }
});
