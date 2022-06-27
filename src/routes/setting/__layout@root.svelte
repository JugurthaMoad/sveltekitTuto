<script>
    import SettingNav from "$lib/settingNav.svelte";
    import Footer from '$lib/footer.svelte'
</script>
<SettingNav />
<main class="container">
    <slot></slot>
</main>

<style>
    .container{
        width: 100%;
        min-height: calc(100vh - 130px);
        background-color: rgb(147, 144, 144);
    }
</style>
