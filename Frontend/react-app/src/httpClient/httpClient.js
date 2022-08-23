import {useLocation} from "react-router-dom";
import axios from "axios";
import {CONFIG} from "./config";

const getHeader = () => {
    const accessToken = localStorage.getItem('token');
    const authHeader = accessToken ? {Authorization: `Bearer ${accessToken}`, "Content-Type":"application/json"}
        : {"Content-Type":"application/json"};
    return authHeader;
}

const HandleError = (error) => {
    const samepleLocation = useLocation();
    const current = samepleLocation.pathname;
    if (error?.response?.status === 401) {
        localStorage.setItem("token", "");
        if (!(current === "/login")) {
            window.location.href = "/login"
        }
    }
    throw error;
}

const get = (endPoint, options = {}) =>
    axios.get(CONFIG.baseURL + endPoint,
        { headers: getHeader(), ...options}
).catch(HandleError);

const post = (endPoint, data = {}) =>
    axios.post(CONFIG.baseURL + endPoint, JSON.stringify(data), {headers: getHeader()})
        .catch(HandleError);
const put = (endPoint, data = {}) =>
    axios.put(CONFIG.baseURL + endPoint, JSON.stringify(data), {headers: getHeader()})
        .catch(HandleError);
const deleteAPI = (endPoint) => {
    return axios.delete(CONFIG.baseURL + endPoint, {headers: getHeader()}).catch(HandleError);
}


export default {
    get,
    post,
    put,
    deleteAPI
}