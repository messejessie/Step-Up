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
        console.log('the body coming in ', req.body);
        db.Blog
            .create(req.body)
            .then(dbModel => { 
            db.Member.findOneAndUpdate({ _id: req.params.id}, 
            { $push: { "blog": dbModel._id } }, { new: true }, (err, newBlog) => {
                res.send(newBlog);
            });
                })  
            .catch(err => console.log('the err', err));
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
      },

      getPopulateBlog: function (req, res) {
        console.log("in populate")
        console.log(req.params)
        db.Member.find({ memberid: req.params.id })
          // Specify that we want to populate the retrieved users with any associated notes
          // .populate("postings")
          .sort({ date: -1 })
          .then(function (dbModel) {
            // If able to successfully find and associate all Users and Notes, send them back to the client
            res.json(dbModel);
          })
          .catch(function (err) {
            // If an error occurs, send it back to the client
            res.json(err);
          });
      },
      
};

