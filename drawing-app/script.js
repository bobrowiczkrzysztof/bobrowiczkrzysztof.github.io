const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
let inputColor = document.getElementById('color')
const clearButton = document.getElementById('clear')
const decreaseButton = document.getElementById('decrease')
const increaseButton = document.getElementById('increase')
let numSize = document.getElementById('size')

numSize.innerText = +20
let size = 20
canvas.addEventListener('mousedown', e => {
  isPressed = true
  x = e.offsetX
  y = e.offsetY
  console.log(isPressed, x, y)
})

canvas.addEventListener('mouseup', e => {
  isPressed = false
  x = undefined
  y = undefined
  console.log(isPressed, x, y)
})

canvas.addEventListener('mousemove', e => {
  if (isPressed) {
    const x2 = e.offsetX
    const y2 = e.offsetY

    drawCircle(x2, y2)
    drawLine(x, y, x2, y2)

    x = x2
    y = y2
  }
})

function drawCircle(x, y) {
  ctx.beginPath()
  ctx.arc(x, y, size, 0, Math.PI * 2)
  ctx.fillStyle = color
  ctx.fill()
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath()
  ctx.moveTo(x1, y1)
  ctx.lineTo(x2, y2)
  ctx.strokeStyle = color
  ctx.lineWidth = size * 2
  ctx.stroke()
}

inputColor.addEventListener('input', changeColor)

function changeColor() {
  color = this.value
}

clearButton.addEventListener('click', clearCanvas)

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
}

decreaseButton.addEventListener('click', decreaseNumber)
increaseButton.addEventListener('click', increaseNumber)

function decreaseNumber() {
  if (size > 5) {
    let newSize = (size -= 5)
    numSize.innerText = newSize
    console.log(newSize)
  } else {
    size = 5
  }
}

function increaseNumber() {
  if (size < 50) {
    let newSize = (size += 5)
    numSize.innerText = newSize
  } else {
    size = 50
  }
}
