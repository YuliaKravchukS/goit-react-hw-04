
import axios from "axios";

const instance = axios.create({
        baseURL: "https://api.unsplash.com/",
  
})

export const fetchProductsByQuery = async (query='', page) => {

    const {data}  = await instance.get('/search/photos',{
      params: {
        page: page,
        query: query,
      client_id: 'YthA28ivciqW6bJBl8Sgjx1VPtT-tIKW3K0Fl-khB4Q',
      }
          });
          return data
  }