import * as express from 'express';
import * as path from 'path';

const app = express();
const port = 3000;
const devURL = `http://localhost:${port}`;
const pages = ['about', 'contact', 'donate', 'gallery', 'testimonials'];

app.use(express.static(path.resolve(__dirname, '../dist')));

pages.map(page => {
  app.get(`/${page}`, (_req, res) => {
    res.sendFile(path.resolve(__dirname, '../dist', 'index.html'));
  });
});

app.all('*', (_req, res) => {
  res.redirect(devURL);
});

app.listen(process.env.PORT || port, () => {
  console.log(`Listening on port ${process.env.PORT || port}`);
});
