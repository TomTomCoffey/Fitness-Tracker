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
     friends?: User[];
     prs: number;
   
     
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

    export function isLoggedIn() {
        return !!session.user;
    }

    export function isAdmin() {
        return session.user?.isAdmin;
    }

    export function useWorkout() {
        return session.user?.workouts;
    }


    export function addWorkout(workout: Workout) {
        session.user?.workouts.push(workout);
    }

    export function removeWorkout(workout: Workout) {
        const index = session.user?.workouts.indexOf(workout);
        if (index !== undefined) {
            session.user?.workouts.splice(index, 1);
        }
    }

    export function updateWorkout(workout: Workout) {
        const index = session.user?.workouts.indexOf(workout);
        if (index !== undefined) {
            session.user?.workouts.splice(index, 1, workout);
        }
    }

    export function totalWeight() {
        let total = 0;
        for (const workout of session.user?.workouts || []) {
            total += workout.weight;
        }
        return total;
    }

    export function totalWorkouts() {
        return session.user?.workouts.length;
    }

    export function totalWorkoutsThisWeek() {
        
        return 5; ////This is a placeholder

    }
        

    export function addFriends(friend: User) {
        session.user?.friends?.push(friend);
    }



  
    

    