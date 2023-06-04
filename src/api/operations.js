import axios from "axios";
axios.defaults.baseURL = "https://647afc1ed2e5b6101db0b527.mockapi.io/api/v1";

export const getAll = async ({ page, perpage, filter }) => {
  const parametrs = { params: {} };

  if (filter !== null) parametrs.params.isFollowing = filter;
  const response = await axios.get("/users", parametrs);
  parametrs.params.page = page || 1;
  parametrs.params.limit = perpage || 6;
  const { data } = await axios.get("/users", parametrs);
  return await { data, page, total: response.data.length };
};

export const update = async ({ id, followers, isFollowing }) => {
  const { data } = await axios.put(`/users/${id}`, { followers, isFollowing });
  return await data;
};