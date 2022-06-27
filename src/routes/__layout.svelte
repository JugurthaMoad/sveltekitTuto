
<script>
    import Nav from '$lib/nav.svelte'
    import Footer from '$lib/footer.svelte'

</script>


<main>
 <Nav />
 <div  class="container">
    <slot></slot>
 </div>

 <Footer />
</main>

<style>
    .container{
        width: 100%;
        min-height: calc(100vh - 130px);
        overflow: scroll;
        background-color: rgb(147, 144, 144);
    }
</style>