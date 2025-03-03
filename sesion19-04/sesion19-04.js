let Number = +prompt("Nhập số ngẫu nhiên");
if(Number % 5 == 0 && Number % 3 == 0) {
    console.log(Number + " chia hết cho cả 3 và 5");
}else if (Number % 5 == 0) {
    console.log(Number + " chia hết cho 5");
}else if (Number % 3 == 0) {
    console.log(Number + " chia hết cho 3");
}else{
    console.log(Number + " không chia hết cho cả 3 và 5");
}