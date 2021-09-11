let config = {
    development: {
        apiURL: "http://localhost:4044/api"
    },
    staging: {
        apiURL: "http://localhost:9002/api"
    },
    production: {
        apiURL: "http://localhost:9002/api"
    }
};

export default config[process.env.NODE_ENV || 'development'];
