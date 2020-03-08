import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: 'Client-ID JdxWV6ugK1dPZ2EGJLoj1JeYsSPmmDJIGEGVkqG5ijI'
  }
});