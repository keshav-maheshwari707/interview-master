import axios from "axios";

const api = axios.create({
  baseURL: "https://interview-master-i1s.onrender.com",
  withCredentials: true
});

export async function register({ username, email, password }) {
  try {
    const response = await api.post("/api/auth/register", {
      username,
      email,
      password,
      }
    )
    return response.data
  } catch (error) {
    console.error("Error during registration:", error);
    throw error;
  }
}


export async function login({ email, password }) {
    try {
        const response = await api.post("/api/auth/login", {
            email,
            password,
        }
        );
        return response.data;
    } catch (error) {
        console.error("Error during login:", error);
      throw error;
    }
}

export async function logout() {
    try {
        const response = await api.get("/api/auth/logout");

        return response.data;
    } catch (error) {
        console.error("Error during logout:", error);
    }
}

export async function getMe() {
    try {
        const response = await api.get("/api/auth/get-me");

        return response.data;
    } catch (error) {
        console.error("Error fetching user data:", error);
      throw error;
    }
}
