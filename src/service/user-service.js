import { myAxios } from "./helper";

export const createUser = (user) => {
  return myAxios
    .post(`/users/`, user)
    .then((data) => {
      return data.data;
    })
    .catch((error) => {
      throw error.response;
    });
};
export const updateUser = (user, id) => {
  return myAxios
    .put(`/users/${id}`, user)
    .then((data) => {
      return data.data;
    })
    .catch((error) => {
      throw error.response;
    });
};
export const getUser = (id) => {
  return myAxios
    .get(`/users/${id}`)
    .then((data) => {
      return data.data;
    })
    .catch((error) => {
      throw error.response;
    });
};
export const getAllUsers = () => {
  return myAxios
    .get(`/users/`)
    .then((data) => {
      return data.data;
    })
    .catch((error) => {
      throw error.response;
    });
};
export const deleteUser = (id) => {
  return myAxios.delete(`/users/${id}`).then((data) => {
    return data.data;
  });
};
export const searchUser = (searchText) => {
  return myAxios
    .get(`/users/search/${searchText}`)
    .then((data) => {
      return data.data;
    })
    .catch((error) => {
      throw error.response;
    });
};
