// 22.  Cho một mảng là một tập các số, tìm số lớn nhất, nhỏ nhất và số trung bình trong mảng này?
// VD: a = [1,2,3,4,5,6,7,8,9,9,8,7,6,5,4,3,2,1] .Output: 9, 1, 5
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 8, 7, 6, 5, 4, 3, 2, 1];
var maxInNumbers = Math.max.apply(Math, numbers);
var minInNumbers = Math.min.apply(Math, numbers);
console.log("Giá trị lớn nhất là " + maxInNumbers);
console.log("Giá trị nhỏ nhất là " + minInNumbers);
console.log("Giá trị trung bình là " + eval(numbers.join('+')) / numbers.length)