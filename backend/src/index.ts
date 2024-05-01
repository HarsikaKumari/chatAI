import express from "express";
import {config} from "dotenv";
config();

const app = express();

//GET -
//PUT -
//POST -
//DELETE -

//middlewares
app.use(express.json());

// app.get("/", (req,res, next) => {
//   return res.send("Hello!");
// });

// app.post("/", (req,res, next) => {
//   return res.send("Hello! " + req.body.name);
// });

// app.put("/", (req,res, next) => {
//   return res.send("Hello! " + req.body.name);
// });

// app.delete("/users/:id", (req,res, next) => {
//   console.log(req.params.id);
//   return res.send("Hello! " + req.params.id);
// });

//connections and listeners
app.listen(3000, () => {
  console.log("local host running!");
});
