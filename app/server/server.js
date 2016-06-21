import express from 'express';
import newsRouter from './news-router';
const app = express();
const PATH = require('path');
//const router = express.Router()

const VIEW_FOLDER = PATH.resolve(__dirname, 'views');

app.set('view engine' ,'ejs');
app.set('views', VIEW_FOLDER);

app.use(express.static('public'));
app.use('/news', newsRouter);

app.get('/', function (req, res) {
  res.render('index');
  //res.send('Hello World!');
});

app.listen(3000, () => {
  console.log(VIEW_FOLDER);
    console.log('Listening on http://localhost:3000');
});
