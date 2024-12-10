import { JwtPayload, jwtDecode } from 'jwt-decode';

class AuthService {
  getProfile() {
    // TODO: return the decoded token
    const token = this.getToken();
    if (token) {
      return jwtDecode<JwtPayload>(token);
    } else {
      return null;
    }
  }

  loggedIn() {
    // TODO: return a value that indicates if the user is logged in
    const token = this.getToken();
    return token;
  }
  
  isTokenExpired(token: string) {
    // TODO: return a value that indicates if the token is expired
    try {
      const decoded: JwtPayload = jwtDecode(token);
      if (decoded.exp && decoded.exp < Date.now() / 1000) { // date.now() returns milliseconds, so divide by 1000 to get seconds
        return true;
      } else {
      return false;
      }
    } catch (err) {
      return false;
    }
    
  }

  getToken(): string {
    // TODO: return the token
    const loggedInUser = localStorage.getItem('id_token') || '';
    return loggedInUser;
  }

  login(idToken: string) {
    // TODO: set the token to localStorage
    localStorage.setItem('id_token', idToken);
    // TODO: redirect to the home page
    window.location.assign('/');
  }

  logout() {
    // TODO: remove the token from localStorage
    localStorage.removeItem('id_token');
    // TODO: redirect to the login page
    // changed to home page
    window.location.assign('/');
  }
}

export default new AuthService();
