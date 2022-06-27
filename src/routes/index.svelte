
<script>
import { onMount } from "svelte";
import {currentPath} from "../stores/currentPathStore"
    onMount(()=> currentPath.changePath("/"))
</script>

<h1>Welcome to the home Page</h1>

<p>
    feel free to visite our website
</p>


<style>
    p{
        width: 100%;
        height: 75vh;
    }
</style>