//18. Viết hàm tìm vị trí xâu X tồn tại kề cuối trong xâu Y?
var str = "This is a beautiful day, is it?"
var substr = "is"
console.log(`${str.lastIndexOf(substr) }`)
    //
var str = "This is a beautiful day, is it?"
var substr = "isa"
console.log(`${str.lastIndexOf(substr) }`)
    //
var str = "hi hi hi hi hi"
var substr = "hi"
console.log(`${str.slice(0, 12).lastIndexOf(substr) }`)