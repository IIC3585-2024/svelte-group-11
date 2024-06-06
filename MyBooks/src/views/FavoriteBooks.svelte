<script>
    import { onMount } from 'svelte';
  
    import BooksList from '../components/NewBooksList.svelte';
  
    let booksData = [];
    let titlePage = "Favoritos";
    let loading = true;

    onMount(async () => {
      try {
        booksData = await JSON.parse(localStorage.getItem('favoriteBooks'));
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
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