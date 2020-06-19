/* 8,Kiểm tra số n có toàn số lẻ tạo thành hay không?
VD1: n=1234, output: ‘NO’
VD2: n=135, output: ‘YES’
*/
var n = prompt("Nhap so")
var check = true;
while (n > 0) {
    var remain = n % 10;
    //console.log("remain", remain)
    if (remain % 2 == 0) {
        check = false;
        break;

    }
    n = Math.floor(n / 10)
}
alert(check)