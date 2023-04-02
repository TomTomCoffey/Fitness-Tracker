const API_URL = 'http://localhost:3000/api/v1/';

export async function rest(url: string){
    const res = await fetch(url);
    return await res.json();
}

export function api(url: string){
    return rest(API_URL + url);
}


export type DataEnvelope<T> = {
    data: T,
    isSuccess: boolean,
    error?: string,
}

export type DataListEnvelope<T> = DataEnvelope<T[]> & {
    total: number,
}