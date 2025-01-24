import express from 'express';
import connectDB from './db/connectdb.js';
import { join } from 'path';
import router from './routes/web.js';
const app = express();
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017";
const port = process.env.PORT || '3000';


app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }))
app.use('/index/edit', express.static(join(process.cwd(), "public")));
app.use('/index', express.static(join(process.cwd(), "public")));

app.use('/index', router)
connectDB(DATABASE_URL);



app.listen(port, () => {
    console.log(`server is running on ${port}`);
})