import axios from 'axios';
axios.defaults.baseURL = 'https://647afc1ed2e5b6101db0b527.mockapi.io/api/v1';

export const getAll = async ({ page, perpage, filter }) => {
    // const filter = search || "";
    // const pageNumber = parseInt(page) || 1;
    // const limit = parseInt(perpage) || 6;
    // const skip = (pageNumber - 1) * limit;
    // console.log(filter, skip, limit);
    const { data }  = await axios.get(`/users?page=${page}&limit=${perpage}&followersID=${filter}`)
    // console.log(response);
    return data;
};
