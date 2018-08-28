import 'whatwg-fetch';

export function getUsers() {
  return doGet('users');
}

function doGet(url) {
  // using node 'fetch' library.
  return fetch(url).then(onSuccess, onError);
}

function onSuccess(response){
  return response.json();
}

function onError(error) {
  console.log(error); // eslint-disable-line no-console
}
