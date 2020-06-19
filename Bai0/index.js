// 0,Viết chương trình kiểm tra n có phải là số nguyên tố hay không?
function kiemtrasnt(n) {
    var prime = true;
    if (n < 2) {
        prime = false;
    } else {
        for (var i = 2; i < n - 1; i++) {
            if (n % i == 0) {
                prime = false;

            }
        }
    }
    if (prime == true) {
        alert("la so nguyen to")
    } else {
        alert("khong la so nguyen to")
    }
}
kiemtrasnt(prompt("Nhap so nguyen to n: "));