import { computed, reactive, ref } from "vue";
import user from "../data/session.json";
import type { Workout } from "./workouts";
import type { Cardio } from "./cardio";
import * as myFetch from "./myFetch";
import type { DataEnvelope, DataListEnvelope } from "./myFetch";

 


 const session = reactive({
     user: null as User | null,
     isLoading: false,
     messages: [] as {
         msg: string,
         type: "success" | "danger" | "warning" | "info",
     }[],
     
 })

 

  export interface User {
     id?: number;
     name: string;
     email?: string;
     photo?: string;
     password?: string;
     isAdmin?: boolean;
     workouts: Workout[];  ///might make a 2d array of workouts to make statistics easier
     friends?: User[];
     prs: number;
     cardio: Cardio[];
 
 }


 export function api(url: string, data?: any, method?: string, headers?: any) {
    session.isLoading = true;
    return myFetch.api(url, data, method, headers)
        .catch(err => {
            console.error({err});
            session.messages.push({
                msg: err.message  ?? JSON.stringify(err),
                type: "danger",
            })
        })
        .finally(() => {
            session.isLoading = false;
        })
}

export function getUsers(): Promise<DataListEnvelope<User>> {

    return api('users')

}

export function getUser(id: number): Promise<DataEnvelope<User>> {

    return api(`users/${id}`)

}



export function createUser(user: User): Promise<DataEnvelope<User>> {

    return api('users', user)
}









export function updateUser(user: User): Promise<DataEnvelope<User>> {

    return api(`user/${user.id}`, user, 'PUT')

}














       
export function addMessage(msg: string, type: "success" | "danger" | "warning" | "info") {
    console.log({msg, type});
    session.messages.push({
        msg,
        type,
    })
}

export function deleteMessage(index: number) {
    session.messages.splice(index, 1);

}






          
        
     




 export function useSession() {
     return session;
 }

    export function useUser() {
        return session.user;
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
   
    export function useWorkout() {
        return session.user?.workouts;
    }

    export function useCardio() {
        return session.user?.cardio;
    }

    export function findUser(id: number) {
        return session.user?.friends?.find((user) => user.id === id);
    }

    export function addFriend(user: User) {
        session.user?.friends?.push(user);
    }



    export function addWorkout(workout: Workout) {
        if(workout.workout !== "" && workout.weight > 0)
        {session.user?.workouts.push(workout);}
    }

    export function addWorkout1(workout: string, weight: number) {
        if(workout !== "" && weight > 0)
       { session.user?.workouts.push({workout, weight});}
    }

    export function removeWorkout(workout: Workout) {
        const index = session.user?.workouts.indexOf(workout);
        if (index !== undefined) {
            session.user?.workouts.splice(index, 1);
        }
    }
  

    export function addCardio(distanceMiles: number, durationMins: number) {

        if(distanceMiles > 0 && durationMins > 0)
       { session.user?.cardio.push({distanceMiles, durationMins});}

    }

    export function removeCardio(cardio: Cardio) {
        const index = session.user?.cardio.indexOf(cardio);
        if (index !== undefined) {
            session.user?.cardio.splice(index, 1);
        }
    }

    export function increasePRs() {
        session.user!.prs++;
    }
``  
    export function findBestBench(){
        let bestBench = 0;
        for(let i = 0; i < session.user!.workouts.length; i++){
            if(session.user?.workouts[i].workout === "Bench Press" && session.user?.workouts[i].weight > bestBench){
                bestBench = session.user?.workouts[i].weight;
            }
        }
        return bestBench;
    }
    export function findBestSquat(){
        let bestSquat = 0;
        for(let i = 0; i < session.user!.workouts.length; i++){
            if(session.user?.workouts[i].workout === "Squat" && session.user?.workouts[i].weight > bestSquat){
                bestSquat = session.user?.workouts[i].weight;
            }
        }
        return bestSquat;
    }
    export function findBestDeadlift(){
        let bestDeadlift = 0;
        for(let i = 0; i < session.user!.workouts.length; i++){
            if(session.user?.workouts[i].workout === "Deadlift" && session.user?.workouts[i].weight > bestDeadlift){
                bestDeadlift = session.user?.workouts[i].weight;
            }
        }
        return bestDeadlift;
    }
    
   

    export const totalWorkouts = computed(() => session.user?.workouts.length);

    export const totalWeight = computed(() =>  session.user?.workouts.reduce((total, workout) => total + workout.weight, 0));

    export const thisWeeksWeightLifted = computed(() => session.user?.workouts.reduce((total, workout) => total + (workout.weight)/7, 0));

    export const averagePace = computed(() => session.user?.cardio.reduce((total, cardio) => total + cardio.durationMins / cardio.distanceMiles, 0));

    export const caloriesBurned = computed(() => session.user?.cardio.reduce((total, cardio) => total + cardio.durationMins * 8.5, 0));

    export const totalDistance = computed(() => session.user?.cardio.reduce((total, cardio) => total + cardio.distanceMiles, 0));

    export const totalDuration = computed(() => session.user?.cardio.reduce((total, cardio) => total + cardio.durationMins, 0));

    export const feetPerMinute = computed(() => session.user?.cardio.reduce((total, cardio) => total + cardio.distanceMiles * 5280 / cardio.durationMins, 0));

    export const newestWorkout = computed(() => session.user?.workouts[session.user?.workouts.length - 1]);

    export const newestCardio = computed(() => session.user?.cardio[session.user?.cardio.length - 1]);

   

       









    