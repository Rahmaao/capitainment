// src/services/apiService.ts
import axios from 'axios';
import apiClient from './apiClient';

// Example function to fetch data from an endpoint
// src/services/apiService.ts
export const getUserManagementUsers = async () => {
  try {
    const response = await apiClient.get('/api/UserManagement/users');
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.response);
    } else {
      console.error('Unexpected error:', error);
    }
    throw error;
  }
};


// Example function to post data to an endpoint
// export const createExampleData = async (data: any) => {
//   try {
//     const response = await apiClient.post('/example-endpoint', data);
//     return response.data;
//   } catch (error) {
//     console.error('Error creating example data:', error);
//     throw error;
//   }
// };
