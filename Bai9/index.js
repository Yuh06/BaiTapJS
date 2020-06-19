/* 9. Kiểm tra n có phải là số đối xứng?
VD1: n=1242343, output: ‘NO’
VD2: n = 123676321, output: ‘YES’
*/
do {
    var x = prompt("Nhap so");
    x = Number(x);
} while (Number.isNaN(x) && x < 0)
var y = 0;
while (x > 0) {
    x = Math.floor(x / 10);
    y = y * 10 + x;
}
if (x == y)
    console.log("Yes");
else
    console.log("No");