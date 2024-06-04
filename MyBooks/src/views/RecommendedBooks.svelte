<script>
    import { onMount } from 'svelte';
  
    import BooksList from '../components/NewBooksList.svelte';
  
    let booksData = [];
    let titlePage = "Recomendados";
  
    onMount(() => {
      if (localStorage.getItem('recommendedBooks')) {
        booksData = JSON.parse(localStorage.getItem('recommendedBooks'));
      }
    });
</script>
  
<div>
    <BooksList books={booksData} titlePage={titlePage}/>
</div>