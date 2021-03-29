require('dotenv').config();

const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();
app.use(express.json());

app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(cookieParser());

app.listen(process.env.PORT || 8888);
console.log("server listening port=", process.env.PORT || 8888);
