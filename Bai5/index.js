/* 5,Viết chương trình tính tổng từ 1 đến n?
VD: n = 10, output: 55
*/
do {
    var x = prompt("Nhap so ");
} while (x < 1)
x = Number(x);
var tong = 0;
for (var i = 1; i <= x; i++)
    tong += i
console.log(tong);