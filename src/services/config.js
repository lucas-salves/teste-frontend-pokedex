import axios from 'axios'

export const http = axios.create({ 
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    baseURL: 'https://pokeapi.co/api/v2/'
=======
    baseURL: 'https://pokeapi.co/api/v2/pokemon/'
>>>>>>> 12d7718... add: creation of the config.js file that will export a new axios instance
=======
    baseURL: 'https://pokeapi.co/api/v2/pokemon/'
>>>>>>> 12d7718... add: creation of the config.js file that will export a new axios instance
=======
    baseURL: 'https://pokeapi.co/api/v2/'
>>>>>>> 92b2521... fix: fixing of the pokeapi BASEURL
 })