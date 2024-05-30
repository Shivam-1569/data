document.addEventListener('DOMContentLoaded', function () {
    const deck = [];
    const suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];
    const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  
    function createDeck() {
      for (let suit of suits) {
        for (let value of values) {
          deck.push({ value, suit });
        }
      }
      return deck;
    }
  
    function getCardString(card) {
      return card.value + ' of ' + card.suit;
    }
  
    function shuffleDeck(deck) {
      for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
      }
    }
  
    function getCardNumericValue(card) {
      switch (card.value) {
        case 'A':
          return 11;
        case 'K':
        case 'Q':
        case 'J':
          return 10;
        default:
          return parseInt(card.value);
      }
    }
  
    function getScore(cards) {
      let score = 0;
      let hasAce = false;
      for (let card of cards) {
        score += getCardNumericValue(card);
        if (card.value === 'A') {
          hasAce = true;
        }
      }
      if (hasAce && score + 10 <= 21) {
        return score + 10;
      }
      return score;
    }
  
    const dealerCards = [];
    const playerCards = [];
    let dealerScore = 0;
    let playerScore = 0;
    let gameOver = false;
  
    const dealerCardElement = document.getElementById('dealer-cards');
    const playerCardElement = document.getElementById('player-cards');
    const scoreElement = document.getElementById('score');
    const hitButton = document.getElementById('hit-button');
    const standButton = document.getElementById('stand-button');
    const resetButton = document.getElementById('reset-button');
  
    createDeck();
    shuffleDeck(deck);
  
    function startGame() {
      dealerCards.push(deck.pop());
      dealerCards.push(deck.pop());
      playerCards.push(deck.pop());
      playerCards.push(deck.pop());
  
      renderGame();
    }
  
    function renderGame() {
      dealerCardElement.innerText = '';
      for (let card of dealerCards) {
        dealerCardElement.innerText += getCardString(card) + '\n';
      }
  
      playerCardElement.innerText = '';
      for (let card of playerCards) {
        playerCardElement.innerText += getCardString(card) + '\n';
      }
  
      dealerScore = getScore(dealerCards);
      playerScore = getScore(playerCards);
  
      scoreElement.innerText = 'Score: ' + playerScore;
  
      if (gameOver) {
        if (playerScore > 21) {
          scoreElement.innerText += ' - You busted! Dealer wins.';
        } else if (dealerScore > 21 || playerScore > dealerScore) {
          scoreElement.innerText += ' - You win!';
        } else if (dealerScore > playerScore) {
          scoreElement.innerText += ' - Dealer wins.';
        } else {
          scoreElement.innerText += ' - It\'s a tie!';
        }
        hitButton.style.display = 'none';
        standButton.style.display = 'none';
      }
    }
  
    hitButton.addEventListener('click', function () {
      playerCards.push(deck.pop());
      renderGame();
      if (playerScore >= 21) {
        gameOver = true;
        renderGame();
      }
    });
  
    standButton.addEventListener('click', function () {
      while (dealerScore < 17) {
        dealerCards.push(deck.pop());
        dealerScore = getScore(dealerCards);
      }
      gameOver = true;
      renderGame();
    });
  
    resetButton.addEventListener('click', function () {
      deck.length = 0;
      createDeck();
      shuffleDeck(deck);
      dealerCards.length = 0;
      playerCards.length = 0;
      dealerScore = 0;
      playerScore = 0;
      gameOver = false;
      hitButton.style.display = 'inline';
      standButton.style.display = 'inline';
      scoreElement.innerText = 'Score: 0';
      startGame();
    });
  
    startGame();
  });
  