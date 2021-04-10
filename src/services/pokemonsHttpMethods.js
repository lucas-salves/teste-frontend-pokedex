import { http } from './config'

export default {
    fetchPokemons:()=> {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        return http.get('pokemon/?limit=5')
=======
        return http.get('pokemon')
>>>>>>> 3577e02... add: creation of the fetchPokemons method that will get the api data
=======
        return http.get('pokemon/?limit=151')
>>>>>>> 3dd4199... add: adding the limit parameter to control the number of rows returned, so that the number of lines returned is 151
=======
        return http.get('pokemon/?limit=5')
>>>>>>> 1e29da3... test: limit the number of rows of the API response to 5 to make testing easier
    }
}