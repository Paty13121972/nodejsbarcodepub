var Rescode = require("../lib/rescode");

exports.barcode = function(req, res) {
    var opts = { scaleX: req.params.scaleX, scaleY: req.params.scaleY };
    var data = Rescode.create(req.params.type, req.params.text, opts);
    res.setHeader("Content-Type","image/png");
    res.end(data);
};
