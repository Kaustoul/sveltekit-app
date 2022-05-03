<script lang=ts>
  import Commands from "./Commands.svelte"

  let type:String = 'singleuse';
  let commands = [{index: 0, command: ''}];

  function typeChange(newType:string) {
    type = newType;
  }
</script>

<div class="flex-auto mx-auto w-max absolute min-w-[500px] max-w-[500px]"> 
  <h2 class="text-2xl text-center font-extrabold mt-10">Code generator</h2>
  <form class="my-6 rounded-2xl">
    <div class="mx-10 mb-6">
      <div class="flex mb-2">
        <div class="flex-grow w-32 text-center flex">
          <input type="radio" name="codetype" id="singleuse" bind:value={type} on:change={() => typeChange('singleuse')} 
          checked class="appearance-none">
          <label for="singleuse" class="{type == 'singleuse' ? 'bg-blue-500' : 'bg-gray-200'} p-2 flex-grow rounded-l-xl">Single Use Code</label>
        </div>
        <div class="flex-grow w-32 text-center flex">
          <input type="radio" name="codetype" id="reusable" class="appearance-none" bind:value={type} on:change={() => typeChange('reusable')}>
          <label for="reusable" class="{type != 'singleuse' ? 'bg-blue-500' : 'bg-gray-200'} p-2 flex-grow rounded-r-xl">Reusable Code</label>
        </div>
      </div>
      
      <div class="flex flex-col">
        {#if type == 'singleuse'}
          <div class="p-2 mb-6 flex-grow">
            <h2 class="text-center mt-6 text-gray-800 text-xl font-bold">Create a Single Use Code template</h2>
            <p class="text-center text-gray-700">These templates will be used to generate Single Use Codes</p>
          </div>
          <div class="flex flex-col p-2">
            <label for="templatename" class="flex-1 tooltip text-left" data-tip="Lookup this template for later refrence by this name">Name</label>
            <input type="text" name="templatename" id="templatename" placeholder="Name this template" class="px-3 flex-1 border-2 border-gray-800 rounded-lg">
          </div>
        {:else}
          <div class="p-2 mb-6">
            <h2 class="text-center mt-6 text-gray-800 text-xl font-bold">Create a Reusable Code!</h2>
          </div>
          
          <div class="flex flex-col p-2">
            <label for="codename" class="flex-1 text-left tooltip" data-tip="This will be the final code that players will be able to claim. Press Random to generate a random code.">Code</label>
            <input type="text" name="codename" id="codename" placeholder="Custom code" class="px-3 flex-1 border-2 border-gray-800 rounded-lg">
          </div>
          
          <div class="flex mx-2">
            <label for="global" class="flex-auto w-20 tooltip" data-tip="How many times can the code be claimed by every player combined. Set to 0 to make infinite.">Global limit</label>
            <label for="player" class="flex-auto w-20 tooltip" data-tip="How many times can the code be claimed by each player. Set to 0 to make infinite.">Player limit</label>
            <label for="cooldown" class="flex-auto w-40 tooltip" data-tip="How often can a player claim this code.">Cooldown</label>
          </div>
          <div class="flex mx-2 gap-2">
            <input type="number" placeholder="0" class="border-2 rounded-lg border-gray-800 w-20 flex-auto px-3">
            <input type="number" placeholder="0" class="border-2 rounded-lg border-gray-800 w-20 flex-auto px-3">
            <div class="border-2 rounded-lg border-gray-800 w-40 flex-auto px-1 flex">
              <input type="number" placeholder="00" class="flex-auto w-6 pl-2 text-right mr-1">d
              <input type="number" placeholder="00" class="flex-auto w-6 pl-2 text-right mr-1">h
              <input type="number" placeholder="00" class="flex-auto w-6 pl-2 text-right mr-1">m
              <input type="number" placeholder="00" class="flex-auto w-6 pl-2 text-right mr-1">s
            </div>
          </div>
          <div class="mx-2 flex flex-col mt-2">
            <label for="expiration" class="tooltip flex-1" data-tip="Set expiration date and time. Leave empty for no expiration">Expiration</label>
            <input type="datetime-local" name="expiration" id="expiration" class="border-2 rounded-lg border-gray-800 flex-auto px-3 flex-grow">
          </div>
        {/if}
        <Commands/>
        <input type="submit" class="flex-grow bg-gray-200 rounded-xl my-2 py-1 hover:bg-blue-400">
      </div>
    </div>
  </form>
</div>