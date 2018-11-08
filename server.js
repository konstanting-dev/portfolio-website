import express from 'express';
const serverless = require('serverless-http');
import data from './data/projects.json'
const app = express();
app.set('view engine', 'pug');
app.use(express.static(__dirname + '/dist'));

const router = express.Router();
app.use('/.netlify/functions/server', router);

router.get('/', (req,res) =>{
  res.redirect('/charles')
});

router.get('/bntouch', (req, res) => {
  res.render('index', data.project[0])
});

router.get('/payments-app', (req, res) => {
  res.render('index', data.project[1])
});

router.get('/makufoods', (req, res) => {
  res.render('index', data.project[2])
});

router.get('/pingpong', (req, res) => {
  res.render('index', data.project[3])
});

router.get('/solomoto-mydigitalscore', (req, res) => {
  res.render('index', data.project[4])
});

router.get('/sdaem', (req, res) => {
  res.render('index', data.project[5])
});

router.get('/relax-yachting', (req, res) => {
  res.render('index', data.project[6])
});

module.exports = app;
module.exports.handler = serverless(app);
