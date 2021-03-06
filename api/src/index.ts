import express from "express";
import cors from "cors";
import routes from "./routes";
import run from "./db";
import morgan from "morgan";

import { PORT, NODE_ENV } from "./config";

const app = express();

if (NODE_ENV !== "production") {
  console.log("[Server]: Development");
  app.use(morgan("dev"));
}

app.use(cors());
app.use(routes);

run({ reload: false });

app.listen(PORT, () =>
  console.log(`[server]: Server is running at port ${PORT}`)
);
