import { http } from './config'

export default {
    fetchPokemons:()=> {
        return http.get('pokemon')
    }
}