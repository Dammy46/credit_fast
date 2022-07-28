export default function authCheckService() {

  if (localStorage.getItem('jwt')) {
    return true;
  } else {
    return false;
  }
}
