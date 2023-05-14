
<script setup lang="ts">
import { ref } from 'vue';
import { useSession } from '@/model/session';
import type { Workout } from '@/model/workouts';
import Chart from 'chart.js/auto';
import { onMounted } from 'vue';


const session = useSession();
const user = ref(session.user);

const benchlist = getBenchList();
const squatlist = getSquatList();
const deadliftlist = getDeadliftList();

onMounted(() => {
    console.log(session.user);
    console.log(benchlist);
    console.log(squatlist);
    console.log(deadliftlist);


const ctx = document.getElementById('myChart');

const myChart = new Chart(document.getElementById('myChart'), {
    type: 'line',
    data: {
        labels: ['Bench Press', 'Squat', 'Deadlift'],
        datasets: [{
            label: 'Weight',
            data: [benchlist, squatlist, deadliftlist],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)'
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                min: 0,
                max: 1000
            }
        }
    }
});

})







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
    height: 100vh;
    background-color: white;
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    margin-left: 200px;
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


</style>