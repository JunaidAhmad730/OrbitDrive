import app from "./app.js";
import { env } from "./config/env.js";
import { API } from "./config/constants.js";

app.listen(env.PORT, () => {
  console.clear();

  console.log(`
========================================

🚀 ${API.NAME}

Environment : ${env.NODE_ENV}
Version     : ${API.VERSION}
Server      : http://localhost:${env.PORT}

========================================
`);
});
