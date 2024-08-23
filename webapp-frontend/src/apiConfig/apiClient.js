import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:8080/api/v1',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  
apiClient.interceptors.response.use(
  response => response,
  error => {
    console.error('API call failed:', error);
    // Handle specific error cases
    if (error.response.status === 401) {
      console.error('Unauthorized');
      alert("Unauthorized")
    } else if (error.response.status === 404) {
      console.error('Not found');
      alert(" Not found")
    }
    return Promise.reject(error);
  }
);

export default apiClient;
  