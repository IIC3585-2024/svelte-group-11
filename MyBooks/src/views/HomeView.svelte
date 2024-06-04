<script>
    import { onMount } from 'svelte';
  
    let completedBooks = [];
    let recommendedBooks = [];
    let nextBooks = [];
    let favoriteBooks = [];
  
    onMount(async () => {
      if (!localStorage.getItem('completedBooks')) {
        localStorage.setItem('completedBooks', JSON.stringify(completedBooks));
      } else {
        completedBooks = JSON.parse(localStorage.getItem('completedBooks'));
      }
  
      if (!localStorage.getItem('recommendedBooks')) {
        localStorage.setItem('recommendedBooks', JSON.stringify(recommendedBooks));
      } else {
        recommendedBooks = JSON.parse(localStorage.getItem('recommendedBooks'));
      }
  
      if (!localStorage.getItem('nextBooks')) {
        localStorage.setItem('nextBooks', JSON.stringify(nextBooks));
      } else {
        nextBooks = JSON.parse(localStorage.getItem('nextBooks'));
      }
  
      if (!localStorage.getItem('favoriteBooks')) {
        localStorage.setItem('favoriteBooks', JSON.stringify(favoriteBooks));
      } else {
        favoriteBooks = JSON.parse(localStorage.getItem('favoriteBooks'));
      }
    });
  
    async function resetBooks() {
      completedBooks = [];
      recommendedBooks = [];
      nextBooks = [];
      favoriteBooks = [];
      localStorage.setItem('completedBooks', JSON.stringify(completedBooks));
      localStorage.setItem('recommendedBooks', JSON.stringify(recommendedBooks));
      localStorage.setItem('nextBooks', JSON.stringify(nextBooks));
      localStorage.setItem('favoriteBooks', JSON.stringify(favoriteBooks));
    }
</script>
  
<main>
  <div>
    <h1>MyBooks</h1>
    <figure>
      <img src="/assets/books.png" alt="Books">
    </figure>
  </div>
  
  <div>
    <div >
      <h1>Libros Completados: {completedBooks.length}</h1>
    </div>
  </div>
  
  <div>
    <div>
      <h1>Libros Recomendados: {recommendedBooks.length}</h1>
    </div>
  </div>
  
  <div>
    <div>
      <h1>Libros por leer: {nextBooks.length}</h1>
    </div>
  </div>
  
  <div>
    <div>
      <h1>Libros Favoritos: {favoriteBooks.length}</h1>
    </div>
  </div>
  
  <div>
    <div>
      <button on:click={resetBooks}>Resetear Información</button>
    </div>
  </div>
</main>
  
<style>
    h1 {
      color: black;
    }
</style>