import axios from 'axios';
import AuthService from './AuthService';

const BASE_URL = "https://e-wallet-system.herokuapp.com";

class ClientService {
  newAccount(data) {
    return axios.post(`${BASE_URL}/register`, data);
  }

  loginAccount(data) {
    return axios.post(`${BASE_URL}/login`, data);
  }
  newPin(data) {
    return axios.post(`${BASE_URL}/wallet/set-pin`, data, {
      headers: AuthService(),
    });
  }
  withdraw(data) {
    return axios.post(`${BASE_URL}/wallet/withdraw`, data, {
      headers: AuthService(),
    });
  }
   transfer(data) {
    return axios.post(`${BASE_URL}/wallet/transfer`, data, {
      headers: AuthService(),
    });
  }
  deposit(data) {
    return axios.post(`${BASE_URL}/wallet/fund`, data, {
      headers: AuthService(),
    });
  }

  profileDetails() {
    return axios.get(`${BASE_URL}/auth/profile`, {
      headers: AuthService(),
    });
  }
  balance() {
    return axios.get(`${BASE_URL}/wallet/balance`, {
      headers: AuthService(),
    });
  }
  transactions(params) {
    return axios.get(`${BASE_URL}/transactions${params}`, {
      headers: AuthService(),
    });
  }
  banks() {
    return axios.get(`${BASE_URL}/wallet/banks`, {
      headers: AuthService(),
    });
  }
  verify(params) {
    return axios.get(`${BASE_URL}/wallet/verify${params}`, {
      headers: AuthService(),
    });
  }
}

export default new ClientService();
