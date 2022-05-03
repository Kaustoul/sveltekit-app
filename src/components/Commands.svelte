<script>
  let commands = [{index: 0, command: ''}];
  let last = 0;

  export function checkForEmpty(command) {
    if (command.index == last) {
      return
    } 

    if (command.command == '') {
      commands = removeIndexed(command.index);
      checkLast();
      console.log('empty');
    }

    console.log(commands);
  }

  function removeIndexed(index) {
    let copy = [];
    commands.forEach(cmd => {
      if (cmd.index != index) {
        copy.push(cmd);
      }
    });
    return copy;
  }

  export function commandChange(command) {
    if (command.index == last && command.command != '') {
      last++;
      commands = [...commands, {index: last ,command: ''}]
      console.log("new command " + commands)
    }
  }

  function checkLast() {
    let max = 0;
    commands.forEach(command => {
      if (command.index > max) {
        max = command.index;
      }
    });

    last = max;
  }

</script>


<div class="flex flex-col p-2">
  <label for="commands" class="flex-1 tooltip" data-tip="What commands should this code use after claiming. Use '{'{player}'}' to refrence the player who claimed this code. Change the '1x' to change how many times will the command be used.">Commands</label>
  {#each commands as c (c.index)}
    <div class="flex-1 mb-2 flex">
      <div class="border-2 border-gray-800 rounded-l-lg flex-grow flex pl-3 bg-white">
        <span>/</span>
        <input type="text" name="commands" placeholder="Add new command" 
          class="flex-grow outline-none" bind:value={c.command} autocomplete=""
          on:input={() => commandChange(c)} on:blur={() => checkForEmpty(c)}>
      </div>
      <div class="flex-initial border-y-2 border-r-2 rounded-r-lg border-gray-800 pr-2 bg-white">
        <input data-tooltip-target="tooltip-command" type="number" name="amount" value="1" class="w-6 outline-none text-right">x
      </div>
    </div>
  {/each}
</div>
