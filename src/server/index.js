import express from 'express';
import { debug as _debug } from 'debug';
import { matchRoutes } from 'react-router-config';
import { renderer, setupStore } from './helpers';
import Routes from '../common/routes';

const app = express();
const debug = _debug('app:server');

app.use(express.static('build/public'));

app.get('*', async (req, res) => {
  const store = setupStore();
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
