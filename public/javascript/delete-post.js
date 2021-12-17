async function deleteFormHandler(e) {
  e.preventDefault();

  // Index id of post is usually located at the end of the URL, hence why we do length - 1
  const URL = window.location.toString();
  const index_id = URL.split('/').length - 1;
  const post_id = URL.split('/')[index_id];
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

const deleteBtn = '.delete-post-btn';
document.querySelector(deleteBtn).addEventListener('click', deleteFormHandler);
