const buttons = document.querySelectorAll('.box');
const body = document.querySelector('#main');
const form = document.querySelector('form');
const span = document.querySelector('span')

form.addEventListener("submit", function(a){
    a.preventDefault();
    const cPal = document.querySelector("#cPal").value;
    const color = document.querySelector("#color");
    color.setAttribute('value', cPal)


    var reg=/^#([0-9a-f]{3}){1,2}$/i;
    if(reg.test(color.value)){
        body.style.backgroundColor = color.value;
        span.innerText = "";

    }else{
        span.innerText = "Invalid color code";
    }


})

buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    body.style.backgroundColor = e.target.id;
  });
});