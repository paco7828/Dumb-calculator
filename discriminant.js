function discriminant (a, b, c) {
  return b ** 2 - 4 * a * c
}

const aInput = document.querySelector('input[placeholder="a"]')
const bInput = document.querySelector('input[placeholder="b"]')
const cInput = document.querySelector('input[placeholder="c"]')
const output = document.querySelector('.output')
const calcBtn = document.querySelector('button')

calcBtn.addEventListener('click', function () {
  output.innerHTML = `Eredmény: <br>`
  setTimeout(() => {
    let result = discriminant(aInput.value, bInput.value, cInput.value)
    output.innerHTML += result
  }, 100)
})
