// 24. Cho một mảng là một tập các số nguyên dương, lọc ra một bảng b gồm tất cả các số là số nguyên tố? (Dùng filter)
// VD: a = [1,2,3,2,3,4,6,7] .Output: b=[2,3,2,3,7]
var a = [1, 2, 3, 2, 3, 4, 6, 7]
var b = a.filter((number) => {
    if (number == 0, number == 1)
        return false;
    else {
        for (var i = 2; i < number; i++) {
            if (number % i == 0)
                return false;
        }
    }
    return true;
})
console.log(b)