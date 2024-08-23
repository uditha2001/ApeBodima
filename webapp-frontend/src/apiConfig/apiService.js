import apiClient from '../apiConfig/apiClient';

export const fetchBodimTypes = () => {
    return apiClient.get('/bodimTypes/names');
  
};
 
export const postBodimDetails = (data) => {
    return apiClient.post('/bodime-details/save/{userId}', data);
};

export const postcontactDetails = (data) => {
    return apiClient.post('/api/v1/bodimContacts/contactsSave', data);
};

export const postBodimReview = (data) => {
    return apiClient.post('//api/v1/bodimReview/reviewSave', data);
};

