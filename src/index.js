const express = require('express');
const https = require('https');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
const server = https.createServer(app);

app.use(helmet());
app.use(cors());
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}
dotenv.config();

mongoose.connect(
    process.env.MONGODB_URI,
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    }
).then(value => {
    console.log(`Connected to MongoDB on database ${value.connection.db.databaseName}`);
}).catch(error => {
    console.log(`Error: ${error.message}`);
})

const PORT = process.env.PORT || 5000;

server.listen(PORT, 'localhost', () => {
    console.log(`Server connected in ${process.env.NODE_ENV} mode on port ${PORT}`);
})