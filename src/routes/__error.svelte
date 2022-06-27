<script context="module">

	export function load({ error }) {
		return {
			props: { message: error.message }
		};
	}
</script>

<script>
    export let message
</script>
<div>
    <h1>{message}</h1>
    <a href="/">Home</a>
</div>

<style>
    div{
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>