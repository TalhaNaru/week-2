# week-2

# user-insights-cli

A strict TypeScript command-line tool that fetches users, posts, and todos from
JSONPlaceholder (https://jsonplaceholder.typicode.com) and prints a per-user
report followed by summary statistics.

## Requirements

- Node.js 18 or newer

## Setup

```bash
git clone https://github.com/TalhaNaru/week-2.git
cd week-2
npm install
```

## Run

```bash
npm start
npm start -- --min-posts 5
```

`--min-posts` shows only users with at least that many posts. It defaults to 0.
A non-numeric value prints an error and exits with code 1.

## Scripts

- `npm run typecheck`: runs the TypeScript compiler with no emit (strict mode)
- `npm run lint`: runs ESLint
- `npm run format:check`: checks Prettier formatting

## Error handling

If the API can't be reached, the script prints a friendly message and exits with code 1.
