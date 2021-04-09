import { http } from './config'

export default {
    fetchPokemons:()=> {
<<<<<<< HEAD
        return http.get('pokemon/?limit=5')
=======
        return http.get('pokemon')
>>>>>>> 3577e02... add: creation of the fetchPokemons method that will get the api data
    }
}