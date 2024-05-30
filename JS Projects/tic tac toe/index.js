const container = document.getElementsByClassName("container")
const game = document.getElementById("game")
let turn = true;
game.addEventListener("click", function (e) {
    if(turn == true){
        e.target.innerText = "x"
        
    }else{
        e.target.innerText = "o"
        
    }
    turn = !turn;
})

