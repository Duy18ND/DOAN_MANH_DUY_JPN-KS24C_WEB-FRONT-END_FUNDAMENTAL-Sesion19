let month = +prompt("Nhập tháng bất kỳ trong năm");
if(month < 0){
    console.log("Tháng bạn nhập không hợp lệ!!!");
}else if (month <= 3) {
    console.log( month + " Mùa Xuân");
}else if(month <= 6) {
    console.log( month + " Mùa Hạ");
}else if(month <= 9) {
    console.log( month + " Mùa Thu");
}else if(month <= 12) {
    console.log( month + " Mùa Đông");
}