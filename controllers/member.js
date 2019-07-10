const db = require("../modules");
module.exports = {
    findAll: function (req, res) {
        db.Member
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findOne: function (req, res) {
        console.log('req/body', req.body);
        db.Member
            .find({ username: req.body.username, password: req.body.password })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    
    getMemberPopulateBlogs: function (req, res) {
        db.Author.find({})
          // Specify that we want to populate the retrieved users with any associated notes
          .populate("blog")
          .then(function (dbModel) {
            // If able to successfully find and associate all Users and Notes, send them back to the client
            res.json(dbModel);
          })
          .catch(function (err) {
            // If an error occurs, send it back to the client
            res.json(err);
          });
      },

    create: function (req, res) {
        console.log('req.body', req.body);
        db.Member
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => console.log(err));
    },
    remove: function (req, res) {
        db.Member
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};



