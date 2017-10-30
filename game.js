function Player(name, health, hits) {
    this.name = name;
    this.health = health;
    this.hits = hits;
    this.items = [];
    //following object breaks health function
    //this.addMods() = function addMods(items);
}
var player1 = new Player('Bozo', 105, 0)

function slap() {
    // player1.name === "Bozo";
    if (player1.health >= 1) {
        player1.health -= 1 //* addMods; //breaks Health Function
        player1.hits += 1;

    } else {
        player1.health = 0;
    }
    update()

}
function punch() {
    // player1.name === "Bozo"
    if (player1.health >= 5) {
        player1.health -= 5// * this.addMods; //breaks Health Function
        player1.hits += 1;

    } else {
        player1.health = 0;
    }
    update()
}
function kick() {
    // player1.name === "Bozo"
    if (player1.health >= 10) {
        player1.health -= 10// * this.addMods; //breaks Health Function
        player1.hits += 1;

    } else {
        player1.health = 0;
    }
    update()
}
function update() {
    // document.getElementById("player1.name").innerHTML= "Name: " + player1.name     //this line will not update breaks the js
    document.getElementById("player1.health").innerHTML = "Happiness: " + player1.health
    document.getElementById("player1.hits").innerHTML = "Hits: " + player1.hits
    if (player1.health == 0) {
    //     document.getElementById("headshot").src = "/assets/happy-clown.png";
    // }else{
        document.getElementById("headshot").src = "/assets/Mad-Clown1.png";
    }
}
function giveShield(object) {
    player1.items.push(object.shield)
}
function giveBalloon(object) {
    player1.items.push(object.balloonAnimal)
}
function giveShoe(object) {
    player1.items.push(object.shoe)
}

function Items(name, modifier, description) {
    this.name = name;
    this.modifier = modifier;
    this.description = description;
}
var object = {
    shield: new Items("Shield", 0.1, "This is an awesome shield!"),
    balloonAnimal: new Items("Balloon animal", 0.2, "Don't be fooled by this globe!"),
    shoe: new Items("Shoe", 0.3, "Big, red and ridiculous")
}
giveShield(object)
giveBalloon(object)
giveShoe(object)

//cannot get following function to console.log a total value for totalMods returns first object only

function addMods(items) {
    var totalMods = 1
    for (var i = 0; i < items.length; i++) {
      totalMods += items[i].modifier
        // var items = items[i];
        // totalMods += items.modifier
    }
    //console.log(items)
    console.log(totalMods)
    return totalMods
}
addMods(player1.items)
console.log(player1)









