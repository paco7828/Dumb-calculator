const aValue = document.querySelector('#aValue')
const nValue = document.querySelector('#nValue')
const dValue = document.querySelector('#dValue')
const output = document.querySelector('.output')
const calcBtn = document.querySelector('button')

function calcAn (n, a, d) {
  setTimeout(() => {
    output.innerHTML = 'Eredmény: '
  }, 100)
  setTimeout(() => {
    output.innerHTML += parseInt(a) + (parseInt(n) - 1) * parseInt(d)
  }, 200)
}

calcBtn.addEventListener('click', function () {
  calcAn(nValue.value, aValue.value, dValue.value)
})
