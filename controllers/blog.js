const db = require("../modules");

module.exports = {
    findAll: function (req, res) {
        db.Blog
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.Blog
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.Blog
            .create(req.body)
            .then(dbModel => { 
            db.Member.findOneAndUpdate({}, 
            { $push: { Blogs: dbBlog._id } }, { new: true });
                    res.json(dbModel); 
                })
            .catch(err => res.status(422).json(err));
},

    update: function (req, res) {
        db.Blog
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
      remove: function(req, res) {
        db.Blog
          .findById({ _id: req.params.id })
          .then(dbModel => dbModel.remove())
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      }
};

