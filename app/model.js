var Hero = function Hero(health, attack, potions){
  this.name = "You";
  this._health = health;
  this._attack = attack;
  this._potions = potions;
}

Hero.prototype.health = function(){
  return this._health;
};
Hero.prototype.attack = function(){
  return this._attack;
};
Hero.prototype.potions = function(){
  return this._potions;
};

var Troll = function Troll(health, attack, potions){
  this.name = "The troll";
  this._health = health;
  this._attack = attack;
  this._potions = potions;
}

Troll.prototype.health = function(){
  return this._health;
};
Troll.prototype.attack = function(){
  return this._attack;
};
Troll.prototype.potions = function(){
  return this._potions;
};

// Troll.prototype.actions = function() {
//   if (this.health > 50) {
//     attack(self, hero);
//   }
//   else{
//     usePotion(self);
//   }

// }

// function usePotion(target) {
//   if target.potions > 0{
//     target.health = target.health + 20;
//     return target.health;
//   }
//   else {
//     return target.name + " has no potions."
//   }
// }

function attack(attacker, target) {
  target._health = target.health() - attacker.attack()
  return attacker.attack() + " points"
}

var test = "check";

var messages = {
  intro: "You are a brave adventurer, out doing some adventuring, when you suddenly encounter a vicious troll! Prepare for battle!",
  heroAttack: "You attack the troll for ",
  trollAttack: "the troll strikes for ",
  heroPotion: "You are healed for ",
  trollPotion: "The troll heals itself for ",
  heroSteal: "You steal a potion from the troll",
  heroFlee: "You barely escape with your life!"

};
