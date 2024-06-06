<script>
    import { onMount } from 'svelte';
  
    import BooksList from '../components/NewBooksList.svelte';
  
    let booksData = [];
    let titlePage = "Recomendados";
    let loading = true;
  
    onMount(() => {
      if (localStorage.getItem('recommendedBooks')) {
        booksData = JSON.parse(localStorage.getItem('recommendedBooks'));
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