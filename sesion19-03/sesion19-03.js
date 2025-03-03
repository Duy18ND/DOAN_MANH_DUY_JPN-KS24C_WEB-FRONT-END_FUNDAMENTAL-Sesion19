let choice = +prompt(
    `Nhập số 1 đổi tiền từ VND sang USD
    Nhập số 2 đổi tiền từ USD sang VND
     `)
if (choice !== 1 && choice !== 2) {
    console.log("Lựa chọn của bạn không hợp lệ!!!");
} else {
    let Money = +prompt("Số tiền cần đổi là: ");
    let USD = 0;
    let VND = 0;
    switch (choice) {
        case 1:
            if (Money <= 0) {
                console.log("Số tiền bạn cần đổi không hợp lệ");
            } else {
                VND = Money / 23000;
                console.log(Money + " VNĐ -> " + VND.toFixed(2) + "USD");

            }
            break;
        case 2:
            if (Money <= 0) {
                console.log("Số tiền bạn cần đổi không hợp lệ");
            } else {
                USD = Money * 23000;
                console.log(Money + " USD -> " + USD.toFixed(2) + "VND");
            }
            break;

    }

}
