import { computed, reactive, ref } from "vue";
import user from "../data/session.json";
import type { Workout } from "./workouts";
import type { Cardio } from "./cardio";
import * as myFetch from "./myFetch";
import type { DataEnvelope, DataListEnvelope } from "./myFetch";
import type { ObjectId } from "mongodb";
import { useRouter } from "vue-router";

 


const session = reactive({
    user: null as User | null,
    isLoading: false,
    messages: [] as {
        msg: string,
        type: "success" | "danger" | "warning" | "info",
    }[],
    redirectUrl: null as string | null,
})

 

  export interface User {
    _id?: string
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
     token?: string;
     bestBench?: number;
    bestSquat?: number;
    bestDeadlift?: number;
 
 }


 export function api(url: string, data?: any, method?: string, headers?: any) {
    session.isLoading = true;

    if(session.user?.token)
    {headers = {
        "Authorization": `Bearer ${session.user?.token}`,
        ...headers,
    }
}
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

    return api('users/', user, 'POST')
}

export function deleteUser(id: number): Promise<void> {
    
    return api(`users/${id}`, undefined, 'DELETE')

}

export function updateUser(user: User): Promise<DataEnvelope<User>> {

    return api(`users/`, user, 'PUT')

}

export async function loginWithServer(email: string, password: string): Promise<User> {
      
    
    const person = await api('users/login', {email, password}, 'POST');

    session.user = person.data.user;

    if(session.user) {
    const router = useRouter();
    session.user.token = person.data.token;
    addMessage("Login Successful", "success");
    router.push('/');
    }

    return person.data.user;
    

    

}

export function useLogin(email: string, password: string) {
    const router = useRouter();

    return async function() {
     const response = await api('users/login', {email, password}, 'POST');

     session.user = response.data.user;
     
     console.log(session.user);
     if(!session.user) {
         addMessage("User not found", "danger");
         return;
     }
     session.user.token = response.data.token;

       //router.push("/");

       return response.data.user;
    

    //  router.push(session.redirectUrl ?? "/");
    //  session.redirectUrl = null;
 }
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

 



  
    export function login1(number: number) {
        const User = user.find((user) => user.id === number);
           if (User) {
               session.user = User;
           }
       
   }

export function loginWithUser(user: User) {
    session.user = user;
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
    export function findBestBench1(user : User) : number{

        let bestBench = 0;
        for(let i = 0; i < user!.workouts.length; i++){
            if(user.workouts[i].workout === "Bench Press" && user.workouts[i].weight > bestBench){
                bestBench = user.workouts[i].weight;
            }
        }
        return bestBench;
    }
    export function findBestSquat() : number{
        let bestSquat = 0;
        for(let i = 0; i < session.user!.workouts.length; i++){
            if(session.user?.workouts[i].workout === "Squat" && session.user?.workouts[i].weight > bestSquat){
                bestSquat = session.user?.workouts[i].weight;
            }
        }
        return bestSquat;
    }
    export function findBestSquat1(user: User) : number{
        let bestSquat = 0;
        for(let i = 0; i < user!.workouts.length; i++){
            if(user?.workouts[i].workout === "Squat" && user?.workouts[i].weight > bestSquat){
                bestSquat = user?.workouts[i].weight;
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

    export function findBestDeadlift1(user: User) : number{

        let bestDeadlift = 0;
        for(let i = 0; i < user!.workouts.length; i++){
            if(user.workouts[i].workout === "Deadlift" && user.workouts[i].weight > bestDeadlift){
                bestDeadlift = user?.workouts[i].weight;
            }
        }
        console.log(bestDeadlift);
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

   

       
  export function setBestBench(number : number){
    session.user!.bestBench = number;
  }
    export function setBestSquat(number : number){
    session.user!.bestSquat = number;
    }
    export function setBestDeadlift(number : number){
    session.user!.bestDeadlift = number;
    }

    







    