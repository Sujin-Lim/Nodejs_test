var http = require('http');

//웹 서버 객체 생성
var server = http.createServer();

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