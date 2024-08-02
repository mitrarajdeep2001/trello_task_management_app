import express from "express";
import userRoutes from "./routes/auth";
import taskRoutes from "./routes/task";
import connectToDB from "./dbconfig";

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
// CORS Middleware
const corsMiddleware = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  // Set CORS headers
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // Allows requests from any origin
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS"); // Allowed methods
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization"); // Allowed headers

  // Handle preflight requests
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  next();
};

// Use the CORS middleware in your Express app
app.use(corsMiddleware);

const main = async () => {
  try {
    await connectToDB();
    app.use("/api", userRoutes);
    app.use("/api/task", taskRoutes);
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

main();

export default app;
