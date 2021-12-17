async function logout() {
  const logoutAPI = '/api/users/logout';
  const response = await fetch(logoutAPI, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' }
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('#logout').addEventListener('click', logout);
