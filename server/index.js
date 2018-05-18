import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackconfig from '../webpack.config';
const app = express();
import favicon from 'serve-favicon';
import cors from 'cors';
import mailchimp from './routes/mailchimp';

app.use(cors());

app.use(bodyParser.json());
app.use( (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next()
});

const port = process.env.PORT || 1955;

app.use(express.static(path.resolve(__dirname, '../dist')));
app.use(favicon(path.join(__dirname, '../src/images', 'favicon.png')));

app.use('/api/mailchimp/', mailchimp);

app.use(webpackMiddleware(webpack(webpackconfig)));

app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, '../dist', 'index.html'));
});

app.listen(port, () => console.log(`App started on port ${port}!`));