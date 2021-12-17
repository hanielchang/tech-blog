async function deleteFormHandler(e) {
  e.preventDefault();

  // Index id of post is usually located at the end of the URL, hence why we do length - 1
  const index_id = window.location.toString().split('/').length - 1;
  const post_id = window.location.toString().split('/')[index_id];
  const postsAPI = `/api/posts/${post_id}`;

  const response = await fetch(postsAPI, {
    method: 'DELETE'
  });

  if (response.ok) {
    document.location.replace('/dashboard/');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);
