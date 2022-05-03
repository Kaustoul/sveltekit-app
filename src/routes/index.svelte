<script>
import CodeList from "../components/CodeList.svelte";
import CodeBuilder from "../components/CodeBuilder.svelte";
</script>

<header class="bg-blue-600" >
  <h1 class="text-2xl font-bold text-center text-gray-800 md:text-4xl p-7">bCode Manager</h1>
</header>
<main>
  <div class="flex">
    <div class="flex-auto">
      <CodeList/>
    </div>
    <div class="flex-auto">
      <CodeBuilder/>
    </div>
  </div>
</main>