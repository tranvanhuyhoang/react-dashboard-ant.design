import * as callApi from '../utils/apiHelper';
import api from '../commons/environment';

export const getListStudents = () => {
  const url = api.getListStudents;
  return callApi.get(url);
};

export const createStudent = (data) => {
  const url = api.createStudent;
  return callApi.post(url, data);
};

// export const deleteProduct = (idProduct) => {
//   const url = api.deleteProduct+idProduct;
//   return callApi.del(url);
// };