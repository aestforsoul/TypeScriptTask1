const getPost = document.querySelector(".posts");
async function fetchApi(path) {
    const response = await fetch(`https://jsonplaceholder.typicode.com${path}`);
    return response.json();
}
await fetchApi("/posts").then((list) => list.forEach((post) => {
    if (getPost) {
        getPost.innerHTML += `<div class="post-body">
      <div class="user-id">${post.userId}</div>
      <div class="id">${post.id}</div>
      <div class="title">${post.title}</div>
      <div class="body">${post.body}</div>
      </div>`;
    }
}));
export {};
