<script>
    import Button from "./button.svelte";
    import { createEventDispatcher } from "svelte";
    export let name = 'list';
    export let listTitle;
    export let listDescription;

    const dispatch = createEventDispatcher();

    function verBooks() {
        dispatch("books", listTitle);
    }

</script>

<style>
    div{
        margin: 1rem;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26)
    }
    h1{
        font-size: 1.25rem;
        margin: 0.25rem 0;
    }
    h2{
        font-size: 1rem;
        margin: 0.25rem 0;
        color: aqua;
    }
    p{
        margin: 0.25rem 0;
    }
</style>

<div>
    <h2> {listTitle} </h2>
    <p> {listDescription}</p>
    <Button on:click={verBooks}>Ver</Button>
</div>