<script>
    import Book from './book.svelte'
	import Button from "../button.svelte";
	// import Purchase from './purchase.svelte'
	import BooksApi from './booksApi.svelte';
    import { push } from 'svelte-spa-router';

    let title = '';
    let price = 0;
    let description = '';
	let books = []
	// let purchases = [];

    function setTitle(event){
        title = event.target.value;
    }

	function addBook(){
        const newBook = {
            title : title,
            price : price,
            description: description
        };
        books = books.concat(newBook)
    }

    // function goToLink(path) {
    //     push(path);
    // }

	// function purchaseBook(event){
	// 	const selectedTitle= event.detail;
	// 	purchases = purchases.concat({
	// 		...books.find(book => book.title === selectedTitle)
	// 	});
	// }

</script>

<style>
    h1 {
        color: purple;

    }
    section{
        margin: auto;
        width :30rem;

    }
    label,input,textarea{width: 100%}
</style>

<!-- <section>
	<Button on:click={() => goToLink('/')}>Home</Button>
</section> -->

<section>
    <div> 
        <label for="title">Title</label>
        <input type="text" id="title" value={title} on:input={setTitle}/>
    </div>
    <div>
        <label for="price">Price</label>
        <input type="number" id="price" bind:value={price}/>
    </div>
    <div>
        <label for="description">Description</label>
        <textarea rows="3" id="description" bind:value={description}/>
    </div>

	<Button on:click={addBook}>Añadir libro</Button>
</section>

<section>
	<h2>Libros Disponibles</h2>
	{#each books as book}
		<Book bookTitle={book.title}
		bookPrice={book.price}
		bookDescription={book.description}
		/>
	{/each}
	<BooksApi />
</section>