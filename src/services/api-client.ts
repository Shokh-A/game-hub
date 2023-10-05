import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'f391671543774f1d8fa03a455d6a9d2d'
    }
})