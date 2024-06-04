<script>
    import { onMount } from 'svelte';
  
    import BooksList from '../components/NewBooksList.svelte';
  
    let booksData = [];
    let titlePage = "Lecturas Futuras";
  
    onMount(() => {
      if (localStorage.getItem('nextBooks')) {
        booksData = JSON.parse(localStorage.getItem('nextBooks'));
      }
    });
</script>
  
<div>
    <BooksList books={booksData} titlePage={titlePage}/>
</div>