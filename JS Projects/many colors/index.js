const body = document.querySelector("body");
const start  = document.getElementById("start")
const stop = document.getElementById("stop")

const randomColor = function(){
    const hex = "0123456789ABCDEF";
    let color = "#";
    for(let i=0;i<6;i++){
        const x = Math.floor(Math.random()*16);
        color += hex[x]
        
    }
    return color
};


let changeColor;
start.addEventListener("click",()=>{
   
changeColor =  setInterval(()=>{
    body.style.backgroundColor = randomColor();
    
}, 1000)
})

stop.addEventListener("click", ()=>{
    clearInterval(changeColor)
})
