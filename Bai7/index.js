/* 7,Tính tổng các số lẻ trong khoảng 1 đến n?
VD: n = 5, output: 9
*/
do {
    var x = prompt("Nhap so ");
} while (x < 1)
x = Number(x);
var tong = 0;
for (i = 1; i <= x; i++) {
    if (i % 2 == 1)
        tong += i
}
console.log(tong);