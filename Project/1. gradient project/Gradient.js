let Button1 = document.getElementById("button1");
let Button2 = document.getElementById("button2");
let copycolour = document.querySelector(".copycode")
let rgb1  ;
let rgb2 ;

const hexValues = () => {
  const Hexcolour = "0123456789abcdef";
  const Colour = "#";
  let randomColor = Colour;

  // Loop to generate a random color code
  for (let i = 0; i < 6; i++) {  // Loop runs 6 times to create a full hex color
    let randomIndex = Math.floor(Math.random() * Hexcolour.length);
    randomColor += Hexcolour[randomIndex];
  }

 return randomColor;
};

let HandleButton1 = ()=>{
  rgb1 = hexValues();
  console.log(rgb1);
  document.body.style.backgroundImage = `linear-gradient(${rgb1} , ${rgb2})`; 
  Button1.innerText = rgb1;
  copycolour.innerHTML = ` backgroundImage = linear-gradient(${rgb1} , ${rgb2})`
}
let HandleButton2 = ()=>{
 rgb2 = hexValues();
  console.log(rgb2);
  document.body.style.backgroundImage = `linear-gradient(${rgb1}, ${rgb2})`; 
  Button2.innerText = rgb2; 
   copycolour.innerHTML = ` backgroundImage = linear-gradient(${rgb1} , ${rgb2})`
}

// Add event listener for Button1
Button1.addEventListener("click", HandleButton1);
Button2.addEventListener("click", HandleButton2);
