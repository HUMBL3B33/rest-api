const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

let items = [{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }];

app.get('/items', (req, res) => {
  res.json(items);
});

app.get('/items/:id', (req, res) => {
  const itemId = +req.params.id;
  const item = items.find(item => item.id === itemId);
  if (!item) {
    res.status(404).send('Item not found');
  } else {
    res.json(item);
  }
});

module.exports = app;

