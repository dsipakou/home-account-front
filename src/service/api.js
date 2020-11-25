const IP_ADDRESS = '127.0.0.1';
const PORT = '1010';
const HOST = `http://${IP_ADDRESS}:${PORT}`

const registerUrl = `${HOST}/api/users/register`;
const loginUrl = `${HOST}/api/users/login`;
const logoutUrl = `${HOST}/api/users/logout`;

const body = (method, data) => {
  return {
    method: method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
    credentials: 'include',
    redirect: 'follow'
  };
};

export const loginRequest = async (email, password) => {
  const response = await fetch(loginUrl, body('POST', {email, password}));
  const data = await response.json();
  return data;
}

export const signUpRequest = async (username, email, password) => {
  const response = await fetch(registerUrl, body('POST', {username, email, password}));
  const data = await response.json();
  return data;
}

export const indexRequest = async () => {
  const response = await fetch(HOST, {method: 'GET'});
  const data = await response.json();
  return data;
}

