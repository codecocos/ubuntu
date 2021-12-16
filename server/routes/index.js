var express = require('express');
var router = express.Router();

const maria = require('../maria'); // 작성한 maria.js를 불러온다.
// connection 은 서버가 켜질 때 app.js 에서 수행되었다.

/* GET home page. */
router.get('/', function (req, res, next) {
  // 전에 만들어놨던 쿼리문을 아래와 같이 바꿔준다.
  // 'select * from test' 를 'select * from user' 로 바꿔주면 된다.
  maria.query('select * from user', function (err, rows, fields) { // 쿼리문을 이용해 데이터를 가져온다.
    if (!err) {
      res.send(rows);
    } else {
      console.log("err : " + err);
      res.send(err);
    }
  });
});
module.exports = router;