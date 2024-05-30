let clock = document.querySelector("#clock")
let timer = document.querySelector("#timer")
let stopW = document.querySelector("#stopW")
let digClock = document.querySelector("#digClock")


digClock.addEventListener("click",()=>{
    setInterval(() => {
        let currentTime = new Date();
        let hour = currentTime.getHours().toString().padStart(2,"0")
        let minute = currentTime.getMinutes().toString().padStart(2,"0")
        let seconds = currentTime.getSeconds().toString().padStart(2,"0")
        clock.innerHTML = `<span id = "dClock">${hour}:${minute}:${seconds}</span>`
    }, 1000);
})

// stopW.addEventListener("click", ()=>{
//     setInterval(() => {
//         let time = new Date().getTime();
        
//         console.log(time);

//     }, 1000);
// })
