const username = 'learn';
const password = 'password';
const apiUrl = 'http://localhost:8080';

async function fetchData(endpoint, method = 'GET', body = null) {
  const url = `${apiUrl}/api/${endpoint}`;

  const headers = {
    'Authorization': 'Basic ' + btoa(username + ':' + password),
    'Content-Type': 'application/json',
  };

  const options = {
    method,
    headers,
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  const response = await fetch(url, options);
  const data = await response.json();

  return data;
}

export { fetchData };
