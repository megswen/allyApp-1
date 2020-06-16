// THE CODE IN THIS FILE HAS NOT BEEN TESTED YET. WAITING ON DB FOR NEED HELP PAGE

var db = require("../models");

module.exports = function(app) {
    // GET route to get all the help requests
    app.get("/api/needhelp", function(req, res) {
        db.Help.findAll({}).then(function(data) {
            res.json(data);
        });
    });

    // POST route to save help requests
    app.post("/api/needhelp", function(req, res) {
        db.Help.create({
          title: req.body.title,
          body: req.body.body,
          userId: req.body.userId
        }).then(function(data) {
          res.json(data);
        });
    });

    // DELETE route to delete help requests
    app.delete("/api/needhelp/:id", function(req, res) {
        db.Help.destroy({
          where: {
            id: req.params.id
          }
        }).then(function(data) {
            res.json(data);
        });
    });

    // PUT route to update help requests
    app.put("/api/needhelp", function(req, res) {
        db.Help.update({
          subject: req.body.subject,
          body: req.body.body
          //Any other columns?
        }, {
          where: {
            id: req.body.id
          }
        }).then(function(data) {
            res.json(data);
        });
    });
};