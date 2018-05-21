import express from 'express';
import { renderer } from './helpers';

const app = express();

app.use(express.static('build/public'));

app.get('*', (req, res) => {
  const html = renderer(req.path);
  res.send(html);
});

app.listen(3000, () => {
  console.log('Listening on port 3000'); // eslint-disable-line no-console
});
