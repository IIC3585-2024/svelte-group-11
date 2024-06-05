<script>
    import { Route, Router, Link } from "svelte-routing";
    import HomeView from './views/HomeView.svelte';
    import CompletedBooks from './views/CompletedBooks.svelte';
    import RecommendedBooks from './views/RecommendedBooks.svelte';
    import NextBooks from './views/NextBooks.svelte';
    import FavoriteBooks from './views/FavoriteBooks.svelte';
    import AvailableBooks from './views/AvailableBooks.svelte';
</script>

<Router>
<main>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
                <Link class="navbar-item" to="/">Inicio</Link>
                <Link class="navbar-item" to="/mybooks">Completados</Link>
                <Link class="navbar-item" to="/recommended">Recomendados</Link>
                <Link class="navbar-item" to="/nextbooks">Siguientes</Link>
                <Link class="navbar-item" to="/favorites">Favoritos</Link>
            </div>
            <div class="navbar-end">
                <Link class="navbar-item" to="/availables">Disponibles</Link>
            </div>
        </div>
    </nav>
    <Route path="/" component={HomeView} />
    <Route path="/mybooks" component={CompletedBooks} />
    <Route path="/recommended" component={RecommendedBooks} />
    <Route path="/nextbooks" component={NextBooks} />
    <Route path="/favorites" component={FavoriteBooks} />
    <Route path="/availables" component={AvailableBooks} />
</main>
</Router>
