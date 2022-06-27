<script context="module">
    export async function load({fetch}){
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        const posts = await response.json();
        if(response.ok){
            return{
                props:{
                    posts
                }
            }
        }
        return(
            {
                props: error = new Error("can not fetch data")
            }
        )
    }
</script>



<script>
    import { onMount } from "svelte";
    import {currentPath} from "../../stores/currentPathStore"
        onMount(()=> currentPath.changePath("/about"))
        export let posts
 
    </script>


<h1>Welcome to the about page</h1>

<p>
    {#each posts as post }
    <div class="post_container">
        <a sveltekit:prefetch href="/about/{post.id}">{post.title}</a>
    </div>
   
    {:else}
    <h3>There is no post</h3>
    {/each}
   
</p>


<style>
    p{
        width: 100%;
      
        height: 75vh;
    }

    .post_container{
        padding: 10px;
    }
  
</style>