import express from "express";
import cors from "cors";
import "dotenv/config";

import connectDB from "./configs/mongodb.js";
import connectCloudinary from "./configs/cloudinary.js";

import userRouter from "./routes/userRoutes.js";
import educatorRouter from "./routes/educatorRoutes.js";
import courseRouter from "./routes/courseRoute.js";

import { clerkMiddleware } from "@clerk/express";
import { clerkWebhooks, stripeWebhooks } from "./controllers/webhooks.js";

const app = express();

// Connect DB & Cloudinary
await connectDB();
await connectCloudinary();

app.use(cors({
  origin: "https://edemy-lms-web.vercel.app",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "cl-at"],
  credentials: true,
}));

// Handle preflight requests
app.options("*", cors());

app.use(express.json());

app.use((req, res, next) => {
  if (req.method === "OPTIONS") return next();
  return clerkMiddleware()(req, res, next);
});


app.get("/", (req, res) => {
  res.status(200).send("API Working");
});

// Webhooks
app.post("/clerk", express.json(), clerkWebhooks);
app.post("/stripe", express.raw({ type: "application/json" }), stripeWebhooks);

// API Routes
app.use("/api/educator", educatorRouter);
app.use("/api/course", courseRouter);
app.use("/api/user", userRouter);


app.use((err, req, res, next) => {
  console.error("Error:", err);

  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});


export default app;