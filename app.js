const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World');
});
app.post('/post', (req, res) => {
  console.log(req.body);
  res.json({
    message: 'got the data',
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});