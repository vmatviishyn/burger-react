import axios from 'axios';



const instance = axios.create({
    baseURL: 'https://burger-react-f2dcc.firebaseio.com/'
});

export default instance;