import express from 'express';
import NewsService from './news-service';

let news = express.Router();
const newsService = new NewsService();


// will handle any request that ends in /events
// depends on where the router is "use()'d"
news.get('/', function(req, res, next) {

  let singleNews = newsService.getNews();
  //res.render('news');
  res.json(singleNews);
  // ..
});

module.exports = news;
