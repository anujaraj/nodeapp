var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  
  res.render('index', { title: 'Express' });

});
router.post('/signup',function(req,res){
  db.connect( function(err) {  
    if (err)throw err; 
     
    console.log("Connected!");  
    var sql = "INSERT INTO employees (id, name, age, city) VALUES ('1', 'Ajeet Kumar', '27', 'Allahabad')";  
    db.query(sql, function (err, result) {  
    if (err) throw err;  
    console.log("1 record inserted");  
    })
});  
  res.send(JSON.stringify(req.body));

})
module.exports = router;
