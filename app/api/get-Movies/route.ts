import { error } from "console"
import {MOVIE_API_KEY, MOVIE_BASE_URL} from "@/app/config";


export async function GET(){
    if (!MOVIE_BASE_URL){
        return new Response ("Movie base url not found", {
         status:404,   
        });
    }

    if (!MOVIE_API_KEY){
        return new Response ("Movie api token not found", {
         status:404,   
        });
    }
    try(

    const request = await fetch('MOVIE_BASE_URL', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ${MOVIE_API_KEY'},
    },
})

    const response = await fetch('MOVIE_BASE_URL', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ${MOVIE_API_KEY}',
    },
})



}catch(error: any){
        return new Response(error, {
            status: 500,
        }),
    }   
}