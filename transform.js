                                    // // Week-1 Exercise

export const buildRecords = (users, posts, todos) =>
  users.map(({ id, name, email, address }) => {
    const userTodos = todos.filter((t) => t.userId === id);
    const completedTodos = userTodos.filter((t) => t.completed).length;

    return {
      name,
      email,
      city: address?.city ?? "Unknown",
      postCount: posts.filter((p) => p.userId === id).length,
      completedTodos,
      openTodos: userTodos.length - completedTodos,
    };
  });

export const sortRecords = (records) =>
  [...records].sort(
    (a, b) => b.postCount - a.postCount || a.name.localeCompare(b.name)
  );

export const summarize = (records) => {
  const totalUsers = records.length;
  const totalPosts = records.reduce((sum, r) => sum + r.postCount, 0);
  const topCompleter = records.reduce(
    (best, r) => (best === null || r.completedTodos > best.completedTodos ? r : best),
    null
  );

  return {
    totalUsers,
    totalPosts,
    averagePosts: totalUsers ? totalPosts / totalUsers : 0,
    topCompleter: topCompleter?.name ?? "N/A",
  };
};