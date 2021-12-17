async function newFormHandler(event) {
  event.preventDefault();

  const postTitle = 'input[name="post-title"]';
  const postUrl = 'input[name="post-url"]';
  const title = document.querySelector(postTitle).value;
  const post_url = document.querySelector(postUrl).value;
  const postsAPI = `/api/posts`;

  const response = await fetch(postsAPI, {
    method: 'POST',
    body: JSON.stringify({
      title,
      post_url
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
