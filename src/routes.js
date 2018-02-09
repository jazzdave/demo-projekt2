import {app} from './consts';

import { second } from './demo1';

app.get('/', (req, res) => {
  const result2 = second('AHOJ SERVER', 999)
  res.send(result2);


});
app.get('/aaa', (req, res) => {

  res.send('ja jsem jina stranka');


});
