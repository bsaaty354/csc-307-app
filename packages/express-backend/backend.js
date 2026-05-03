// backend.js
import express from "express";
import cors from "cors";
import userServices from "./models/user-services.js"

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/users", (req, res) => {
  const{name, job} = req.query;
  
  userServices.getUsers(name, job)
    .then((result) => {
      res.send({user_list: result});
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send("Error: unable to retrieve information");
    });
});

app.get("/users/:id", (req, res) => {
  const id = req.params["id"]; //or req.params.id
  userServices.findUserById(id)
    .then((result) => {
      if(result == null || result == undefined){
        res.status(404).send("Error: Data not found");
      }
      else{
        res.send(result);
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send("Error: Unable to retrieve data");
    });
});

app.post("/users", (req, res) => {
  const userToAdd = req.body;
  userServices.addUser(userToAdd)
    .then((savedUser) => {
      res.status(201).send(savedUser);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).end();
    });
});

app.delete("/users/:id", (req, res) => {
  const id = req.params.id;
  userServices.deleteUserById(id)
    .then((result) => {
      if(result){
        res.status(204).send();
      }
      else{
        res.status(404).send("Error: User not found");
      }
    })
    .catch((error) => {
      res.status(500).send("Error: Unable to delete user");
    });    
});

app.listen(port, () => {
  console.log(
    `Example app listening at http://localhost:${port}`
  );
});
