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
    body: JSON.stringify(data)
  };
};

export const loginRequest = (email, password) => fetch(loginUrl, body('POST', {email, password})).then((data) => data)

export const signUpRequest = (email, password) => fetch(signUpRequest, body('POST', {email, password})).then((data) => data)

export const indexRequest = () => fetch(HOST).then((data) => data)
