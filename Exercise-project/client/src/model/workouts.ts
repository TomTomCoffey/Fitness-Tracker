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
    duration: string;
}

export function useWorkouts() {
    return workouts;
}