const btn = document.getElementById("btn");
let ans = document.getElementById("ans");
const baseUrl = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies`
const dropDown = document.querySelectorAll(".conversion select")
const fromv = document.getElementById("fromSelect");
const tov = document.getElementById("toSelect");

for (const select of dropDown) {
    for (code in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = code;
        newOption.value = code
          
          if(select.name == "from" && code === "USD"){
            newOption.selected = "selected"
          }else if(select.name === "to" && code === "INR"){
            newOption.selected = "selected";
          }
          select.append(newOption)
    }
}

const convert = async ()=>{
    ans.innerText = ''
    const quantity = document.getElementById("amt").value;
    let from = fromv.value;
    let to = tov.value;
    check(quantity);
    let response = await fetch(`${baseUrl}/${from.toLowerCase()}.json`)
    let rJson= await response.json()
    let rate = rJson[from.toLowerCase()][to.toLowerCase()];
    console.log(rate);
    let totalAmt = (rate*quantity).toFixed(2);
    ans.innerText = `${quantity} ${from} --> ${totalAmt} ${to}`
}

function check(quantity){
    if(quantity == '' || Number(quantity) < 0){
        ans.innerText = "Please enter a valid Amount!"
    }
}
btn.addEventListener("click",(e)=>{
    e.preventDefault();
    convert();
})
window.addEventListener("load", (e)=>{
    e.preventDefault;
    convert()
})