import axios from "axios";
axios.defaults.baseURL = "https://647afc1ed2e5b6101db0b527.mockapi.io/api/v1";

export const getAll = async ({ page, perpage, filter, setState }) => {
  const parametrs = { params: {} };
  setState((prevState) => {
    return { ...prevState, loading: true, error: null };
  });
  try {
    if (filter !== null) parametrs.params.isFollowing = filter;
    const response = await axios.get("/users", parametrs);
    parametrs.params.page = page || 1;
    parametrs.params.limit = perpage || 6;
    const { data } = await axios.get("/users", parametrs);
    setState((prevState) => {
      return {
        ...prevState,
        users: [...prevState.users, ...data],
        pages: Math.ceil(response.data.length / perpage),
      };
    });
  } catch ({ message }) {
    setState((prevState) => {
      return { ...prevState, error: message };
    });
  } finally {
    setState((prevState) => {
      return { ...prevState, loading: false };
    });
  }
};

export const update = async ({
  id,
  followers,
  isFollowing,
  filter,
  setState,
}) => {
  setState((prevState) => {
    return { ...prevState, loading: true, error: null };
  });
  try {
    const { data } = await axios.put(`/users/${id}`, {
      followers: isFollowing ? --followers : ++followers,
      isFollowing: !isFollowing,
    });
    setState((prevState) => {
      let updatedUsers = [];
      if (filter === null) {
        updatedUsers = prevState.users.map((user) => {
          if (user.id === data.id) return data;
          return user;
        });
      } else {
        updatedUsers = prevState.users.filter((user) => user.id !== data.id);
      }
      return { ...prevState, users: updatedUsers };
    });
  } catch ({ message }) {
    setState((prevState) => {
      return { ...prevState, error: message };
    });
  } finally {
    setState((prevState) => {
      return { ...prevState, loading: false };
    });
  }
};