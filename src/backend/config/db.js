



//  const express = require("express");
//  const app = express();
//  app.use(express.json());
//  app.get("/login", (req, res) => {
//   res.json( {
//   "email": "",
//   "password": ""
// } );
// });
// app.post('/login',(req,res)=>{
//   const data = req.body;
//   res.json(
//     {
//       message:"login successful",
//       data:data
//     });
//   });
// app.listen(3000, "0.0.0.0", () => {
//   console.log("Server is running on port 3000");
// });



import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const db = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASS || "",
  database: process.env.DB_NAME || "uni_finder",
});

db.connect((err) => {
  if (err) {
    console.log("❌ DB Connection Failed:", err.message);
  } else {
    console.log("✅ MySQL Connected Successfully");
  }
});

export default db;