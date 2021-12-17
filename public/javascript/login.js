async function startTimer() {
  const twoMinutes = 120000;
  const timeOut = setTimeout(logOutUser, twoMinutes);
  clearTimeout(timeOut);
}

async function logOutUser() {
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

async function loginFormHandler(event) {

  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();
  const loginAPI = '/api/users/login';

  if (email && password) {
    const response = await fetch(loginAPI, {
      method: 'post',
      body: JSON.stringify({
        email,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });
    
    if (response.ok) {
      document.location.replace('/dashboard/');
      startTimer();
    } else {
      alert("Invalid password or username!");
    }
  }

}

async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  const usersAPI = '/api/users';

  if (username && email && password) {
    const response = await fetch(usersAPI, {
      method: 'post',
      body: JSON.stringify({
        username,
        email,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert("Invalid entries!");
    }
  }
}

const loginBtn = '.login-form';
const signupBtn = '.signup-form';
document.querySelector(loginBtn).addEventListener('submit', loginFormHandler);
document.querySelector(signupBtn).addEventListener('submit', signupFormHandler);
