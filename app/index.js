// app/index.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('🚀 Node.js App Running - on EC2 with Docker!'));
app.get('/health', (req, res) => res.send('OK'));

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));