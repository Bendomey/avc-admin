import Cookies from "js-cookie";

export const BASE_URL = process.env.REACT_APP_SERVER_URL;

class Auth {
  getCipher(): string | null {
    return Cookies.get("avc-admin-cipher") || null;
  }

  setCipher(token: string): void {
    Cookies.set("avc-admin-cipher", token);
  }

  clearCipher(): void {
    Cookies.remove("avc-admin-ipher");
  }
}

export default new Auth();
