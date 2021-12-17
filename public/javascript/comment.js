async function commentFormHandler(event) {
  event.preventDefault();

  const commentBody = 'textarea[name="comment-body"]';
  const comment_text = document.querySelector(commentBody).value.trim();
  // Index id of post is usually located at the end of the URL, hence why we do length - 1
  const URL = window.location.toString();
  const index_id = URL.split('/').length - 1;
  const post_id = URL.split('/')[index_id];
  const commentsAPI = '/api/comments';

  if (comment_text) {
    const response = await fetch(commentsAPI, {
      method: 'POST',
      body: JSON.stringify({
        post_id,
        comment_text
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
}

const commentBtn = '.comment-form';
document.querySelector(commentBtn).addEventListener('submit', commentFormHandler);
