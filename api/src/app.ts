import express from 'express';

const server = express();
const port = 3000;
server.get('/', (req, res) => {
  res.send('The sedulous hyena ate the antelope!');
});
server.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});

export default server;