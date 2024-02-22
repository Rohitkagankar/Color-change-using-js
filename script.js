let button =document.querySelector("button");
button.innerText="click to color change";
let div=document.querySelector("div");

let colors = ["red","green","blue","yellow","pink","purple"];
let n=0;
button.addEventListener("click",()=>{
    div.style.backgroundColor=`${colors[n]}`;
    button.innerText=(colors[n]);
    n++;
    if(n==6){
        n=0;
    }
})