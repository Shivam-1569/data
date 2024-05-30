const randomNumber = parseInt(Math.random()*100 + 1);
console.log(randomNumber);

const form  = document.querySelector("form");
let guesses = document.getElementById("guesses")
let remaining = document.getElementById("remaining");
let box_3 = document .getElementById("box-3");
let count = 10;
form.addEventListener("click",(e)=>{
    e.preventDefault();
    
    let num = parseInt(document.querySelector("#num").value);
    let x = validateGuess(num);
    
    if(randomNumber === num){
        form.innerHTML = `YOU'VE WON!!! 
        YOU GUESSED RIGHT..<br>
        <button id="restart">Restart</button>`
        restartFun();
        box_3.innerHTML = ""
    }else if(randomNumber > num){
        box_3.innerHTML=`<h2>too small!!</h2>`
    }else{
        box_3.innerHTML = `<h2>too large </h2>`
    }
    if(count==0){
        form.innerHTML = `You were unable to guess the correct number:<br>
        The Correct number was: ${randomNumber}<br>
        <button id="restart">Restart</button>`
        restartFun();
    }
    document.querySelector("#num").value = ' '
    
})

const restartFun = ()=>{
    const restart = document.getElementById("restart");
    restart.addEventListener("click", ()=>{
        location.reload();
    })
}

const validateGuess = (guess)=>{
    if(guess > 100 || guess < 1){
        alert("Enter number between 1-100");
    }else if(isNaN(guess)){
        alert("Enter a valid number")
    }else{
        count--
        guesses.innerHTML += `${guess},`;
        remaining.innerHTML = `${count}`
    }
}

