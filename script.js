const colors = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
function generateCode(){
  let hexCode="";
for(let i=0;i<6;i++){
  let idx=Math.floor(Math.random()*colors.length);
  hexCode+=colors[idx];
}
return hexCode
}
  const images=[
    "https://d3nn873nee648n.cloudfront.net/900x600/20564/300-SM1057201.jpg",
    "https://d3nn873nee648n.cloudfront.net/900x600/6859/6-SM166088.jpg",
    "https://d3nn873nee648n.cloudfront.net/900x600/20372/300-ZM1019627.jpg",
    "https://d3nn873nee648n.cloudfront.net/900x600/20436/300-SM1023031.jpg",
    "https://d3nn873nee648n.cloudfront.net/900x600/20501/300-PT1064976.jpg",
    "https://d3nn873nee648n.cloudfront.net/900x600/20388/300-PA1050026.jpg",
    "https://d3nn873nee648n.cloudfront.net/900x600/20487/300-PT1049064.jpg",
    "https://d3nn873nee648n.cloudfront.net/900x600/20512/300-PA1049828.jpg"
  ]
  let i=0;
let changeColor=document.getElementsByTagName("body");
changeColor[0].style.backgroundColor="black"
let button=document.getElementById("button");
let button2=document.getElementById("button2");
let image=document.getElementById("img");
function load(){
    image.style.display="none"
    changeColor[0].style.backgroundColor='#'+ generateCode();
}
button.addEventListener("click", ()=>{
    changeColor[0].style.backgroundColor='#'+ generateCode();
    changeColor[0].style.transition="0.5s linear"
    image.style.display="none"
})
let j=0;
button2.addEventListener("click", ()=>{
    image.style.display="block"
    image.setAttribute("src", `${images[j]}`);
    changeColor[0].style.transition="0.5s linear"
    j++;
    if(j==images.length){
        j=0;
    }
})