//1 let result = "javascrip" + 5;
//Nối chuỗi javascrip với 5
//Kết quả: javascrip5

//2 let result = "javascript" - 1;
//javascript không thể chuyển về số
//Kết quả: NaN

//3 let result = "3" + 2;
//dấu + trong javascript có hai chức năng: 1/ là cộng, 2/ nối chuỗi
//Kết quả là nối chuỗi "3" + 2 = 5

//4 let result = "5" - 4;
//Dấu - hoạt động với số, javascript đang cố chuyển đổi toán hạng thành kiểu Number
//Kết quả là "5" - 4 = 1

//5 let result = isNaN("123");
//isNaN là kiểm tra có phải NaN hay không, kết quả trả về kết quả true or false
//Kết quả: False vì 123 là số hợp lệ

// let result = isNaN("123");
//isNaN là kiểm tra có phải NaN hay không, kết quả trả về kết quả true or false
//Kết quả là True vì "hello" vì không thể chuyển đổi thành số nên kết quả NaN là true

// let result = Number.isNaN("123");
//false vì "123" không phải là NaN

// let result = Number.isNaN(NaN);
//True vì nó là NaN
console.log(result);