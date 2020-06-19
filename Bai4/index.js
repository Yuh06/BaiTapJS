/* 4,Viết chương trình in ra các số là nguyên tố trong khoảng 1 đến n?
VD: n = 10, output: 2 3 5 7 
*/
function check(n) {
    if (n == 1)
        return false;
    for (var i = 2; i <= Math.sqrt(n); i++)
        if (n % i == 0)
            return false;
    return true;

}
do {
    var x = prompt("Nhap so");
} while (x < 1)
if (x == 1)
    console.log("Khong co so nao");
else {
    for (var i = 1; i <= x; i++)
        if (check(i) == true)
            console.log(i);
}