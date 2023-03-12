import { reactive } from "vue";
import workouts from "../data/workouts.json";

/*
{
        "workout": "Legs and arms",
        "duration": "1 hour"
    },
*/

export interface Workout {
    workout: string;
    weight: string;


}

export function useWorkouts1() {
    return workouts;
}



