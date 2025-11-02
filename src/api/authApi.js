import { api } from "./axios.config.js";

export const AuthApi = {
  async register(data) {
    const res = await api.post("api/auth/register", data, {
      withCredentials: true,
    });
    return res.data;
  },

  async login(data) {
    const res = await api.post("api/auth/login", data, {
      withCredentials: true,
    });
    // Tokens are in cookies, not in JS
    return res.data; // contains { role }
  },

  async me() {
    const res = await api.get("api/auth/me", { withCredentials: true });
    return res.data; // contains { role }
  },

  async refresh() {
    const res = await api.get("api/auth/refresh", { withCredentials: true });
    return res.data;
  },

  async logout() {
    await api.post("api/auth/logout", {}, { withCredentials: true });
  },
};

export default AuthApi;
