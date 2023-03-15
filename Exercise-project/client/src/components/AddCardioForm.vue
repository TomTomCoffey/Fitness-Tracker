<script setup lang="ts">

</script>



<template>
    <div>
        <div class="modal is-active">
         <div class="model-background"></div>
          <div class="modal-card">
            <header class="modal-card-head">
              <p class="modal-card-title">Add Run</p>
              <button class="delete" aria-label="close"></button>
            </header>
            <section class="modal-card-body">
                <div class="field">
                    <label class="label">Distance (in miles)</label>
                    <div class="control">
                    <input class="input" type="text" placeholder="Workout Name">
                    </div>
                </div>
          
                <div class="field">
                    <label class="label">Duration (in mins)</label>
                    <div class="control">
                    <input class="input" type="text" placeholder="Workout Name">
                    </div>
                </div>
            </section>
            <footer class="modal-card-foot">
              <button class="button is-success">Save changes</button>
              <button class="button">Cancel</button>
            </footer>
        </div>

        </div>

    </div>
</template>



<style scoped>

</style>