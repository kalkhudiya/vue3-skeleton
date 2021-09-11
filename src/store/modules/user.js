module.exports = {
    state: () => ({
        username: 'Viren K'
    }),
    mutations: {
        
    },
    getters: {
        getName(state) {
            return state.username;
        },
        getNameForIcon(state) {
            return state.username.split(' ').reduce((n, s) => {
                return n += s[0]
            }, '');
        }
    }
}
