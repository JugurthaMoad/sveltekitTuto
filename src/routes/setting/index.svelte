
<script>
    import { onMount } from "svelte";
    import {currentPath} from "../../stores/currentPathStore"
        onMount(()=> currentPath.changePath("/setting"))
    </script>
<h1>Welcome to the setting page</h1>

<p>
   <a href="/"> Home</a>
</p>


<style>
    p{
        width: 100%;
        height: calc(100vh - 106px);
        display: flex;
        justify-content:center;
        align-items:center;
    }
</style>