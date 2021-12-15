async function deleteFormHandler(e) {
  e.preventDefault();

  const index_id = window.location.toString().split('/').length - 1;
  const post_id = window.location.toString().split('/')[index_id];

  const response = await fetch(`/api/posts/${post_id}`, {
    method: 'DELETE'
  });

  if (response.ok) {
    document.location.replace('/dashboard/');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);
