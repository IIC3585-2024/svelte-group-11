<script>
    import { createEventDispatcher, onMount, afterUpdate } from 'svelte';
    import PageContent from './PageContent.svelte';
  
    export let open = false;
    export let bookData = {};
  
    let show = true;
    let showAtras = false;
    let showAdelante = false;
    let currentPage = 0;
    let currentNextPage = 1;
    const numPages = 4;
    let recommendedBooks = [];
    let completedBooks = [];
    let nextBooks = [];
    let favoriteBooks = [];
    let bookIsInRecommended = false;
    let bookIsInCompleted = false;
    let bookIsInNext = false;
    let bookIsInFavorite = false;

    $: if (bookData) {
      bookIsInCompleted = false;
      bookIsInRecommended = false;
      bookIsInNext = false;
      bookIsInFavorite = false;
      checkBookInLists();
    }
  
    const dispatch = createEventDispatcher();
  
    onMount(() => {
      if (localStorage.getItem('completedBooks')) {
        completedBooks = JSON.parse(localStorage.getItem('completedBooks'));
      }
  
      if (localStorage.getItem('recommendedBooks')) {
        recommendedBooks = JSON.parse(localStorage.getItem('recommendedBooks'));
      }
  
      if (localStorage.getItem('nextBooks')) {
        nextBooks = JSON.parse(localStorage.getItem('nextBooks'));
      }
  
      if (localStorage.getItem('favoriteBooks')) {
        favoriteBooks = JSON.parse(localStorage.getItem('favoriteBooks'));
      }
  
      checkBookInLists();
    });
  
    afterUpdate(() => {
      transformBookData();
    });
  
    function transformBookData() {
      const bookInfo = bookData.volumeInfo || {};
  
      return [
        {
          cover: true,
          image: bookInfo.imageLinks?.thumbnail || null,
        },
        {
          cover: false,
          title: bookInfo.title || 'Title not available',
          authors: bookInfo.authors || [],
        },
        {
          cover: false,
          title: "Detalles:",
          publishedDate: bookInfo.publishedDate || 'No date available',
          publisher: bookInfo.publisher || 'No publisher available',
          contentVersion: bookInfo.contentVersion || 'No content version available',
          authors: []
        },
        {
          cover: false,
          title: "Descripción:",
          description: bookInfo.description || 'No description available',
          authors: []
        }
      ];
    }
  
    function flipPage() {
      currentPage = (currentPage + 1) % numPages;
      if (currentPage === numPages - 1) {
        showAtras = false;
        showAdelante = false;
        currentPage = 0;
        currentNextPage = 1;
        show = true;
      } else {
        show = false;
        showAtras = true;
        showAdelante = true;
        if (currentPage === numPages - 1) {
          showAdelante = false;
          showAtras = false;
        }
      }
    }
  
    function beforeEnter(node) {
      currentNextPage = (currentPage + 1) % numPages;
    }
  
    function afterLeave(node) {
      currentPage = (currentPage + 1) % numPages;
      currentNextPage = currentPage;
      show = true;
    }
  
    function checkBookInLists() {
      let searched_id = bookData.id;
  
      completedBooks.forEach((book) => {
        if (book.id === searched_id) {
          bookIsInCompleted = true;
        }
      });
  
      recommendedBooks.forEach((book) => {
        if (book.id === searched_id) {
          bookIsInRecommended = true;
        }
      });
  
      nextBooks.forEach((book) => {
        if (book.id === searched_id) {
          bookIsInNext = true;
        }
      });
  
      favoriteBooks.forEach((book) => {
        if (book.id === searched_id) {
          bookIsInFavorite = true;
        }
      });
    }
  
    function addBookToCompleted() {
      let currentCompletedBooks = JSON.parse(localStorage.getItem('completedBooks')) || [];
      currentCompletedBooks.push(bookData);
      localStorage.setItem('completedBooks', JSON.stringify(currentCompletedBooks));
      bookIsInCompleted = true;
    }
  
    function addBookToRecommended() {
      let currentRecommendedBooks = JSON.parse(localStorage.getItem('recommendedBooks')) || [];
      currentRecommendedBooks.push(bookData);
      localStorage.setItem('recommendedBooks', JSON.stringify(currentRecommendedBooks));
      bookIsInRecommended = true;
    }
  
    function addBookToNext() {
      let currentNextBooks = JSON.parse(localStorage.getItem('nextBooks')) || [];
      currentNextBooks.push(bookData);
      localStorage.setItem('nextBooks', JSON.stringify(currentNextBooks));
      bookIsInNext = true;
    }
  
    function addBookToFavorite() {
      let currentFavoriteBooks = JSON.parse(localStorage.getItem('favoriteBooks')) || [];
      currentFavoriteBooks.push(bookData);
      localStorage.setItem('favoriteBooks', JSON.stringify(currentFavoriteBooks));
      bookIsInFavorite = true;
    }
  
    function removeBookFromCompleted() {
      let currentCompletedBooks = JSON.parse(localStorage.getItem('completedBooks')) || [];
      currentCompletedBooks = currentCompletedBooks.filter(book => book.id !== bookData.id);
      localStorage.setItem('completedBooks', JSON.stringify(currentCompletedBooks));
      bookIsInCompleted = false;
    }
  
    function removeBookFromRecommended() {
      let currentRecommendedBooks = JSON.parse(localStorage.getItem('recommendedBooks')) || [];
      currentRecommendedBooks = currentRecommendedBooks.filter(book => book.id !== bookData.id);
      localStorage.setItem('recommendedBooks', JSON.stringify(currentRecommendedBooks));
      bookIsInRecommended = false;
    }
  
    function removeBookFromNext() {
      let currentNextBooks = JSON.parse(localStorage.getItem('nextBooks')) || [];
      currentNextBooks = currentNextBooks.filter(book => book.id !== bookData.id);
      localStorage.setItem('nextBooks', JSON.stringify(currentNextBooks));
      bookIsInNext = false;
    }
  
    function removeBookFromFavorite() {
      let currentFavoriteBooks = JSON.parse(localStorage.getItem('favoriteBooks')) || [];
      currentFavoriteBooks = currentFavoriteBooks.filter(book => book.id !== bookData.id);
      localStorage.setItem('favoriteBooks', JSON.stringify(currentFavoriteBooks));
      bookIsInFavorite = false;
    }
  </script>
  
