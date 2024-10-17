const aInput = document.querySelector('input[placeholder="a"]')
const bInput = document.querySelector('input[placeholder="b"]')
const cInput = document.querySelector('input[placeholder="c"]')
const output = document.querySelector('.output')
const calcBtn = document.querySelector('button')

function masodfokuEgyenlet(a, b, c){
    let x1 = (-b + Math.sqrt(b**2 - 4*a*c)) / (2*a)
    let x2 = (-b - Math.sqrt(b**2 - 4*a*c)) / (2*a)

    output.innerHTML = `Eredmény: <br> X1= ${x1} ÉS X2= ${x2}`
}

calcBtn.addEventListener('click', function () {
    output.innerHTML = `Eredmény:`
    setTimeout(() => {
      masodfokuEgyenlet(aInput.value, bInput.value, cInput.value)
    }, 100)
  })
  