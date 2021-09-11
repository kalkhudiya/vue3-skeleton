module.exports = {
    isSignIn() {
        let user = localStorage.getItem('user');
        user = user && JSON.parse(user) || {}
        return 'id' in user;
    },
    signIn(user) {
        /* eslint-disable no-debugger */
        debugger
        localStorage.setItem('token', user.token);
        localStorage.setItem('user', JSON.stringify(user.user));
    },
    signOut() {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    },
    getToken() {
        return localStorage.getItem('token');
    }
}
