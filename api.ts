import type { ApiPost, ApiTodo, ApiUser } from "./types";

const BASE_URL = "https://jsonplaceholder.typicode.com";

const getJson = async (path: string): Promise<unknown> => {
  const response = await fetch(`${BASE_URL}${path}`);
  if (!response.ok) {
    throw new Error(`Request to ${path} failed with status ${response.status}`);
  }
  return response.json();
};

const asArray = <T>(data: unknown): T[] => {
  if (!Array.isArray(data)) {
    throw new Error("Expected the API to return a list");
  }
  return data as T[];
};

export const fetchAll = async (): Promise<{
  users: ApiUser[];
  posts: ApiPost[];
  todos: ApiTodo[];
}> => {
  const [users, posts, todos] = await Promise.all([
    getJson("/users"),
    getJson("/posts"),
    getJson("/todos"),
  ]);
  return {
    users: asArray<ApiUser>(users),
    posts: asArray<ApiPost>(posts),
    todos: asArray<ApiTodo>(todos),
  };
};