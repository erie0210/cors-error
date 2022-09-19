### cors 에러 내기
- my-app에서 $ yarn start
- my-server에서 $ yarn start
react 는 3000에서, nest는 5000에서 뜬다.</br>
react에서 axios가 localhost:5000/api/v1을 바라보도록 한다. </br>
http://localhost:3000/에 접속한다. </br>

### nginx 띄우기 
$ cd (루트)</br>
$ docker-compose up -d </br>

react에서 axios가 localhost/api/v1을 바라보도록 한다.</br>
http://localhost/에 접속한다.</br>
