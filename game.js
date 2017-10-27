var health=100;


function slap(){
 health -= 1;
  return health;
  document.getElementById("health").innerHTML= "test"
  
}
function punch(){
    health -= 10
    return health;
}
function suplex(){
    health -= 20
    return health;
}
function update(){
    
}

// function draw(endGame, playerChoice, compChoice){
//     document.getElementById("compChoice").innerHTML = "The computer chose " + compChoice + ".";
//     document.getElementById("playerChoice").innerText
//         = "and you chose " + playerChoice + ".";
//     document.getElementById("endGame").innerText
//         = endGame + ".";































//     var reduceHealth = health - 1;
//     if (slap === 1){
//      endGame = "health = "
//     }
//     return health
// }
    


//  function draw(reduceHealth){
//     document.getElementById("slap('reducedHealth')").innerHTML = endGame + "test"
    

//  }

// console.log(slap(1))
// console.log(draw)



