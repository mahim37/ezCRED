import express, { Express, Request, Response , Application } from 'express';
import dotenv from 'dotenv';
import cors from "cors";

dotenv.config();

const app: Application = express();
app.use(cors<Request>());

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is Fire at http://localhost:${port}`);
  });