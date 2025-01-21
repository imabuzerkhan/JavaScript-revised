// destructured

const color = ["red " , "pink" , "white" , "Black" , "Yellow"]

// console.log(color);
//  let color1 = color[0];
//  let color2 = color[1];
//  let color3 = color[2];
//  console.log(color1);
//  console.log(color2);
//  console.log(color3);

//  it is a old way a new way destructed the array 

// const [color1 , color2 , color3] = color ;
// console.log(color1 , color2 , color3);

// agar hume 5 wa value chaiye to hum aise destructed karte hai 
const [,,,color1] = color ;
console.log(color1)

// ek aur tariqa hai iss tarah ker value ko likhne ka 

const {4:color2} = color
console.log(color2)
