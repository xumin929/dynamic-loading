import Express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import favicon from 'serve-favicon';
import compression from 'compression';
import path from 'path';
import Loadable from 'react-loadable';
import TemplateEngine from 'swig';
import config from './config';
import route from './routes/route';
import getChunks, { waitChunks } from './helpers/getChunks';
import sso from 'jdcloudecc/sso/sso';
import ApiClient from './helpers/ApiClient';

const app = new Express();
const server = new http.Server(app);
const micro_service_name = config.micro_service_name.replace("b2b-","")
const chunksPath = path.join(__dirname, '..', 'static', micro_service_name, 'loadable-chunks.json');
app.use(compression());
app.use(favicon(path.join(__dirname, '..', 'static', 'favicon.ico')));
app.set('views', path.join(__dirname, '..', 'src',"modules"));
var swig = new TemplateEngine.Swig({//开发和线上区别对待
  allowErrors: false,
  autoescape: true,
  cache: false,
  encoding: 'utf8'
});

app.engine('html', swig.renderFile);
app.set('view engine', 'html');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false,limit:"10000kb"}));
app.use(cookieParser());
app.use(Express.static(path.join(__dirname, '..', 'static')));
app.use('/'+micro_service_name, route);
app.use('/'+micro_service_name+'/sso', function(req, res, next){
  res.send("ok")
  // const client = ApiClient(req, res);
  // sso(req, res, client);
});

if (config.port) {
  server.listen(config.port, (err) => {
    if (err) {
      console.error(err);
    }
    console.info('==> 💻  Open http://%s:%s in a browser to view the app.', config.host, config.port);
  });
} else {
  console.error('==>     ERROR: No PORT environment variable has been specified');
}


(async () => {
  try {
    await Loadable.preloadAll();
    await waitChunks(chunksPath);
  } catch (error) {
    console.log('Server preload error:', error);
  }
})();