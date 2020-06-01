import axios from "axios"


export default axios.create({
    baseURL: `http://localhost:3000`
    // headers: { 'Access-Control-Allow-Origin': '*' },
    // proxy: {
    //     host: '104.236.174.88',
    //     port: 3128
    // }
});





