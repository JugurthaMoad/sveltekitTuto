<script>
    import {currentPath } from "../stores/currentPathStore"
</script>
<header>
    <a href="/"><span>Logo</span></a>
    <ul>
        <li class={$currentPath ==="/"? "current":"" }>
            <a href="/">Home</a>
        </li>
        <li class={$currentPath ==="/about"? "current":"" }>
            <a href="/about">About</a>
        </li>
        <li>
            <a href="/setting">Setting</a>
        </li>
       
    </ul>
   
</header>
<style>
    header {
        width: 100%;
        padding: 15px;
        box-sizing: border-box;
        background-color: black;
        color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    span {
        font-size: 2em;
        font-weight: bold;
    }
     a {
        text-decoration: none;
        color: inherit}
    span:hover{
        cursor: pointer;
    }
    ul {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        color: inherit
    }
    ul li {
        list-style-type: none;
        font-size: 1.3em
    }
    ul li a {
        text-decoration: none;
        color: inherit;
    }
    ul li a:hover{
        cursor: pointer;
        color: rgb(98, 21, 21)
    } 
    .current {
        color: red;
    }
    .current a:hover{
        color: red;
    }
</style>