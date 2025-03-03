let value = prompt("Kiểm tra một ký tự nhập vào có phải là chữ cái hay không?");
if (value.length === 1 && ('a' <= value && value <= 'z' || 'A' <= value && value <= 'Z')) {
    alert("Ký tự " + value + " là chữ cái");
} else {
    alert(value + " Không phải là chữ cái");
}