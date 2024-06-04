<script>
    import { onMount } from 'svelte';
    import { createEventDispatcher } from 'svelte';
    import BooksList from '../components/BooksList.svelte';
    import axios from 'axios';
  
    const dispatch = createEventDispatcher();
  
    let booksData = [];
    let currentPage = 0;
    let titlePage = "Libros Disponibles";
  
    onMount(() => {
      fetchBooks(0);
    });
  
    function fetchBooks(currentPageParam) {
      currentPage = currentPageParam;
      axios
        .get(`https://www.googleapis.com/books/v1/volumes?q=a&startIndex=${currentPageParam * 40}&maxResults=40`)
        .then(response => {
          booksData = response.data.items;
        })
        .catch(error => {
          console.error('Error fetching books:', error);
        });
    }
  </script>
  
  <div>
    <BooksList books={booksData} titlePage={titlePage} currentPage={currentPage} on:update-page={fetchBooks}/>
  </div>