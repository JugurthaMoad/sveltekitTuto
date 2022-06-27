<script context="module">
    export async function load({fetch, params}){
        const id = params.id
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        const post = await response.json()
        if(response.ok){
            return{
                props:{
                    post
                }
            }
        }

        return{
            status: 301,
            redirect: "/about"
        }
    }
</script>

<script>
    export let post 
    const handleBack = ()=>{
        history.back();
    }
</script>


<div>
    <h1>{post.title}</h1>
    {post.body}
    <button on:click={handleBack}>Return</button>
</div>

<style>
    div{
        width: 100%;
        height: 60vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: auto;
        
    }
    button{
        margin: 30px auto;
        padding: 10px;

    }
    button:hover{
        cursor: pointer;
    }
</style>