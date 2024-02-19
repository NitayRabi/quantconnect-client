import dotenv from "dotenv-flow";

dotenv.config();

import quantconnect from "../dist";

const api = quantconnect({
  userId: process.env.USER_ID || '',
  token: process.env.TOKEN || '',
});

(async function main() {
  // Get all live running algorithms
  const { live } = await api.live.read({ status: "Running" });

  // Get the first algo deployId and projectId
  const [{ projectId, deployId }] = live;

  // Fetch the full data on the first algorithm
  const result = await api.live.orders({ projectId, start: 0, end: Date().now() / 1000 });

  console.log(JSON.stringify({ result }, null, 2));
})();
