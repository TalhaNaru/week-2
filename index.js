                                       // // Week-1 Exercise

import { fetchAll } from "./api.js";
import { buildRecords, sortRecords, summarize } from "./transform.js";
import { printReport } from "./report.js";

const main = async () => {
  try {
    const { users, posts, todos } = await fetchAll();
    const records = sortRecords(buildRecords(users, posts, todos));
    printReport(records, summarize(records));
  } catch (error) {
    console.error("Sorry, we couldn't load the data. Please check your connection and try again.");
    console.error(`Details: ${error.message}`);
    process.exit(1);
  }
};

main();