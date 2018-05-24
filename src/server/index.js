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
  const requests = matchedRoutes
    .map(({ route }) => route.loadData ? route.loadData(store) : null)
    // eslint-disable-next-line array-callback-return
    .map((request) => { // eslint-disable-line consistent-return
      if (request) {
        // Resolve all requests even if they fail, this will still allow the app to be rendered
        return new Promise((resolve) => {
          request.then(resolve).catch((err) => {
            debug(err.message);
            return resolve(err);
          });
        });
      }
    });
  const context = {};
  try {
    await Promise.all(requests);
    const content = renderer(req.path, store, context);

    if (context.url) {
      return res.redirect(301, context.url);
    }

    if (context.is404) {
      res.status(404);
    }
    return res.send(content);
  } catch (err) {
    debug(err.message);
    return res.status(500).send();
  }
});

app.listen(3000, () => {
  console.log('Listening on port 3000'); // eslint-disable-line no-console
});
