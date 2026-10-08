const BASE_URL = "https://jsonplaceholder.typicode.com";

const getJson = async (path) => {
  const response = await fetch(`${BASE_URL}${path}`);
  if (!response.ok) {
    throw new Error(`Request to ${path} failed with status ${response.status}`);
  }
  return response.json();
};

export const fetchAll = async () => {
  const [users, posts, todos] = await Promise.all([
    getJson("/users"),
    getJson("/posts"),
    getJson("/todos"),
  ]);
  return { users, posts, todos };
};