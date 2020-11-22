// your code, here
let height = -1.00
let width = -1.00
while (isNaN(height) || height <= 0) {
  let heightQ = prompt("Please enter the rectangles height, numbers only please.")
  height = Number(heightQ)
}
while (isNaN(width) || width <= 0) {
  let widthQ = prompt("Please enter the rectangles width, numbers only please")
  width = Number(widthQ)
}
console.log(perimeter(height,width))

function perimeter(height,width) {
return (height + width) * 2
}