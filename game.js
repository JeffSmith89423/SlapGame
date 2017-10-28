function Player(name, health, hits) {
    this.name = name;
    this.health = health;
    this.hits = hits;
    this.items = [];
    //why????
    this.addMods = function(){
        var mods = 1;
        for(var i = 0; i < this.items.length; i++){
            var item = this.items[i];
            mods += item.modifier;
        }
        return mods;
    }
    console.log(addMods)
}
var player1 = new Player('Bozo', 105, 0)

function slap() {
    // player1.name === "Bozo";
    if (player1.health >= 1) {
        player1.health -= 1;
        player1.hits += 1;
        
    } else {
        player1.health = 0;
    }
    update()
    
}
function punch() {
    // player1.name === "Bozo"
    if (player1.health >= 5) {
        player1.health -= 5;
        player1.hits += 5;
        
    } else {
        player1.health = 0;
    }
    update()
}
function kick() {
    // player1.name === "Bozo"
    if (player1.health >= 10) {
        player1.health -= 10;
        player1.hits += 10;
        
    } else {
        player1.health = 0;
    }
    update()
}
function update() {
    // document.getElementById("player1.name").innerHTML= "Name: " + player1.name     //this line will not update
    document.getElementById("player1.health").innerHTML = "Health: " + player1.health
    document.getElementById("player1.hits").innerHTML = "Hits: " + player1.hits
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
    shield: new Items("Shield", 0.3, "This is an awesome shield!"),
    balloonAnimal: new Items("Balloon animal", 0.5, "Don't be fooled by this globe!"),
    shoe: new Items("Shoe", 0.4, "Big, red and Ridiculous")
}
giveShield(object)
giveBalloon(object)
giveShoe(object)

// function addMods(items){
//     output = 1
//     for (var i = 0; i < items.length; i++) {
//        items[i]
//        console.log(items[i])
//     }
    
//     console.log(items[i])



