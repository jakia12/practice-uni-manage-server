import dotenv from "dotenv";

import path from "path";

const envPath = path.join(process.cwd(), ".env");

dotenv.config({ path: envPath });

export default {
  port: process.env.PORT,
  env: process.env.NODE_DEV,
  mongo_uri: process.env.MONGO_URI,
};
