let bannerBox = document.getElementById("banners");
let internBox = document.getElementById("internBox")
let menu = document.getElementById("menu-hamburger");
let anyThing = document.getElementById("apple")
let colors = ["#ffb703","#023047","219ebc"]
let obj = [{
    1: "Placement Guaranteed Courses",
    2: "Online Courses with Placement Guaranteed Courses",
    3: "Know More"
},
{
    1: "Certification Courses",
    2: "Namaste",
    3: "Discover"
},
{
    1: "Jobs",
    2: "Aditya Birla Group is hiring",
    3: "Know More"
},
{
    1: "Jobs",
    2: "Aditya Birla Group is hiring",
    3: "Know More"
},
{
    1: "Jobs",
    2: "Aditya Birla Group is hiring",
    3: "Know More"
}
];

for(let i = 0; i < obj.length ; i++){
    bannerBox.innerHTML += `<div class="box">
    <p id = "hen">${obj[i]["1"]}</p>
    <h2>${obj[i]["2"]}</h2>
    <button>${obj[i]["3"]}</button>
</div>`;
}
let x=0;
function clickButton(){
    if (x == 0) {
        apple.classList.remove('apple');
        x = 1;
    } else {
        apple.classList.add('apple');
        x = 0;
      }
}

// let intenshipBox = [
//     {
//         1: "Actively Hiring",
//         2: "Interior Design",
//         3: "Flipspaces",
//         4: "Places",
//         5: "10,000 per month",
//         6: "Duration",
//         7: "Internship"
//     }
// ]

// for(let i = 0; i < obj.length ; i++){
//     internBox.innerHTML += `<div class="box">
//     <p>${intenshipBox[i]["1"]}</p>
//     <h2>${intenshipBox[i]["2"]}</h2>
//     <p>${internshipBox[i]["3"]}</p><hr>
//     <p>${internshipBox[i]["4"]}</p>
//     <p>${internshipBox[i]["5"]}</p>
//     <p>${internshipBox[i]["6"]}</p>
//     <button>${internshipBox[i]["7"]}</button>
// </div>`;
// }

