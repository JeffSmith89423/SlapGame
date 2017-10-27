 
function Player() {
    this.health = health;
    this.name= name;
    this.hits = hits;
    
}

function Items(){
    this.name = name;
    this.modifier = modifier;
    this.description = description;
}

var items = {
    shield:new Item("Shield",0.3,"This is an awesome shield!"),
    balloon:new Item("Balloon",0.5,"Don't be fooled by this globe!"),
    shoe:new Item("Shoe",0.4,"Big, red and ridiculus")
} 


var player1 = {
    health: 100,
    name: Bozo,
    hits: 0,
    items:[giveShield.push() 
    ]
}
var player2 = {
    health: 100,
    name: Krusty,
    hits: 0,
    items:[ 
    ]
}



function slap(){
 health -= 1;
 hits += 1;
  update()
}
function punch(){
    health -= 5;
    hits += 1;
    update()
}
function kick(){
    health -= 10;
    hits += 1;
    update()
}
function update(){
    document.getElementById("target.health").innerHTML= "Health = " + target.health + "%";
    document.getElementById("target.hits").innerHTML= "Hits = " + target.hits
    document.getElementById("target.name").innerHTML= "Name = " + target.name
}






































