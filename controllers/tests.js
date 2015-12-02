var express = require('express');
var router = express.Router();

/* GET /tests/ */
router.get('/', function(req, res) {
  db.keys("*", function(model){
    res.render('tests/index',model);
  })
});

/* POST /tests/ */
router.post('/', function(req,res){
  db.set(db.newId(), {created : new Date().getTime()});
  res.send("ok");
});

/* GET /tests/123/ */
router.get('/:id', function(req, res) {
  db.get(req.params.id,function(model){
    res.render('tests/detail',model)
  });
});

router.post('/delete', function(req,res){
  db.delete(req.body.key,function(model){
    res.send("ok");
  });
})

module.exports = router;
