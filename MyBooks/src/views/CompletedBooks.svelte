<script>
    import { onMount } from 'svelte';
  
    import BooksList from '../components/NewBooksList.svelte';
  
    let booksData = [];
    let titlePage = "Lecturas Completadas";
    let loading = true;
  
    onMount(() => {
      if (localStorage.getItem('completedBooks')) {
        booksData = JSON.parse(localStorage.getItem('completedBooks'));
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