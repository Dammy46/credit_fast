export default function AuthService() {
  //   const cookie = new Cookies();
  const jwt = localStorage.getItem('jwt');

  if (jwt) {
    return {
      Authorization: 'Bearer ' + jwt,
    };
  } else {
    return {};
  }
}
