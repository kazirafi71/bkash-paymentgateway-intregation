const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const bkashPaymentRoute = require("./routes/bkashPayment.routes");

//middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//routes

app.use("/api/bkash", bkashPaymentRoute);

app.get("/", (req, res) => {
  try {
    res.send("<h1>Hello Iam from Bkash Server</h1>");
  } catch (e) {
    console.log(e);
  }
});

//Server setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port:${PORT}`));
