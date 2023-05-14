
<script setup lang="ts">
import { ref } from 'vue';
import { useSession } from '@/model/session';
import type { Workout } from '@/model/workouts';
import Chart from 'chart.js/auto';
import { onMounted } from 'vue';
import type { ChartConfiguration } from 'chart.js';


const session = useSession();
const user = ref(session.user);

const benchlist = getBenchList();
const squatlist = getSquatList();
const deadliftlist = getDeadliftList();





const workoutData = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'],
    datasets: [
        {
            label: 'Bench Press',
            data: benchlist,
            borderColor: 'red',
            backgroundColor: 'red',
            fill: false,
        },
        {
            label: 'Squat',
            data: squatlist,
            borderColor: 'blue',
            backgroundColor: 'blue',
            fill: false,
        },
        {
            label: 'Deadlift',
            data: deadliftlist,
            borderColor: 'green',
            backgroundColor: 'green',
            fill: false,
        }
    ]
}

const config: ChartConfiguration = {
    type: 'line',
    data: workoutData,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Workout Progress'
            }
        }
    }
}

onMounted(() => {
    const ctx = document.getElementById('myChart') as HTMLCanvasElement;
    const myChart = new Chart(ctx, config);

});







function getBenchList() : number[]{

    const benchlist = [];

    for(let i = 0; i < session.user!.workouts.length; i++){
        if(session.user!.workouts[i].workout === "Bench Press"){
            benchlist.push(session.user!.workouts[i].weight);
        }      
}
return benchlist;

}

function getSquatList() : number[]{

    const squatlist = [];

    for(let i = 0; i < session.user!.workouts.length; i++){
        if(session.user!.workouts[i].workout === "Squat"){
            squatlist.push(session.user!.workouts[i].weight);
        }      
}
return squatlist;


}
function getDeadliftList() : number[]{

    const deadliftlist = [];

    for(let i = 0; i < session.user!.workouts.length; i++){
        if(session.user!.workouts[i].workout === "Deadlift"){
            deadliftlist.push(session.user!.workouts[i].weight);
        }      
}
return deadliftlist;

}











</script>

<template>
    <div class="container">
        <!-- i need to create a line graph here -->
        <div class="box">
            <canvas id="myChart" width="400" height="400"></canvas>

            









        </div>
        

    


       

    </div>
</template>



<style scoped>

.box{
    width: 100vh;
    background-color: white;
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    margin-left: 200px;

    margin-right: 200px;
    
}

.myChart{
    width: 100vh;
    height: 100vh;
    background-color: white;
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
}

.container{
    background-color: transparent;
}


</style>