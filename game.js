function Player(name, health, hits, addMods) {
    this.name = name;
    this.health = health;
    this.hits = hits;
    this.items = [];
   //Breaks Health Function
    //this.addMods = addMods; 
    
}
var player1 = new Player('Bozo', 105, 0)

function slap() {
    // player1.name === "Bozo";
    if (player1.health >= 1) {
        player1.health -= 1 //* this.addMods; //breaks Health Function
        player1.hits += 1;
        
    } else {
        player1.health = 0;
    }
    update()
    
}
function punch() {
    // player1.name === "Bozo"
    if (player1.health >= 5) {
        player1.health -= 5 //* this.addMods; //breaks Health Function
        player1.hits += 1;
        
    } else {
        player1.health = 0;
    }
    update()
}
function kick() {
    // player1.name === "Bozo"
    if (player1.health >= 10) {
        player1.health -= 10 //* this.addMods; //breaks Health Function
        player1.hits += 1;
        
    } else {
        player1.health = 0;
    }
    update()
}
function update() {
    // document.getElementById("player1.name").innerHTML= "Name: " + player1.name     //this line will not update breaks the js
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
    shoe: new Items("Shoe", 0.4, "Big, red and ridiculous")
}
giveShield(object)
giveBalloon(object)
giveShoe(object)

//cannot get following function to console.log a value for totalMods returns NaN

function addMods(items){
    var totalMods = 1
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      totalMods -= items.modifier
    }
    console.log(totalMods)
    return totalMods
}
addMods(player1.items)
console.log(player1)


// function addMods(items){
//     mods = 1
//     for (var i = 0; i < items.length; i++) {
//        var mods = items[i]
     
//     }
   
// }



