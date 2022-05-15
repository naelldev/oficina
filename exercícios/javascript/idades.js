let cont = 0
let n = parseInt(gets())
let soma = 0

while (n > 0) {
  cont++
  soma += n
  n = parseInt(gets())
}

let media = (soma / cont).toFixed(2)

console.log(media)
