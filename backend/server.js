import express from 'express';
import cors from 'cors';
import connectDB from './configs/db.js';
import router from './routes/booksRoutes.js';

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send("Welcome to the home page");
});

app.use('/', router);




connectDB();

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
