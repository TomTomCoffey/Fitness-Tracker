import { computed, reactive } from "vue";
import user from "../data/session.json";
import type { Workout } from "./workouts";
import type { Cardio } from "./cardio";
import * as myFetch from "./myFetch";

 


 const session = reactive({
     user: null as User | null,
     isLoading: false,
     messages: [] as {
         msg: string,
         type: "success" | "error" | "warning" | "info",
     }[],
     
 })

 

  export interface User {
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


 export function api(url: string) {
    session.isLoading = true;
    return myFetch.api(url)
        .catch(err => {
            console.error(err);
            session.messages.push({
                msg: err.message ?? JSON.stringify(err),
                type: "error",
            })
        })
        .finally(() => {
            session.isLoading = false;
        })
}

export function getProducts(): Promise<User[]> {

    return api('products')

}






 export const users: User[] = [

    
        {
            "id" : 1,
            "name" : "Tom",
            "email" : "tom@email.com",
            "photo" : "http://www.example.com/tom.jpg",
            "token" : "1",
            "isAdmin" : true,
            "workouts" : [
              {
                  "workout": "Bench Press",
                  "weight": 240
              },
              {
                  "workout": "Squat",
                  "weight": 275
              },
              {
                  "workout": "Deadlift",
                  "weight": 440
              }
          ],
           "friends":[],
        
            "prs": 2,
        
            "cardio": [
                {
                    
                    "distanceMiles": 5.9,
                    "durationMins": 120
                }
            ]
        
        
            
            
        },
          {
            "id" : 2,
            "name" : "Zoey",
            "email" : "ZoeyTheDog@doggy.com",
            "photo" : "../data/images/IMG_7634.jpeg",
            "token" : "0",
            "isAdmin" : false,
            "workouts" : [
              {
                  "workout": "Bench Press",
                  "weight": 100
              },
              {
                  "workout": "Squat",
                  "weight": 550
              },
              {
                  "workout": "Deadlift",
                  "weight": 185
              }
            ],
            "friends": [ 
        ],
            "prs": 1,
            "cardio": [
                {
                    
                    "distanceMiles": 20.6,
                    "durationMins": 60
                }
            ]
        
        
        
        
         },
          {
            "id" : 3,
            "name" : "Sally",
            "email" : "Sally@sally.com",
            "photo" : "http://www.example.com/tom.jpg",
            "token" : "0",
            "isAdmin" : false,
            "workouts" : [
              {
                  "workout": "Bench Press",
                  "weight": 90
              },
              {
                  "workout": "Squat",
                  "weight": 250
              },
              {
                  "workout": "Deadlift",
                  "weight": 225
              }
            ],
        
            "friends": [],
        
            "prs": 0,
        
            "cardio": [
                {
                    
                    "distanceMiles": 5.0,
                    "durationMins": 30
                }
            ]
          }
           
        
        
        
        

 ]







 export function useSession() {
     return session;
 }


 export function login(number: number) {
         const User = user.find((user) => user.id === number);
            if (User) {
                session.user = User;
            }
        
    }

export function loginThroughServer(number: number) {
    return api(`users/${number}`)
        .then(user => {
            if (user) {
                session.user = user;
            }
        })
}

    // export function getUser(number: number) {
    //     const User = user.find((user) => user.id === number);
    //     if (User) {
    //         return User;
    //     }
        
    // }


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
        session.user?.workouts.push(workout);
    }

    export function addWorkout1(workout: string, weight: number) {
        if(workout !== "" && weight >= 0)
       { session.user?.workouts.push({workout, weight});}
    }

    export function removeWorkout(workout: Workout) {
        const index = session.user?.workouts.indexOf(workout);
        if (index !== undefined) {
            session.user?.workouts.splice(index, 1);
        }
    }
  

    export function addCardio(distanceMiles: number, durationMins: number) {

        if(distanceMiles >= 0 && durationMins >= 0)
       { session.user?.cardio.push({distanceMiles, durationMins});}

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

   
        
       









    