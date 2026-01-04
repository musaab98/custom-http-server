import express, { Request, Response } from "express";

const app = express();
const PORT = 8080;

// Serve static files under /app (files located in ./src/app)
app.use("/app", express.static("./src/app"));

// Readiness endpoint
function handlerReadiness(_req: Request, res: Response) {
  res.set("Content-Type", "text/plain; charset=utf-8");
  res.send("OK");
}

app.all("/healthz", handlerReadiness);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});