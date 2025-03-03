let numA = +prompt("Mời bạn nhập số a")
let numB = +prompt("Mời bạn nhập số b")
let numC = +prompt("Mời bạn nhập số c")
let max = (numA > numB)
    ? (numA > numC ? numA : numC)
    : (numB > numC ? numB : numC)

alert(`Số lớn nhất trong 3 số là: ${max}`)
