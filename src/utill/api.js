import axios from "axios";
import config from "../config";
import { getToken } from "../utill/authGuard";

export default class Api {
    async doApiCall(method = "get", path = "", data = {}) {
        try {
            if (!path || path === "") {
                throw "Invalid path";
            }
            return await axios({
                method,
                url: config.apiURL + path,
                data,
                config: {
                    headers: this.getHeaders()
                }
            });
        } catch (error) {
            console.error(error)
            throw error;
        }
    }

    getHeaders() {
        const headers = {};
        const token = getToken();
        if (token) {
            headers.Authorization = `Bearer ${token}`;
        }
        return headers;
    }
}
