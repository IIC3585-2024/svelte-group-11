<script>
    import { onMount } from 'svelte';
    import ModalBook from './ModalBook.svelte'; // Adjust the import path as needed
  
    export let books = [];
    export let titlePage = '';

    let isOpen = [];
    let currentPage = 0;
  
    onMount(() => {
      isOpen = Array(books.length).fill(false);
    });
  
    const booksColor = books.reduce((colors, book) => {
      colors[book.id] = generateRandomColor();
      return colors;
    }, {});

    const booksPaginated = () => {
      const start = currentPage * 40;
      const end = start + 40;
      return books.slice(start, end);
    };
  
    const endOfBooks = () => {
      return books.length <= (currentPage + 1) * 40;
    };
  
    function generateRandomColor() {
      const colors = ['#F8E6A0', '#8B4513', '#8C001A', '#B8860B', '#D4A190', '#0F52BA', '#50C878', '#C04000', '#C0C0C0', '#696969'];
      const randomIndex = Math.floor(Math.random() * colors.length);
      return colors[randomIndex];
    }
  
    function showModal(index) {
      isOpen[index] = true;
    }
  
    function closeModal(index) {
      isOpen[index] = false;
    }
  
    function nextPage() {
      if (!endOfBooks) {
        currentPage++;
      }
    }
  
    function previousPage() {
      if (currentPage > 0) {
        currentPage--;
      }
    }
</script>

<section>
  <div class="back-container">
    <h1 class="text-title">{titlePage}</h1>
    <div class="navigation-arrows">
      <button on:click={previousPage} class="arrow-left" disabled={currentPage === 0}>&lt;</button>
      <button on:click={nextPage} class="arrow-right" disabled={endOfBooks()}>&gt;</button>
    </div>
    <div class="grid-container">
      {#each Array(40) as _, index}
        <div class="grid-item" key={index}>
          {#if booksPaginated()[index]}
            <div
              class="book-icon"
              style="background-color: {booksColor[booksPaginated()[index].id]}"
              on:click={() => showModal(index)}
              tabindex="0"
              role="button"
              aria-label={`Show details for ${booksPaginated()[index].volumeInfo.title}`}
            >
              <h1 class="book-title">{booksPaginated()[index].volumeInfo.title}</h1>
            </div>
            <ModalBook
              open={isOpen[index]}
              bookData={booksPaginated()[index]}
              on:close={() => closeModal(index)}
            />
          {:else}
            <div class="book-icon empty-book">
              <!-- Espacio vacío -->
            </div>
          {/if}
        </div>
      {/each}
    </div>
  </div>
</section>
  
<style>
    .back-container {
      height: 100%;
      padding-left: 50px;
      padding-right: 50px;
      padding-top: 50px;
      padding-bottom: 50px;
      background-color: #cbcdce;
    }
  
    .grid-container {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
      grid-gap: 20px;
      border: #7b5d3e solid 20px;
      background-color: #ebac6e;
    }
  
    .book-icon {
      width: 100px;
      height: 200px;
      border-radius: 5px;
      cursor: pointer;
      opacity: 0.9;
      margin-left: 5px;
      margin-top: 5px;
    }
  
    .book-icon.empty-book {
      background-color: #ebac6e; /* Un color de fondo para los espacios vacíos */
    }
  
    .grid-container > div::after {
      content: '';
      position: absolute;
      bottom: -20px;
      left: -10;
      background-color: #7b5d3e;
      width: 120%;
      height: 20px;
    }
  
    .grid-item {
      position: relative;
    }
  
    .book-title {
      text-align: center;
      color: black;
      font-size: 16px;
      margin-top: 10px;
      transform: translate(-25%, 95%) rotate(-90deg);
      height: 70px;
      width: 200px;
      overflow: hidden;
    }
  
    .text-title {
      text-align: center;
      margin-bottom: 20px;
      font-weight: bold;
      color: #333;
      font-size: 48px;
    }
  
    .navigation-arrows {
      text-align: center;
      margin-bottom: 20px;
    }
  
    .navigation-arrows button {
      background-color: #814e1aa3;
      color: black;
      border: none;
      border-radius: 5px;
      padding: 10px;
      cursor: pointer;
      font-size: 20px;
    }
  
    .navigation-arrows button:disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }
</style>