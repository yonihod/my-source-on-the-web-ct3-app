// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

import { dataRouter } from "./api";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("data.", dataRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
