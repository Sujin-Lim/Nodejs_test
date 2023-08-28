var http = require('http');

//웹 서버 객체 생성
//test2 파일에서 request 이벤트 요청 처리하는 코드 삭제후 이 방법으로 변경
//createServer() 메서드 호출 시 전달하는 콜백 함수에 바로 처리하도록 함
var server = http.createServer(function (req, res) {
    console.log('클라이언트 요청 들어옴');

    res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
    res.write("<!DOCTYPE html>");
    res.write("<html>");
    res.write("<head>");
    res.write("<title>응답페이지</title>");
    res.write("</head>");
    res.write("<body>");
    res.write("<h1>Node.js로부터의 응답 페이지</h1>");
    res.write("</body>");
    res.write("</html>");
    res.end();
});

//웹 서버 시작해 3000번 포트에서 대기하도록 설정
var port = 3000;
server.listen(port, function () {
    console.log('웹 서버 시작됨. : %d', port);
});

//클라이언트 연결 이벤트 처리
server.on('connection', function (socket) {
    var addr=socket.address();
    console.log('클라이언트가 접속함. : %s, %d', addr.address, addr.port);
});

//클라이언트 요청 이벤트 처리
server.on('request', function (req, res) {
    console.log('클라이언트 요청 들어옴.');
    console.dir(req);
});

//서버 종료 이벤트 처리
server.on('close', function () {
    console.log('서버 종료');
});


//실행 후 웹 브라우저에서 http://localhost:3000/ 접속하면 콘솔에 결과 출력 됨
