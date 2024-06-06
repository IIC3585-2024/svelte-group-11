<script>
    import { onMount, afterUpdate } from 'svelte';
    import ModalBook from './ModalBook.svelte';
    import { createEventDispatcher } from 'svelte';

    export let books = [];
    export let currentPage = 0;
    export let titlePage = '';
    
    let booksColor = {};
    let isOpen = [];

    onMount(() => {
        isOpen = Array(books.length).fill(false);
        
    });

    afterUpdate(() => {
      if (books.length > 0) {
        booksColor = books.reduce((colors, book) => {
          colors[book.id] = generateRandomColor();
            return colors;
        }, {});
      }
    });

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
        dispatch('update-page', currentPage + 1);
    }

    function previousPage() {
        if (currentPage > 0) {
        dispatch('update-page', currentPage - 1);
        }
    }

    const dispatch = createEventDispatcher();
</script>

<section>
<div class="back-container">
    <h1 class="text-title">{titlePage}</h1>
    <div class="navigation-arrows">
        <button on:click={previousPage} class="arrow-left">&lt;</button>
        <button on:click={nextPage} class="arrow-right">&gt;</button>
    </div>
    <div class="grid-container">
        {#each books as book, index}
        <div class="grid-item" key={index}>
            <div class="book-icon" 
                style="background-color: {booksColor[book.id]}" 
                on:click={() => showModal(index)}
                >
                <h1 class="book-title">{book.volumeInfo.title}</h1>
            </div>
            <ModalBook open={isOpen[index]} on:close={() => closeModal(index)} bookData={book} />
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
  
    .navigation-arrows {
      text-align: center;
      margin-bottom: 20px;
    }
  
    .navigation-arrows button {
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
  
    .book-icon {
      width: 100px;
      height: 200px;
      border-radius: 2px;
      cursor: pointer;
      opacity: 0.9;
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
      font-size: 16px;
      color: black;
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
  
    .button-mybooks {
      position: absolute;
      top: 100px;
      right: 60px;
      padding: 10px 20px;
      background-color: #7b5d3e;
      color: white;
      text-align: center;
      text-decoration: none;
      border-radius: 5px;
      cursor: pointer;
    }
</style>