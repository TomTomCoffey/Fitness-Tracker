import { reactive } from "vue";
import user from "../data/session.json";

 const session = reactive({
     user: null as User | null,
 })

 




 interface User {
     id?: number;
     name: string;
     email?: string;
     photo?: string;
     token?: string;
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

    