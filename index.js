let ans = document.getElementsByName("answer")

let submit = document.getElementById("submit")
let a = document.getElementById("yes")
let b = document.getElementById("no")
if(a === true){
    window.location.href ="./index2.html";
    if (onsubmit !== 1){
       submit.onclick = window.location.href ="./index4.html"
    }
}
if(b === true){
    window.location.href ="./index4.html"
}

function check() {
    if(document.getElementById("benar").checked === true){
        alert('jawaban kamu benar')
    } else {
        window.location.href ="./index4.html"
    } 
  }
