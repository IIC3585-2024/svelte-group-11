<script>
    import { onMount } from 'svelte'
    import Book from './book.svelte';

    let booksApi = []
    const url = 'https://www.googleapis.com/books/v1/volumes?q=young%adult'

    onMount(async () => {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            booksApi = data.items || [];
            console.log(booksApi)
        } catch (error) {
            console.error('Error fetching books:', error);
        }
    });
</script>

<div>
    {#each booksApi as bookApi}
        <Book bookTitle={bookApi.volumeInfo.title}
        bookPrice={bookApi.saleInfo.listPrice?.amount || 'N/A'}
        bookDescription={bookApi.volumeInfo.description || 'N/A'}
        />
    {/each}
</div>