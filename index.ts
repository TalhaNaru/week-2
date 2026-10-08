import { fetchAll } from "./api";
import { printReport } from "./report";
import {
  buildReports,
  filterByMinPosts,
  sortReports,
  summarize,
} from "./transform";

const FLAG = "--min-posts";

const parseMinPosts = (args: string[]): number => {
  const index = args.findIndex((a) => a === FLAG || a.startsWith(`${FLAG}=`));
  if (index === -1) {
    return 0;
  }

  const arg = args[index] ?? "";
  const raw = arg.startsWith(`${FLAG}=`)
    ? arg.slice(FLAG.length + 1)
    : args[index + 1];
  const value = Number(raw);

  if (
    raw === undefined ||
    raw.trim() === "" ||
    !Number.isFinite(value) ||
    value < 0
  ) {
    throw new Error(
      `${FLAG} must be a non-negative number, got "${raw ?? ""}"`,
    );
  }
  return value;
};

const errorMessage = (error: unknown): string =>
  error instanceof Error ? error.message : String(error);

const main = async (): Promise<void> => {
  let minPosts = 0;
  try {
    minPosts = parseMinPosts(process.argv.slice(2));
  } catch (error) {
    console.error(`Invalid input: ${errorMessage(error)}`);
    process.exit(1);
  }

  try {
    const { users, posts, todos } = await fetchAll();
    const reports = filterByMinPosts(
      sortReports(buildReports(users, posts, todos)),
      minPosts,
    );
    printReport(reports, summarize(reports));
  } catch (error) {
    console.error(
      "Sorry, we couldn't load the data. Please check your connection and try again.",
    );
    console.error(`Details: ${errorMessage(error)}`);
    process.exit(1);
  }
};

void main();
