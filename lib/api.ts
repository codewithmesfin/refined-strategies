import Request from "axios";


const API_ROOT = "https://api.mevinai.com"


const api = {
    create(data: any, path: any) {
       return Request.post(`${API_ROOT}${path}`, data,);
    },
};
export default api;