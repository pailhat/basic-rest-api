const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

app.use(cors());
app.use(bodyParser.json());

//Import Routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

//ROUTES
app.get('/', (req,res) => {
    res.send('Sup we are on the home page.');
});


//Connect to DB
mongoose.connect(
    process.env.DB_CONNECTION, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        })
        .then(() => console.log('DB Connected!'))
        .catch(err => {console.log(err);});

        
//Listen on port 3000
app.listen(3000);