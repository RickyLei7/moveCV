let demo = document.querySelector('#demo')
let string = `
Hello, I am Ricky.
Next, I gonna add CSS.
body{
  color: red;
}
`
let stringShow = ''
let n = 0

let step = () => {
  setTimeout(() => {
    if (string[n] === '\n') {
      stringShow += '<br>'
    } else {
      stringShow += string[n]
    }
    demo.innerHTML = stringShow
    if (n < string.length - 1) {
      n += 1
      step();
    }

  }, 100)
}


step();