<script>
import CodeBuilder from "./CodeBuilder.svelte";
import CodeContainer from "./CodeContainer.svelte";


</script>

<div class="flex-auto">
  <h2 class="text-2xl font-extrabold mt-10 text-center">Code lookup</h2>
  <div class="my-6  p-4 rounded-2xl flex">
    <input type="search" class="border-2 border-primary flex-grow">
  </div>
  <CodeContainer/>
  <CodeContainer/>
</div>