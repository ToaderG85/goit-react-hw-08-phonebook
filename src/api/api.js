import axios from "axios";

const BASE_URL = "https://64f8925f824680fd217fc97c.mockapi.io/";

const api = axios.create({
  baseURL: BASE_URL,
});

const resourceApi = (resource) => {
  return {
    getAll: () => api.get(`/${resource}`),
    get: (id) => api.get(`/${resource}/${id}`),
    create: (data) => api.post(`/${resource}`, data),
    delete: (id) => api.delete(`/${resource}/${id}`),
  };
};


const contactsApi = resourceApi("contacts")

export { contactsApi };