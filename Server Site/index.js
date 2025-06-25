const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.shp35fl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // await client.connect();
    const taskCollection = client.db("FreelancingDB").collection("Addedtask");
    const freelancers = client
      .db("FreelancingDB")
      .collection("freelancersdata");

    // !!For Browse Task
    app.get("/addtask", async (req, res) => {
      const sortFields = { deadline: -1 };
      const cursor = taskCollection.find().sort(sortFields);
      const result = await cursor.toArray();
      res.send(result);
    });

    // !!For Task Details
    app.get("/addtask/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const task = await taskCollection.findOne(query);

      res.send(task);
    });

    // !!For My posted tasks
    app.get("/mypost/:username", async (req, res) => {
      const sortFields = { deadline: -1 };
      const username = req.params.username;
      const query = { username: username };
      const cursor = taskCollection.find(query).sort(sortFields);
      const result = await cursor.toArray();
      res.send(result);
    });

    // !! Browse indiviual task
    app.get("/browsetask/:category", async (req, res) => {
      const sortFields = { deadline: -1 };
      const category = req.params.category;
      const query = { category: category };
      const cursor = taskCollection.find(query).sort(sortFields);
      const result = await cursor.toArray();
      res.send(result);
    });

    //  ! For freelancers data
    app.get("/freelancers", async (req, res) => {
      const sortFields = { name: 1 };
      const cursor = freelancers.find().sort(sortFields);
      const result = await cursor.toArray();
      res.send(result);
    });

    // !Freelancer indivisual
    app.get("/freelancers/:email", async (req, res) => {
      const Email = req.params.email;
      const query = { email: Email };
      const cursor = freelancers.find(query);
      const result = await cursor.toArray();
      res.send(result);
    });

    // ! Posting All tasks
    app.post("/addtask", async (req, res) => {
      const task = req.body;
      console.log(task);
      const result = await taskCollection.insertOne(task);
      res.send(result);
    });

    // !!To post a freelancer
    app.post("/freelancers", async (req, res) => {
      const user = req.body;
      try {
        const existingUser = await freelancers.findOne({ email: user.email });

        if (!existingUser) {
          const result = await freelancers.insertOne(user);
          return res.send({ inserted: true, result });
        }

        res.send({ inserted: false, message: "User already exists" });
      } catch (err) {
        res.send({ error: "Failed to save user", message: err.message });
      }
    });

    app.put("/addtask/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updatedTask = req.body;
      const updateDoc = {
        $set: {
          title: updatedTask.title,
          category: updatedTask.category,
          description: updatedTask.description,
          overview: updatedTask.overview,
          deadline: updatedTask.deadline,
          budget: updatedTask.budget,
        },
      };
      const result = await taskCollection.updateOne(filter, updateDoc, options);
      res.send(result);
    });

    // !!For dealers
    app.patch("/addtask/:id", async (req, res) => {
      const { id } = req.params;
      const result = await taskCollection.updateOne(
        { _id: new ObjectId(id) },
        { $inc: { Bid: 1 } }
      );
      res.send(result);
    });

    // !!For freelancers
    app.patch("/freelancers/:email", async (req, res) => {
      const { email } = req.params;
      const { Bidtasks} = req.body;
      const result = await freelancers.updateOne(
        { email: email },
        { $set: { Bidtasks: Bidtasks }, $inc: { Bid: 1 } })
      res.send(result);
    }
    );

    app.delete("/addtask/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await taskCollection.deleteOne(query);
      res.send(result);
    });
  } finally {
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
