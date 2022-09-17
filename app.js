require("dotenv").config();
require('express-async-errors')

const express = require("express");
const app = express();
const notFound = require("./middleware/not-found");
const error = require("./middleware/error-handler");
const connectDB = require("./db/connect");
const productsRouter = require("./routes/products");

app.use(express.json());
const port = process.env.PORT || 7000;

app.get("/", (req, res) => {
  res.send(
    `<h1>STORE API</h1><br/><a href= "/api/v1/products">Products Route</a>`
  );
});
app.use('/api/v1/products', productsRouter)
app.use(notFound);
app.use(error);


const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`App listening on port ${port}🎉🎉🎉`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
