/**
 * Câu lệnh if else
 * NaN
 * Null
 * undefined
 * '' - "" 
 * 0
 */
var fullName = 'Son Dang'
var isSuccess = 1 < 2
if(true)
{
    console.log('dieu kien dung')
}
else
{
    console.log('dieu kien sai')
}
// Toán tử logic 1.&& - and 2.|| - Or 3. !-Not
var a=1;
var b=2;
var c=3;

if ( a > 0 && b > 0 && c > 0){
    console.log('Dieu kien dung');
}

//Câu lệnh điều kiện
// phép so sánh
// && lấy từ trái qua
var a=1;
var b=2;

var result = a<b && a<0;
//console.log('result',result) (||)
if(result){
    console.log('a < b');
}
else{
    console.log('a>')
}

//Chuỗi
// 1. tao chuỗi
//     -2 cách 
    //   var fullName = 'Son Dang' ( nên dùng)
    //   var fullName = new String('Son Dang')
// 2. 1 số case sử dụng \( backslash in js)
var fullName=' Son Dang là \'Sieu nhan\'';
console.log(fullName)
//3. Độ dài chuỗi
var fullName = "Son Dang";
console.log(fullName.length)
//4. Chú ý độ dài khi viết code
var fullName = "Son Dang wqeqeqwe qeqe "
+"we we we wew eweq eq";
console.log(fullName)
//5. Template string ES6
var firstName = 'Son';
var lastName = 'Dang';
console.log(`toi la: ${firstName} ${lastName}`)


// làm việc với chuỗi
//Key: JS string methods
var myString= 'bla bla we bla';
//1.length
console.log(myString.length)
//2.Find index(lastIndexOf, search)
console.log(myString.indexOf('bla bla'))
//3.Cut string
console.log(myString.slice(4,6))
//4.Replace(ghi đè) (/bla)g,'eq') để tìm tất cả
console.log(myString.replace('bla','eq'))
//5.Convert to upper case
console.log(myString.toUpperCase())
//6.Convert to lower case
console.log(myString.toLowerCase())
//7.trim(xóa khoảng trống)
console.log(myString.trim().length)
//8.split(tách phần tử)
var languages = 'Javascript, PHP, Ruby';
console.log(languages.split(','))
//9.get a character by index(lấy kí tự )
const myString2='Son Dang';
console.log(myString2.charAt(1))


//Kiểu số trong Javascript
//1.Tạo giá trị number
// var age = 18;
//2.Làm việc với Number
//-To string
//-To Fixed
var age= 18;
console.log(age.toString())
console.log(age.toFixed(3))


//Mảng trong JS-Array

//1.Tạo mảng
var languages=[
    'JS',
    'PHP',
    'Ruby',
];
// var languages= new Array('JS',
// 'PHP',
// 'Ruby',)
console.log(languages)
// console.log(Array.isArray(languages)) (kiểm tra xem có phải array )
//2.Truy xuất mảng
console.log(languages[2])

//Làm việc với array
var languages=[
    'JS',
    'PHP',
    'Ruby',
];
//1.ToString
console.log(languages.toString())
//2.Join(dấu ngăn cách)
console.log(languages.join('-'))
//3.Pop(xóa phần thử cuối mảng và trả về phần tử đã xóa)
console.log(languages.pop())
//4.Push(Thêm 1 hay nhiều phần tử cuối mảng
console.log(languages.push('bla'))
//5.Shift(Xóa phần tử ở đầu mảng và trả về)
console.log(languages.shift())
//6.UnShift(Thêm 1 hay nhiều pt ở đầu mảng)
console.log(languages.unshift('bla'))
//7.Splicing(Xóa , cắt, chèn pt mưới vào bảng)
languages.splice(1,2)//Xóa
languages.splice(1, 0, 'bla')//chèn
//8.concat(kết hợp)
var languages2=[
    'JS',
    'PHP',
];
console.log(languages.concat(languages2))
//9.slicing(cắt)
console.log(languages.slice(0))
