//13. Hãy viết chương trình đảo ngược sau s.
//VD: “This is a beautiful day”, output: ”yad lufituaeb a si sihT”
function reverse(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    console.log(reversed);
}
reverse('This is a beautiful day');