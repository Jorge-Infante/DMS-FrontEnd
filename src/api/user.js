import {BASE_API} from "../utils/constants";

export async function loginApi(formValues){
    try{
        const url = `${BASE_API}/api/auth/login/`
        const params = {
            method:"POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(formValues)
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

export async function getMeApi(token){
    try {
        const url= `${BASE_API}/api/auth/me/`;
        const params ={
            headers:{
                Authorization: `Bearer ${token}`
            }
        }
        const response = await fetch(url,params);
        const result = await response.json()
        return result

    } catch (error) {
        throw error;
    }

}