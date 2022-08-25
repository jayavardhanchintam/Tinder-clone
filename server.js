import express from 'express';
import mongoose from 'mongoose';
import cards from './dbCards.js';
import Cors from 'cors'; // cors-addingheaders to every requwest

// app config
const app = express();
const port = process.env.PORT || 3000
const connection_url = `mongodb+srv://admin:NsnVwZv1lJJRapbQ@cluster0.hbsgycg.mongodb.net/tinderdb?retryWrites=true&w=majority`


// middlewares
app.use(express.json());
app.use(Cors());

// DB config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => {
    if (err) throw err;
    console.log('Connected to MongoDB!!!')
});

//api endpoints
app.get('/', (req, res) => res.status(200).send("HELLO WORLD!!"));
app.post('/tinder/cards', (req, res) => {
    const dbCard = req.body;

    cards.create(dbCard, (err, data) => {
        if (err) {
            res.status(500).send(err); // 500- theres an internal error
        } else {
            res.status(201).send(data); // 201- successfully created the data
        }
    });
});

app.get('/tinder/cards', (req, res) => {
    cards.find((err, data) => {
        if (err) {
            res.status(500).send(err); // 500- theres an internal error
        } else {
            res.status(200).send(data);
        }
    });
});

//listener
app.listen(port, () => console.log(`listening o localhost: ${port}`));





// NsnVwZv1lJJRapbQ