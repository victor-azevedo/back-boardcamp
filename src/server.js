import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dayjs from "dayjs";
import chalk from "chalk";

import categoriesRoutes from "./routers/categories.routes.js";
import customersRoutes from "./routers/customers.routes.js";
import gamesRoutes from "./routers/games.routes.js";
import rentalsRoutes from "./routers/rentals.routes.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use(categoriesRoutes);
app.use(customersRoutes);
app.use(gamesRoutes);
app.use(rentalsRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(
    chalk.bold.cyan(
      `${dayjs().format("YYYY-MM-DD HH:mm:ss")} [Listening ON] Port: ${PORT}`
    )
  );
});
