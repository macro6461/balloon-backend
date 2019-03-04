const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
let bodyParser = require("body-parser");
const userRoutes = express.Router();
const planRoutes = express.Router();
const PORT = 4000;

let User = require('./models/user.model');
let Plan = require('./models/plan.model');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/users', {useNewUrlParser: true});

const connection = mongoose.connection;

connection.once('open', function(){
  console.log("MongoDB database connection established successfully");
});

userRoutes.route('/').get(function(req, res){
  User.find(function(err, users){
    if(err){
      console.log(err);
    } else {
      console.log(users)
      res.json(users)
    }
  });
});

userRoutes.route('/:id').get(function(req, res){
  User.findById(req.params.id, function(err, user){
    if(err){
      console.log(err);
    } else {
      res.json();
    }
  });
});

userRoutes.route('/add').post(function(req, res){
  let user = new User(req.body);
  user.save()
    .then(user=>{
      res.status(200).json({'user': 'signed up successfully'});
      console.log(res);
    })
    .catch(err=>{
      res.status(400).send('signing up failed')
    });
});

userRoutes.route('/update/:id').post(function(req, res){
  User.findById(req.params.id, function(err, user){
    if(!user){
      res.status(404).send('data not found');
    } else {
      user.first_name = req.body.first_name;
      user.last_name = req.body.last_name;
      user.username = req.body.username;
      user.password = req.body.password;
      user.email = req.body.email;
      user.age = req.body.age;
      user.credit_card_id = req.body.credit_card_id;
      user.score.math.latest = req.body.score.math.latest;
      user.score.math.last = req.body.score.math.last;
      user.score.math.average = req.body.score.math.average;
      user.score.words.latest = req.body.score.words.latest;
      user.score.words.last = req.body.score.words.last;
      user.score.words.average = req.body.score.words.average;
      user.score.infant.latest = req.body.score.infant.latest;
      user.score.infant.last = req.body.score.infant.last;
      user.score.infant.average = req.body.score.infant.average;
      user.plan_id = req.body.plan_id;
      user.disable_instructions = req.body.disable_instructions;

      user.save().then(user=>{
        res.json('Update successful');
      })
      .catch(err=>{
        res.status(400).send('Update failed');
      });
    }
  });
});

app.use('/users', userRoutes);

//////////////PLAN ROUTES //////////////

planRoutes.route('/').get(function(req, res){
  Plan.find(function(err, plans){
    if(err){
      console.log(err);
    } else {
      console.log(plans)
      res.json(plans)
    }
  });
});

planRoutes.route('/:id').get(function(req, res){
  Plan.findById(req.params.id, function(err, plan){
    if(err){
      console.log(err);
    } else {
      res.json();
    }
  });
});

planRoutes.route('/add').post(function(req, res){
  console.log(req.body);
  console.log(req.headers)
  let plan = new Plan(req.body);
  plan.save()
    .then(plan=>{
      res.status(200).json({'plan': 'Plan made successfully'});
    })
    .catch(err=>{
      res.status(400).send('Plan made failed')
    });
});

planRoutes.route('/update/:id').post(function(req, res){
  User.findById(req.params.id, function(err, plan){
    if(!plan){
      res.status(404).send('data not found');
    } else {
      plan.plan_name = req.body.plan_name;
      plan.access = req.body.plan_access;

      plan.save().then(plan=>{
        res.json('Update successful');
      })
      .catch(err=>{
        res.status(400).send('Update failed');
      });
    }
  });
});

app.use('/plans', planRoutes);

app.listen(PORT, function(){
  console.log("server started on port: " + PORT + " teehee");
});
