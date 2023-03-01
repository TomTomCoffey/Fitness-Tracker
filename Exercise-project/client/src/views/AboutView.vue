<template>

<div class="container">
   <div class="columns">
      <div class="column">
        <div class="notification is-link is-light">
           <article class="message is-medium">
             <div class="message-header">
               <p>About the App</p>
               <button class="delete is-medium" aria-label="delete"></button>
             </div>
  <div class="message-body">
   <p>
    This app is designed to help you record your exercise 
    progess and keep track of your goals. By recording your workouts,
     you can see your progress and see how far you have come. 
     Sign up to the app and being a better stronger you! 
          </p>
        </div>
      </article>
    </div>

    <article class="message">
              <div class="message-header">
                <p>Your exersise progress!</p>
                <button class="delete" aria-label="delete"></button>
              </div>
              <div class="message-body">
               <p> This is your current workout progress for today! </p>
                <progress class="progress is-success" value="60" max="100">60%</progress>
              </div>
            </article>
  </div>
    <div class="column">
    Second column
    </div>
</div>



  
</div>
   

</template>

<style>
  .message-header{
    background-color: #0c5e44;
    color: white;
    padding: 1rem;
  }
  .message{
    padding: 0;
    margin-bottom: 2rem;
  }
  .notification{
    padding: 0;
    background-color: white;
  }

 

</style>
