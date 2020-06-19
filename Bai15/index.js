//15. Viết chương trình chuẩn hóa họ tên.
function chuanHoa(str) {
    str = str.toLowerCase();
    var strF = "";
    var start = 0;
    var flag = 0;
    while (str.indexOf(" ") != -1) {
        str = str.replace(str[0], str[0].toUpperCase());
        flag = str.indexOf(" ");
        strF += str.substring(start, flag + 1);
        str = str.substring(flag + 1);

    }
    str = str.replace(str[0], str[0].toUpperCase());
    strF = strF + str;
    return strF;
}
var a = prompt("Nhap chuoi ")
console.log(chuanHoa(a))