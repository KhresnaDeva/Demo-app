export const redirectToAuthorization = () => {
    // Ganti dengan URL halaman API authorization yang sesuai
    const authorizationURL = "https://api-oss.domain-dev.site/authorize?client_id=64cca6634bb48b608d3bdf31&redirect_uri=http%3A%2F%2Flocalhost%3A8081%2Fnotes&audience=http%";
  
    // Redirect pengguna ke halaman authorization
    window.location.href = authorizationURL;
  };