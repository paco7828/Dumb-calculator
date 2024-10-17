function factorial (n) {
  if (n === 0 || n === 1) {
    return 1
  }
  let result = 1
  for (let i = 2; i <= n; i++) {
    result *= i
  }
  return result
}

const input = document.querySelector('input')
const output = document.querySelector('.output')
const calcBtn = document.querySelector('button')

calcBtn.addEventListener('click', function () {
  output.innerHTML = `Eredmény: <br>`
  setTimeout(() => {
    const inputValue = parseInt(input.value)
    const result = factorial(inputValue)
    output.innerHTML += result
  }, 100)
})
