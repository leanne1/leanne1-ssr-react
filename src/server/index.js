import express from 'express';
import proxy from 'express-http-proxy';
import { debug as _debug } from 'debug';
import { matchRoutes } from 'react-router-config';
import { renderer, setupStore } from './helpers';
import Routes from '../client/routes';

const app = express();
const debug = _debug('app:server');

// Proxy client API requests to API endpoint, including auth cookie
app.use('/api', proxy('http://react-ssr-api.herokuapp.com', {
  // Tell Google oAuth this is a proxied request so the redirect is correct
  proxyReqOptDecorator(opts) {
    opts.headers['x-forwarded-host'] = 'localhost:3000'; // eslint-disable-line no-param-reassign
    return opts;
  },
}));
app.use(express.static('build/public'));

app.get('*', async (req, res) => {
  const store = setupStore(req.get('cookie'));
  const matchedRoutes = matchRoutes(Routes, req.path);
  const requests = matchedRoutes.map(({ route }) => route.loadData ? route.loadData(store) : null);
  try {
    await Promise.all(requests);
    res.send(renderer(req.path, store));
  } catch (err) {
    debug(err.message);
    res.status(500).send();
  }
});

app.listen(3000, () => {
  console.log('Listening on port 3000'); // eslint-disable-line no-console
});
