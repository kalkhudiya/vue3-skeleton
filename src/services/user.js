import api from "../utill/api";

export default class User {
    constructor() {
        this.apiService = new api();
    }
    async signIn(body) {
        return await this.apiService.doApiCall("post", "/user/signin", body);
    }
}
