//19.Hãy tính tổng các số từ 1 đến n mà không dùng for, while loop? (đệ quy, recursive)
const arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = 0;
arrayOfNumbers.forEach((number) => {
    sum += number;
});

console.log(sum);