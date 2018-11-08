import express from 'express';
import data from './data/projects.json'
const app = express();
app.set('view engine', 'pug');
app.use(express.static(__dirname + '/dist'));


app.get('/', (req,res) =>{
  res.redirect('/charles')
});

app.get('/bntouch', (req, res) => {
  res.render('index', data.project[0])
});

app.get('/payments-app', (req, res) => {
  res.render('index', data.project[1])
});

app.get('/makufoods', (req, res) => {
  res.render('index', data.project[2])
});

app.get('/pingpong', (req, res) => {
  res.render('index', data.project[3])
});

app.get('/solomoto-mydigitalscore', (req, res) => {
  res.render('index', data.project[4])
});

app.get('/sdaem', (req, res) => {
  res.render('index', data.project[5])
});

app.get('/relax-yachting', (req, res) => {
  res.render('index', data.project[6])
});

const port = process.env.PORT || 5656;
app.listen(port, () => {
  console.log(`http://localhost:${port}`)
});
