import express from 'express';
import NewsService from './news-service';

let news = express.Router();
const newsService = new NewsService();


// will handle any request that ends in /events
// depends on where the router is "use()'d"
news.get('/', function(req, res, next) {
  console.log('in news watch babel nodedev');

  let singleNews = newsService.getNews();
  console.log(singleNews);
  res.render('news');
  // ..
});

module.exports = news;
