let Button1 = document.getElementById("button1");
let Button2 = document.getElementById("button2");

const hexValues = () => {
  const Hexcolour = "0123456789abcdef";
  const Colour = "#";
  let randomColor = Colour;

  // Loop to generate a random color code
  for (let i = 0; i < 6; i++) {  // Loop runs 6 times to create a full hex color
    let randomIndex = Math.floor(Math.random() * Hexcolour.length);
    randomColor += Hexcolour[randomIndex];
  }

  // console.log(randomColor);
};

let HandleButton1 = ()=>{
  let rgb1 = hexValues();
  console.log(rgb1)
}

// Add event listener for Button1
Button1.addEventListener("click", HandleButton1);
