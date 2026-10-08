import { groupBy } from "./groupBy";
import type { ApiPost, ApiTodo, ApiUser, UserReport } from "./types";

export interface Summary {
  totalUsers: number;
  totalPosts: number;
  averagePosts: number;
  topCompleter: string;
}

export const buildReports = (
  users: ApiUser[],
  posts: ApiPost[],
  todos: ApiTodo[],
): UserReport[] => {
  const postsByUser = groupBy(posts, (p) => String(p.userId));
  const todosByUser = groupBy(todos, (t) => String(t.userId));

  return users.map((user) => {
    const userTodos = todosByUser[String(user.id)] ?? [];
    const completedTodos = userTodos.filter((t) => t.completed).length;

    return {
      name: user.name,
      email: user.email,
      city: user.address?.city ?? "Unknown",
      postCount: (postsByUser[String(user.id)] ?? []).length,
      completedTodos,
      openTodos: userTodos.length - completedTodos,
    };
  });
};

export const sortReports = (reports: UserReport[]): UserReport[] =>
  [...reports].sort(
    (a, b) => b.postCount - a.postCount || a.name.localeCompare(b.name),
  );

export const filterByMinPosts = (
  reports: UserReport[],
  minPosts: number,
): UserReport[] => reports.filter((r) => r.postCount >= minPosts);

export const summarize = (reports: UserReport[]): Summary => {
  const totalUsers = reports.length;
  const totalPosts = reports.reduce((sum, r) => sum + r.postCount, 0);
  const top = reports.reduce<UserReport | null>(
    (best, r) =>
      best === null || r.completedTodos > best.completedTodos ? r : best,
    null,
  );

  return {
    totalUsers,
    totalPosts,
    averagePosts: totalUsers ? totalPosts / totalUsers : 0,
    topCompleter: top?.name ?? "N/A",
  };
};