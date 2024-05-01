import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";

//connections and listeners
const PORT = process.env.PORT || 3000;
connectToDatabase().then(() => {
  app.listen(PORT, () => {
    console.log("local host running and connected to Database 🤘!");
  });
}).catch(err => console.log(err));

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

