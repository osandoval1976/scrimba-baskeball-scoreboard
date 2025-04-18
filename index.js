import { defineConfig } from "vite"

let homePlayer = document.getElementById("bhome");
let sum = 0;

let guestPlayer = document.getElementById("ghome");
let sum1 = 0;

/----- home Scoreboard---/ 

function addHome3(){
sum +=3
homePlayer.textContent = sum

 }
 
 function addHome2(){
sum += 2
homePlayer.textContent = sum
      
}
function addHome1(){
sum += 1
homePlayer.textContent = sum
      
}


/----- Guess Scoreboard---/

function addG3(){
sum1 += 3
 guest3 = guestPlayer.textContent = sum1
 }
 
 function  addG2(){
sum1 += 2 
 guest2 = guestPlayer.textContent = sum1
    
}

function addG1(){
sum1 += 1
guest1 = guestPlayer.textContent = sum1
 
}  export default defineConfig({
	plugins: [
		[index.js]
	]
})

