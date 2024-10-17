const aValue = document.querySelector('#aValue')
const nValue = document.querySelector('#nValue')
const dValue = document.querySelector('#dValue')
const output = document.querySelector('.output')
const calcBtn = document.querySelector('button')

function calcSn (n, a, d) {
  setTimeout(() => {
    output.innerHTML = 'Eredmény: '
  }, 100)
  setTimeout(() => {
    output.innerHTML +=
      ((2 * parseInt(a) + (parseInt(n) - 1) * parseInt(d)) * parseInt(n)) / 2
  }, 200)
}

calcBtn.addEventListener('click', function () {
  calcSn(nValue.value, aValue.value, dValue.value)
})
