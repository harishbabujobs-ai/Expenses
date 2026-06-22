require("dotenv").config();

const express =
require("express");

const cors =
require("cors");

const connectDB =
require("./config/db");

const authRoutes =
require("./routes/authRoutes");

const expenseRoutes =
require("./routes/expenseRoutes");

const app =
express();

app.use(cors());

app.use(express.json());

connectDB();

app.use(
 "/api/auth",
 authRoutes
);

app.use(
 "/api/expenses",
 expenseRoutes
);

app.listen(
 process.env.PORT,
 ()=>{
  console.log(
   "Server Running"
  );
 });