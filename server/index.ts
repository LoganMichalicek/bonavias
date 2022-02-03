import * as express from 'express';
import * as path from 'path';

const app = express();
const port = 3000;

app.use(express.static(path.resolve(__dirname, '../dist')));

app.listen(process.env.PORT || port, () => {
  console.log(`Listening on port ${process.env.PORT || port}`);
});
