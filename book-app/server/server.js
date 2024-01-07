const express = require('express');
const bodyParser = require('body-parser');

const authRoutes = require('./routes/authRoutes');
const bookRoutes = require('./routes/bookRoutes');
const testRoutes = require('./routes/testRoutes')
const connectDB = require('./config/db');
require('dotenv').config()
require('./config/db'); // Connect to MongoDB
connectDB()
const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/books', bookRoutes);
app.use('/api/test', testRoutes)
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
