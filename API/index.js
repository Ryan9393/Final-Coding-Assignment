import cors from "cors";
import { config } from "dotenv";
import express from "express";
import { MongoClient, ObjectId } from "mongodb";

config();

if (!process.env.DB_URL) throw new Error("DB_URL env var is required");

const client = await MongoClient.connect(process.env.DB_URL);
const db = client.db("houses");

const app = express();

// allows any website to access the api
app.use(cors());
app.use(express.json());

app.get("/api/houses", async (req, res) => {
    const houses = await db.collection("houses").find({}).toArray();
    return res.json(houses);
});

app.put("/api/houses/:id", async (req, res) => {
    delete req.body._id;
    const id = new ObjectId(req.params.id);
    try {
        // create house if it doesn't exist!
        // otherwise just update it!
        db.collection("houses").updateOne(
            { _id: id },
            { $set: req.body },
            { upsert: true }
        );
        return res.json({});
    } catch (e) {
        console.error(e);
        return res.status(500).json({ error: e });
    }
});

app.listen(3001);
