export default function getBaseUrl() {
  return getQueryStringParameterByName("mock") ? 'http://localhost:3001/' : '/';
}

function getQueryStringParameterByName(name) {
  const url = window.location.href;
  const regex = new RegExp(`[?&]${name}(=([^&#]*)|(&|#|$))`);
  const results = regex.exec(url);

  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
