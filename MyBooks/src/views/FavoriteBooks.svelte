<script>
    import { onMount } from 'svelte';
  
    import BooksList from '../components/NewBooksList.svelte';
  
    let booksData = [];
    let titlePage = "Favoritos";
  
    onMount(() => {
      if (localStorage.getItem('favoriteBooks')) {
        booksData = JSON.parse(localStorage.getItem('favoriteBooks'));
      }
    });
</script>
  
<div>
    <BooksList books={booksData} titlePage={titlePage}/>
</div>