<script>
    import Router from 'svelte-spa-router';

    import BooksPage from './books/bookPage.svelte';
    import Home from './home.svelte'
    import ListsPage from './listas/listsPage.svelte';

    // Define your routes
    const routes = {
        '/': Home,
        '/books': BooksPage,
        '/lists': ListsPage
    };
</script>

<section>
    <Router {routes} />
    <nav>
        <a href="#/">Home</a>
        <a href="#/books">Ver Libros</a>
        <a href="#/lists">Listas</a>
    </nav>
    
</section>
