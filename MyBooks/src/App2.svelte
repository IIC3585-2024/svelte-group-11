<script>
    import Router from 'svelte-spa-router';

    import BooksApi from './booksApi.svelte';
    // import List from './list.svelte';

    // Define your routes
    const routes = {
        '/books': BooksApi,
        // '/lists': List
    };
</script>

<main>
    <nav>
        <!-- <a href="#/">Home</a> -->
        <a href="#/books">Libros</a>
        <!-- <a href="#/lists">Listas</a> -->
    </nav>
    
    <Router {routes} />
</main>

<!-- <section>
    <h1>¡Bienvenido a MyBooks!</h1>
    <p>Aqui puedes crear diferentes listas con libros que te gusten o interesen</p>
</section> -->
