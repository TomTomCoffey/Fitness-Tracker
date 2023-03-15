import { computed, reactive } from "vue";
import user from "../data/session.json";
import type { Workout } from "./workouts";
import type { Cardio } from "./cardio";



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
     workouts: Workout[];  ///might make a 2d array of workouts to make statistics easier
     friends?: User[];
     prs: number;
     cardio: Cardio[];

     
     
     
   
     
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

    export function useWorkout() {
        return session.user?.workouts;
    }

    export function useCardio() {
        return session.user?.cardio;
    }

    export function findUser(id: number) {
        return session.user?.friends?.find((user) => user.id === id);
    }


    export function addWorkout(workout: Workout) {
        session.user?.workouts.push(workout);
    }

    export function addWorkout1(workout: string, weight: number) {
        session.user?.workouts.push({workout, weight});
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

    export const totalWorkouts = computed(() => session.user?.workouts.length);

    export const totalWeight = computed(() =>  session.user?.workouts.reduce((total, workout) => total + workout.weight, 0));


   

    export const averagePace = computed(() => session.user?.cardio.reduce((total, cardio) => total + cardio.durationMins / cardio.distanceMiles, 0));

    export const caloriesBurned = computed(() => session.user?.cardio.reduce((total, cardio) => total + cardio.durationMins * 8.5, 0));

    export const totalDistance = computed(() => session.user?.cardio.reduce((total, cardio) => total + cardio.distanceMiles, 0));

    export const totalDuration = computed(() => session.user?.cardio.reduce((total, cardio) => total + cardio.durationMins, 0));

    export const feetPerMinute = computed(() => session.user?.cardio.reduce((total, cardio) => total + cardio.distanceMiles * 5280 / cardio.durationMins, 0));

    

    