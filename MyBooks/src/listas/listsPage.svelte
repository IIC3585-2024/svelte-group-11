<script>
    // import Book from './book.svelte'
	import Button from "../button.svelte";
    import { push } from 'svelte-spa-router';
    import List from './list.svelte'

    let title = '';
    let description = '';
	let lists = []
	// let purchases = [];

    function setTitle(event){
        title = event.target.value;
    }

	function addList(){
        const newList = {
            title : title,
            description: description
        };
        lists = lists.concat(newList)
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
        <label for="description">Description</label>
        <textarea rows="3" id="description" bind:value={description}/>
    </div>

	<Button on:click={addList}>Añadir lista</Button>
</section>

<section>
	<h2>Listas creadas</h2>
	{#each lists as list}
		<List listTitle={list.title}
		listDescription={list.description}
		/>
	{/each}
</section>