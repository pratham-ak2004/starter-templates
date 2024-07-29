import express from "express";
import path from "path";
const router = express.Router();

// REST API Routes
router.get("/", (req: any, res: any) => {
  res.sendFile(path.join(__dirname, "..", "..", "public", "index.html"));
});

router.get("/api", (req: any, res: any) => {
  res.status(200).send(JSON.stringify({ message: "Hello World" }));
});

export { router };
