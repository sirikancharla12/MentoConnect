import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const AuthService = {
  register: async (userData : any) => {
    return axios.post(`${API_URL}/auth/register`, userData);
  },

  login: async (email:string, password:string) => {
    const response = await axios.post(`${API_URL}/auth/login`, { email, password });
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
    }
    return response.data;
  },

  logout: () => {
    localStorage.removeItem('token');
  },

  getCurrentUser: async () => {
    return axios.get(`${API_URL}/users/profile`);
  },

  updateProfile: async (profileData:any) => {
    return axios.put(`${API_URL}/users/profile`, profileData);
  },

  updateMentorAvailability: async (availability:any) => {
    return axios.put(`${API_URL}/users/mentors/availability`, { availability });
  },

  updateMentorRate: async (hourlyRate:any) => {
    return axios.put(`${API_URL}/users/mentors/rate`, { hourlyRate });
  }
};

export default AuthService;