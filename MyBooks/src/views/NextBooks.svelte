<script>
    import { onMount } from 'svelte';
  
    import BooksList from '../components/NewBooksList.svelte';
  
    let booksData = [];
    let titlePage = "Lecturas Futuras";
    let loading = true;
  
    onMount(() => {
      if (localStorage.getItem('nextBooks')) {
        booksData = JSON.parse(localStorage.getItem('nextBooks'));
        loading = false;
      }
    });
</script>
  
<div>
  {#if loading}
    <p>Loading...</p>
  {:else}
    <BooksList books={booksData} titlePage={titlePage}/>
  {/if}
</div>