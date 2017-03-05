
//파일 시스템 모듈을 얻어옵니다.
var fs=require("fs");

//파일 시스템 모듈을 이용하면 파일 시스템에 있는 내용을 
//읽어 들일 수 있습니다.

var data = fs.readFileSync("myMemo.txt","utf8");
console.log(data);


fs.readFile("myMemo.txt","utf8", function(err, data){
	console.log("***");
	console.log(data);
});


console.log("test03.js 의 해석이 종료 됩니다");