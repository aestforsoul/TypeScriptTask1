const getPost = document.querySelector(".posts");

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

async function fetchApi<ResultType>(path: string): Promise<ResultType> {
  const response = await fetch(`https://jsonplaceholder.typicode.com${path}`);
  return response.json();
}

await fetchApi<Post[]>("/posts").then((list) =>
  list.forEach((post) => {
    if (getPost) {
      getPost.innerHTML += `<div class="post-body">
      <div class="user-id">${post.userId}</div>
      <div class="id">${post.id}</div>
      <div class="title">${post.title}</div>
      <div class="body">${post.body}</div>
      </div>`;
    }
  })
);

export {};
