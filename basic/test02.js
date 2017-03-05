
//간단한 웹서버 Application 만들기 

var http=require("http");

var server=http.createServer(function(req,res){
	res.end("I'm nodejs Server! Kimgura!");
});

server.listen(3000, function(){
	//서버가 시작 되었을때 실행순서가 들어온다.
	console.log("Server is started !");
});