document.addEventListener('DOMContentLoaded', function() {
  let tile64 = 63
   console.log("hello from inside the event listener")
//find element
let body = document.querySelector("body")
console.log(body)

for (var i = 0; i < tile64; i++) {
//create an element - the title
let tile = document.createElement("div")
tile.style.width = "11.1%"
tile.style.paddingBottom = "11.1%"

tile.style.backgroundColor = hexColor()
tile.style.float = "left"
//append tile to the body
body.appendChild(tile)

}
function hexColor () {
  let length = 6
  let characters = "0123456789ABCDEF"
  let result = "#"
  while (length--) result += characters[(Math.random() * 16) | 0]
  return result
}





})