<section>
  {#if open}
    <div class="vue-modal">
      <div class="table">
        <div class="book-container">
          <button type="button" class="back-button" on:click={() => dispatch('close')}>
            <img src="/assets/x.png" alt="Back" class="icon is-medium">
          </button>

          {#if showAtras}
            <div class="page" 
            style="background-color: {transformBookData[currentPage] && transformBookData[currentPage].cover ? '#3b2b1a' : ''}; border-left: {transformBookData[currentPage] && transformBookData[currentPage].cover ? '5px solid #3b2b1a' : '0px'};" 
            on:click="{flipPage}"></div>
          {/if}

          {#if show}
            <div class="page page-move" on:click="{flipPage}">
              <!-- <div in:flip={{ beforeEnter, afterLeave }} class="page page-move" on:click="{flipPage}"> -->
                {#if transformBookData()[currentPage].cover}
                  <img src="{transformBookData()[currentPage].image}" alt="Book cover" style="width: 100%; height: 100%;">
                {:else}
                  <PageContent bookData={transformBookData()[currentPage]}/>
                {/if}
              <!-- </div> -->
            </div>
          {/if}

          {#if showAdelante}
            <div class="page" on:click="{flipPage}">
              <PageContent bookData={transformBookData()[currentPage]}/>
            </div>
          {/if}
          <!-- <PageContent bookData={transformBookData()} /> -->
          {#if !bookIsInFavorite}
              <button on:click={addBookToFavorite} type="button" class="favorite-button">
                <img src="/assets/star-empty.png" alt="Favorite" class="icon is-large">
              </button>
          {:else}
              <button on:click={removeBookFromFavorite}  class="favorite-button">
                <img src="/assets/star.png" alt="Favorite" class="icon is-large">
              </button>
          {/if}
          {#if !bookIsInCompleted}
              <button on:click={addBookToCompleted} class="completed-button">
                <img src="/assets/completed-green.png" alt="Completed" class="icon is-large">
              </button>
          {:else}
              <button on:click={removeBookFromCompleted} class="completed-button">
                <img src="/assets/completed-red.png" alt="Completed" class="icon is-large">
              </button>
          {/if}
          {#if !bookIsInRecommended}
              <button on:click={addBookToRecommended} class="recommended-button">
                <img src="/assets/recommended-green.png" alt="Recommended" class="icon is-large">
              </button>
          {:else}
              <button on:click={removeBookFromRecommended} class="recommended-button">
                <img src="/assets/recommended-red.png" alt="Recommended" class="icon is-large">
              </button>
          {/if}
          {#if !bookIsInNext}
                <button on:click={addBookToNext} class="next-button">
                <img src="/assets/next-green.png" alt="Next" class="icon is-large">
                </button>
          {:else}
                <button on:click={removeBookFromNext} class="next-button">
                <img src="/assets/next-red.png" alt="Next" class="icon is-large">
                </button>
          {/if}
        </div>
    </div>
</div>
{/if}
</section>

<style scoped>
    *{
        font-family: sans-serif;
    }
    
    .vue-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
    justify-content: center;
    align-items: center;
    display: flex;
    }
    
    .table {
        width: 60%;
        height: 80%;
        position: relative;
      justify-content: flex-end;
        perspective: 1000px;
      /* padding-right: 125px; */
      border-radius: 20px;
      background-color: #3b2b1a;
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
    }
    
    .book-container {
      display: flex;
      justify-content: center;
      margin-top: 100px;
    }
    
    .page {
    width: 30%;
    height: 400px;
    background-color: #fff;
    border: 1px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    transform-origin: left center;
    }
    
    .page-move {
      position: fixed;
      margin-left: 30%;
    }
    
    /* .flip-enter-active, .flip-leave-active {
    transition: transform 0.8s ease-in-out;
    }
    
    .flip-enter, .flip-leave-to {
    transform: rotateY(-90deg);
    } */
    
    .back-button {
      position: absolute;
      top: 1%;
      left: 0;
      margin-left: 10px;
      margin-top: 10px;
      background-color: #3b2b1a;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    
    .favorite-button {
      position: absolute;
      top: 1%;
      right: 0;
      margin-right: 10px;
      margin-top: 10px;
      background-color: #3b2b1a;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    
    .completed-button {
      position: absolute;
      bottom: 15px;
      right: 80%;
      border: none;
      background-color: #3b2b1a;
      cursor: pointer;
    }
    
    .recommended-button {
      position: absolute;
      bottom: 15px;
      right: 45%;
      border: none;
      background-color: #3b2b1a;
      cursor: pointer;
    }
    
    .next-button {
      position: absolute;
      bottom: 15px;
      right: 15%;
      border: none;
      background-color: #3b2b1a;
      cursor: pointer;
    }
</style>