import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3001/"
  });

export const DB_API = {
  peopleCNT: () => api.get("peoplecnt"),
    peopleName: (id,pw) => api.get(`peoplecnt/name?id=${id}&pw=${pw}`),
} 