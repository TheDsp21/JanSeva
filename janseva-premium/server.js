require("dotenv").config();

const express = require("express");
const { MongoClient } = require("mongodb");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(__dirname));

const client = new MongoClient(process.env.MONGODB_URI);

let grievances;

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "JanSeva server is running" });
});

app.post("/api/grievances", async (req, res) => {
  try {
    const data = req.body;

    if (!data || typeof data !== "object" || Array.isArray(data)) {
      return res.status(400).json({ error: "Invalid grievance data" });
    }

    const referenceId =
      "JS" + Date.now().toString().slice(-8);

    const grievance = {
      ...data,
      referenceId,
      status: "Submitted",
      createdAt: new Date()
    };

    delete grievance._id;

    const result = await grievances.insertOne(grievance);

    res.status(201).json({
      message: "Grievance saved successfully",
      referenceId,
      id: result.insertedId
    });
  } catch (error) {
    console.error("Grievance save failed:", error.message);
    res.status(500).json({ error: "Unable to save grievance" });
  }
});

app.get("/api/grievances", async (req, res) => {
  try {
    const records = await grievances
      .find({})
      .sort({ createdAt: -1 })
      .limit(200)
      .toArray();

    res.json(records);
  } catch (error) {
    console.error("Grievance retrieval failed:", error.message);
    res.status(500).json({ error: "Unable to retrieve grievances" });
  }
});

async function startServer() {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI is missing from your .env file");
    }

    await client.connect();

    const database = client.db(process.env.MONGODB_DB || "janseva");
    grievances = database.collection("grievances");

    console.log("Connected to MongoDB Atlas successfully!");

    app.listen(PORT, () => {
      console.log(`JanSeva running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Startup failed:", error.message);
    process.exit(1);
  }
}

startServer();
