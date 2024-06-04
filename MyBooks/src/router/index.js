import HomeView from '../views/HomeView.svelte';
import CompletedBooks from '../views/CompletedBooks.svelte';
import RecommendedBooks from '../views/RecommendedBooks.svelte';
import NextBooks from '../views/NextBooks.svelte';
import FavoriteBooks from '../views/FavoriteBooks.svelte';
import AvailableBooks from '../views/AvailableBooks.svelte';

const routes = {
  '/': HomeView,
  '/mybooks': CompletedBooks,
  '/recommended': RecommendedBooks,
  '/nextbooks': NextBooks,
  '/favorites': FavoriteBooks,
  '/availables': AvailableBooks
};

export default routes;