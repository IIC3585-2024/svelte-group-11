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
  <div class="column has-text-centered has-background-grey-darker">
    <h1 class="title is-1 mt-4">MyBooks</h1>
    <figure class="image is-128x128 is-inline-block mb-5">
      <img src="../assets/books.png" alt="Books">
    </figure>
  </div>
  
  <div class="columns is-mobile is-centered has-text-centered mt-5">
    <div class="column is-half has-background-info-dark">
      <h1>Libros Completados: {completedBooks.length}</h1>
    </div>
  </div>
  
  <div class="columns is-mobile is-centered has-text-centered mt-5">
    <div class="column is-half has-background-info-dark">
      <h1>Libros Recomendados: {recommendedBooks.length}</h1>
    </div>
  </div>
  
  <div class="columns is-mobile is-centered has-text-centered mt-5">
    <div class="column is-half has-background-info-dark">
      <h1>Libros por leer: {nextBooks.length}</h1>
    </div>
  </div>
  
  <div class="columns is-mobile is-centered has-text-centered mt-5">
    <div class="column is-half has-background-info-dark">
      <h1>Libros Favoritos: {favoriteBooks.length}</h1>
    </div>
  </div>
  
  <div class="columns is-mobile is-centered has-text-centered mt-5">
    <div class="column">
      <button class="button is-danger" on:click={resetBooks}>Resetear Información</button>
    </div>
  </div>
</main>
  
<style>
    h1 {
      color: white;
    }
</style>