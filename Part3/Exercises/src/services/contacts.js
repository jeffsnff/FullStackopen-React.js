import axios from 'axios';
const baseURL = 'http://localhost:3001/contacts';

const getAll = () => {
  const request = axios.get(baseURL);
  return request.then(response => response.data);
}

const create = (newContact) => {
  const request = axios.post(baseURL, newContact);
  return request.then(response => response.data)
}

const deleteContact = (id) => {
  const request = axios.delete(`${baseURL}/${id}`)
  return request.then(respnse => respnse.data)
}



export default{
  getAll,
  create,
  deleteContact
}