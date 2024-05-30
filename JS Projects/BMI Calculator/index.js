const form = document.querySelector("form");
const body = document.querySelector('body');
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const weight = parseInt(document.querySelector("#weight").value)
    const height = parseInt(document.querySelector("#height").value);
    const results = document.querySelector('#result');
    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid height ${height}`;
      } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight ${weight}`;
      } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        //show the result
        results.innerHTML = `<span>BMI: ${bmi} kg/m<sup>2</sup></span>`;
        if(bmi < 18.5){
            results.innerHTML += `<br><span>You are UnderWeight</span>`
        }else if(bmi>18.5 && bmi<24.9){
            results.innerHTML += `<br><span>You are Healthy Weight</span>`
        }else if(bmi>24.9 && bmi<29.9){
            results.innerHTML += `<br><span>You are Over Weight</span>`
        }else{
            results.innerHTML += `<br><span>You are Obese Range</span>`
            
        }
      }

})