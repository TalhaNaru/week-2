                                     // // Week-1 Exercise

const columns = [
  { label: "Name", width: 24, get: (r) => r.name },
  { label: "Email", width: 30, get: (r) => r.email },
  { label: "City", width: 16, get: (r) => r.city },
  { label: "Posts", width: 6, right: true, get: (r) => r.postCount },
  { label: "Done", width: 6, right: true, get: (r) => r.completedTodos },
  { label: "Open", width: 6, right: true, get: (r) => r.openTodos },
];

const pad = (value, { width, right }) =>
  right ? String(value).padStart(width) : String(value).padEnd(width);

const formatRow = (getValue) =>
  columns.map((col) => pad(getValue(col), col)).join(" ");

export const printReport = (records, summary) => {
  const header = formatRow((col) => col.label);
  const rows = records.map((record) => formatRow((col) => col.get(record)));

  console.log("\nUser Insights Report\n");
  console.log([header, "-".repeat(header.length), ...rows].join("\n"));

  console.log("\nSummary");
  console.log("-------");
  console.log(`Total users:            ${summary.totalUsers}`);
  console.log(`Total posts:            ${summary.totalPosts}`);
  console.log(`Average posts per user: ${summary.averagePosts.toFixed(2)}`);
  console.log(`Most completed todos:   ${summary.topCompleter}`);
};