// Generated by CoffeeScript 1.10.0
var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

window.App = (function(superClass) {
  extend(App, superClass);

  function App() {
    return App.__super__.constructor.apply(this, arguments);
  }

  App.prototype.initialize = function() {
    var deck;
    this.set('deck', deck = new Deck());
    this.set('playerHand', deck.dealPlayer());
    this.set('dealerHand', deck.dealDealer());
    return this.get('dealerHand').on('stand', this.stand, this);
  };

  App.prototype.stand = function() {
    console.log('crap');
    while (this.get('dealerHand').scores()[0] < 17) {
      this.get('dealerHand').hit();
    }
    if (this.get('dealerHand').scores()[0] > 21) {
      return alert('Player wins!');
    } else if (this.get('dealerHand').scores()[0] > this.get('playerHand').scores()[0]) {
      return alert('Dealer wins!');
    } else if (this.get('dealerHand').scores()[0] === this.get('playerHand').scores()[0]) {
      return alert("Pot split!");
    } else if (this.get('dealerHand').scores()[0] < this.get('playerHand').scores()[0]) {
      return alert('Player wins!');
    }
  };

  return App;

})(Backbone.Model);
