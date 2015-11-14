var Hero = {
  health: 100,
  attack: 8,
  potions: 3
}

var Troll = {
  health: 100,
  attack: 7,
  potions: 2
}

function attack(attacker, target) {
  target.health = target.health - attacker.attack
  return attacker.attack + " points"
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
