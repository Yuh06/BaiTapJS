// 12. Hãy remove tất cả khoảng trắng, space và ‘enter’ trong một chuỗi
var a = prompt("Nhap chuoi")

function removeSpace(str) {
    str = str.replace(/\s/g, '');
    return str;
}
console.log(removeSpace(a));