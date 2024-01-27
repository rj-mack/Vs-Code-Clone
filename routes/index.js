var express = require('express');
var fs = require("fs")
var router = express.Router();

/* GET home page. and read in folder files */

router.get('/', function(req, res, next) {
  fs.readdir("./upload",{withFileTypes:true},function(err,file){
    res.render('index', { files:file });
  })
});

router.get('/back', function(req, res, next) {
  res.redirect("back")
})

// here is create file

router.get('/createfile', function(req, res, next) {
  fs.writeFile(`./upload/${req.query.filename}`,"", function(err){
    res.redirect("back")
  })
});

// here is create folder

router.get('/createfolder', function(req, res, next) {
  fs.mkdir(`./upload/${req.query.foldername}`,function(err){
    res.redirect("back")
  })
});
// this route use for delete folder

router.get('/delete-folder/:foldername', function(req, res, next) {
  fs.rmdir(`./upload/${req.params.foldername}`,function(err){
    res.redirect("back")
  })
})

// this route use for delete file

router.get('/delete-file/:filename', function(req, res, next) {
  fs.unlink(`./upload/${req.params.filename}`,function(err){
    res.redirect("back")
  })
})
// this route is use for show file in the right dive
router.get('/show/:fileshow', function(req, res, next) {
  fs.readdir("./upload",{withFileTypes:true},function(err,file){
    fs.readFile(`./upload/${req.params.fileshow}`,"utf-8", function(err,filldata){
      res.render('open', { files:file, filename:req.params.fileshow, filldata});
    })
  })
});

// this route use foe update edit name
router.post('/updatename/:newname', function(req, res, next) {
  fs.rename(`./upload/${req.params.newname}`,`./upload/${req.body.newfilename}`,function(err){
    res.redirect("back")
  })
})
// this route use for save data


router.post('/savedata/:filename', function(req, res, next) {
  fs.writeFile(`./upload/${req.params.filename}`,req.body.dataa, function(err){
    res.redirect("back")
  })
})

module.exports = router;
