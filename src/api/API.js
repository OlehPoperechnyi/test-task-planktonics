import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'a32cf63b-7c81-47f7-9f45-73e722d1805a'
    }
});

export const authAPI = {
    me() {
        return instance.get('auth/me').then(response => response.data);
    },
    login(email, password, rememberMe = false) {
        return instance.post(`/auth/login`, {email, password, rememberMe})
            .then(response => response.data);
    },
    logout() {
        return instance.delete(`/auth/login`)
            .then(response => response.data);
    }
}