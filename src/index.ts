import express from "express";
import estimateRoute from "./routes/estimate";
import imageRoute from "./routes/image";

const app = express();
app.use(express.json());

app.use("/estimate", estimateRoute);
app.use("/estimate/image", imageRoute);

app.listen(3000, () => {
  console.log("🚀 Server running on http://localhost:3000");
});
