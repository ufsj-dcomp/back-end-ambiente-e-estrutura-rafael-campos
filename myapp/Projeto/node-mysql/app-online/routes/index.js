var express = require('express');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/jogadores', function(req, res) {
  req.getConnection(function(err,connection){
        connection.query('SELECT * FROM tb_jogadores', [], function(err, result){
if (err) {
                    return res.status(400).json(err);
             }
            return res.status(200).json(result);
        });
  });
});
module.exports = router;
