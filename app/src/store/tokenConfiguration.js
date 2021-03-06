export default (token) => {
  const config = {
    withCredentials: true,
    headers: {
      'Content-type': 'application/json'
    }
  };

  if (token) {
    config.headers['x-auth-token'] = token;
  }

  return config;
}
