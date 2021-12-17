async function editFormHandler(event) {
  event.preventDefault();

  const postTitle = 'input[name="post-title"]';
  const title = document.querySelector(postTitle).value.trim();
  // Index id of post is usually located at the end of the URL, hence why we do length - 1
  const index_id = window.location.toString().split('/').length - 1;
  const id = window.location.toString().split('/')[index_id];
  const postsAPI = `/api/posts/${id}`;

  const response = await fetch(postsAPI, {
    method: 'PUT',
    body: JSON.stringify({
      title
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/dashboard/');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);
