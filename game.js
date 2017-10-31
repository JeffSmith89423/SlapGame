function Player(name, health, hits) {
    this.name = name;
    this.health = health;
    this.hits = hits;
    this.items = [];
}
var player1 = new Player('Bozo', 100, 0)
function slap() {
    if (player1.health >= 1) {
        player1.health -= 1 * addMods(player1.items);
        player1.hits += 1;

    } else {
        player1.health = 0;
    }
    update()
}
function punch() {
    if (player1.health >= 5) {
        player1.health -= 5 * addMods(player1.items)
        player1.hits += 1;
    } else {
        player1.health = 0;
        console.log(punch)
    }
    update()
}
function kick() {
    if (player1.health >= 10) {
        player1.health -= 10 * addMods(player1.items)
        player1.hits += 1;
    } else {
        player1.health = 0;
    }
    console.log(kick)
    update()
}
function update() {
    document.getElementById("player1.health").innerHTML = "Happiness: " + player1.health
    document.getElementById("player1.hits").innerHTML = "Hits: " + player1.hits
    if (player1.health == 0) {

        document.getElementById("headshot").src = "/assets/Mad-Clown1.png";
    }
}
function giveShield() {
    player1.items.push(mods.shield)
}
function giveBalloon() {
    player1.items.push(mods.balloonAnimal)
}
function giveShoe() {
    player1.items.push(mods.shoe)
}
function Items(name, modifier, description) {
    this.name = name;
    this.modifier = modifier;
    this.description = description;
}
var mods = {
    shield: new Items("Shield", 0.2, "This is an awesome shield!"),
    balloonAnimal: new Items("Balloon animal", 0.025, "Don't be fooled by this globe!"),
    shoe: new Items("Shoe", 0.1, "Big, red and ridiculous")
}
function addMods(items) {
    var totalMods = 1
    for (var i = 0; i < items.length; i++) {
        totalMods -= items[i].modifier
        // var items = items[i];
        // totalMods += items.modifier
    }
    //console.log(totalMods)
    return totalMods
}
addMods(player1.items)










