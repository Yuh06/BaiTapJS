/* 6,Viết chương trình tính tổng bình phương của các số từ 1 đến n?
    VD: n = 3, output: 14
    */
do {
    var x = prompt("Nhap so ");
} while (x < 1)
x = Number(x);
var tong = 0;
for (var i = 1; i <= x; i++)
    tong += Math.pow(i, 2);
console.log(tong);