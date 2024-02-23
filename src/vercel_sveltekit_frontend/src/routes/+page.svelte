<script>
  import { enhance } from '$app/forms';
  import "../index.scss";

  export let form;

</script>

<main>
  <img src="/logo2.svg" alt="DFINITY logo" />
  <br />
    
  <form method="POST" action="?/bmi" use:enhance >
    <h3>Calculate your body mass index (BMI)</h3>

    <div class="table">
      <div class="table-row">
         <div class="table-cell">
          <label for="name">Your name: &nbsp;</label>
         </div>
         <div class="table-cell">
          <input id="name" name="name" type="text" />
        </div>
      </div>

      <div class="table-row">
        <div class="table-cell">
         <label for="height">Your height in cm: &nbsp;</label>
        </div>
        <div class="table-cell">
         <input id="height" name="height" type="number" />
       </div>
      </div>

     <div class="table-row">
      <div class="table-cell">
       <label for="height">Your weight in kg:</label>
      </div>
      <div class="table-cell">
       <input id="weight" name="weight" type="number" />
      </div>
     </div>

     <div class="table-row">
      <div class="table-cell">
        <button type="submit">Click Me!</button>
      </div>
      <div class="table-cell"></div>
     </div>
    </div>

  </form>

  {#if form?.success}
    <section id="result">
      <div>Hello 👋 {form.icData.name}, <br>your BMI is {form.icData.bmi}</div>
      <div id="icInfo">canisterId: {form.icData.backendCanisterId}</div>
    </section>
  {/if}
</main>
