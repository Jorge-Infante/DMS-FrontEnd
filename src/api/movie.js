import {BASE_API} from "../utils/constants";

export async function getAllMoviesApi(){
    try{
        const url = `${BASE_API}/api/movie/listMovies/`
        const params = {
            method:"GET",
            headers:{
                "Content-Type" : "application/json"
            }
        };

        const response = await fetch(url, params);
        if (response.status>201){
            throw new Error("Error de credenciales")
        }

        const result = await response.json();
        return result;

    }catch(error){
        throw error;
    }
}
