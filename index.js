import express from "express";
import path from "path";

const port = process.env.PORT || 3000;
const app = express();

app.use(express.static("dist"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(process.cwd(), "dist", "index.html"));
});

app.listen(port, () => {
  console.log("server is running on port", port);
});
