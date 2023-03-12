import { reactive } from "vue";
import user from "../data/session.json";
import type { Workout } from "./workouts";


 const session = reactive({
     user: null as User | null,
 })

 

 

 




 interface User {
     id?: number;
     name: string;
     email?: string;
     photo?: string;
     token?: string;
     isAdmin?: boolean;
     workouts: Workout[];
     
 }


 export function useSession() {
     return session;
 }

 export function login(number: number) {
         const User = user.find((user) => user.id === number);
            if (User) {
                session.user = User;
            }
        
    }

    export function logout() {
        session.user = null;
    }

  
    

    