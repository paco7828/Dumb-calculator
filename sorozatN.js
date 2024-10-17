const output = document.querySelector('.output')
const calcBtn = document.querySelector('button')

calcBtn.addEventListener('click', sorozatWRule)

function sorozatWRule () {
  setTimeout(() => {
    output.innerHTML = 'Eredmény: '
  }, 100)

  const kiszamolandoErtek = parseInt(document.querySelector('#n').value)
  const szabaly = document.querySelector('#szabaly').value
  const result = eval(szabaly.replace(/n/g, kiszamolandoErtek))

  setTimeout(() => {
    output.innerHTML += result
  }, 200)
}
