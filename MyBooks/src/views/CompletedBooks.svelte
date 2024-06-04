<script>
    import { onMount } from 'svelte';
  
    import BooksList from '../components/NewBooksList.svelte';
  
    let booksData = [];
    let titlePage = "Lecturas Completadas";
  
    onMount(() => {
      if (localStorage.getItem('completedBooks')) {
        booksData = JSON.parse(localStorage.getItem('completedBooks'));
      }
    });
</script>
  
<div>
    <BooksList books={booksData} titlePage={titlePage}/>
</div>