import express from 'express';
import serverless from 'serverless-http';
import projectPage from '../views/index.pug';
import path from 'path';
import data from '../data/projects.json';
const app = express();

const router = express.Router();

router.get('/bntouch', (req, res) => {
  const html = projectPage(data.project[0]);
  res.send(html);
});

router.get('/payments-app', (req, res) => {
  const html = projectPage(data.project[1]);
  res.send(html);
});

router.get('/makufoods', (req, res) => {
  const html = projectPage(data.project[2]);
  res.send(html);
});

router.get('/pingpong', (req, res) => {
  const html = projectPage(data.project[3]);
  res.send(html);
});

router.get('/solomoto-mydigitalscore', (req, res) => {
  const html = projectPage(data.project[4]);
  res.send(html);
});

router.get('/sdaem', (req, res) => {
  const html = projectPage(data.project[5]);
  res.send(html);
});

router.get('/relax-yachting', (req, res) => {
  const html = projectPage(data.project[6]);
  res.send(html);
});

app.use('/.netlify/functions/server', router);
app.use('/.netlify/functions/server', express.static(path.resolve('./dist')));
app.use(function(err, req, res, next) {
  console.log(err);
});

exports.handler = serverless(app);
