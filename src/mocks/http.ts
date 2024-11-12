import { createMiddleware } from "@mswjs/http-middleware";
import cors from "cors";
import express from "express";

import { handlers } from "./handler";

const app = express();
const port = 9090;

app.use(
  cors({
    origin: `${process.env.NEXT_PUBLIC_BASE_URL}`,
    optionsSuccessStatus: 200,
    credentials: true,
  })
);

app.use(express.json());
app.use(createMiddleware(...handlers));
// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Mock server is running on port: ${port}`));
