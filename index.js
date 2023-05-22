const incre = document.getElementById("buttons").firstElementChild;
const decre = document.getElementById("buttons").lastElementChild;
const counter = document.getElementById("counter");
let count=0;

incre.addEventListener("click", ()=>{
    count++;
    counter.innerText = count;
})
decre.addEventListener("click", ()=>{
    count--;
    counter.innerText = count;
})