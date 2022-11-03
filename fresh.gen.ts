// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/[drink]/index.tsx";
import * as $1 from "./routes/_app.tsx";
import * as $2 from "./routes/brew.tsx";
import * as $3 from "./routes/index.tsx";
import * as $$0 from "./islands/BrewAnimation.tsx";
import * as $$1 from "./islands/Calculator.tsx";
import * as $$2 from "./islands/Navigator.tsx";
import * as $$3 from "./islands/Selector.tsx";

const manifest = {
  routes: {
    "./routes/[drink]/index.tsx": $0,
    "./routes/_app.tsx": $1,
    "./routes/brew.tsx": $2,
    "./routes/index.tsx": $3,
  },
  islands: {
    "./islands/BrewAnimation.tsx": $$0,
    "./islands/Calculator.tsx": $$1,
    "./islands/Navigator.tsx": $$2,
    "./islands/Selector.tsx": $$3,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
