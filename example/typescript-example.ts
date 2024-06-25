import dotenv from "dotenv-flow";

dotenv.config();

import quantconnect from "../dist";

const api = quantconnect({
  userId: process.env.USER_ID || '',
  token: process.env.TOKEN || '',
});

(async function main() {
  // Get all live running algorithms
  const foo = await api.live.list({ status: 'Running' });
  console.log({ foo })
  // // Get the first algo deployId and projectId
  // const [{ projectId, deployId }] = live;

  // // Fetch the full data on the first algorithm
  // const result = await api.live.read({ projectId, deployId });

  // console.log(result);
})();
