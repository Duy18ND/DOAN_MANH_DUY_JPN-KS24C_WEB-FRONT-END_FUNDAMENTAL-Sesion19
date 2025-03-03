let character = prompt("Nhập chuỗi ký tự bất kỳ");
if(character.includes(" ")){
    console.log(character + " Chuỗi chứa ký tự dấu cách");
}else{
    console.log(character + " Chuỗi không chứa dấu cách");
}