/**
 * Created by sparsh on 13/1/17.
 */
var express = require("express");
var formidable = require("formidable");

var router = express.Router();
router.get('/',function(req,res){
    return res.json({"message":"successfully"});
});

router.post('/', function (req, res, next) {
    console.log("Received Request");
    next();
}, function (req, res) {
    var form = new formidable.IncomingForm();

    form.parse(req);

    form.on('fileBegin', function (name, file) {
        file.path = __dirname + '/uploads/' + file.name;
    });

    form.on('file', function (name, file) {
        console.log('Uploaded ' + file.name);
    });

    return res.json({"status": "File successfully uploaded"});
});

module.exports = router;