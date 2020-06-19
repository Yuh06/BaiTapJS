//11. Đếm có bao nhiêu khoảng trắng trong một chuỗi?
//VD: “ Hello  world”, output: 3
var a = prompt("Nhap chuoi ")

function chuoi(str) {
    var count = 0;
    for (var i = 0; i < str.length; i++)
        if (str[i] == " ") {
            count++;
        }
    return count;
}
console.log("So khoang trang la :", chuoi(a))