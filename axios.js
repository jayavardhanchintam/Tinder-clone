import axios from 'axios';


const instance = axios.create({
    baseURL: 'https://tinder-bac.herokuapp.com',
})

export default instance;