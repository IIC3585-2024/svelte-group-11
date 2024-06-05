<script>
    export let bookData = {};
    console.log("bb", bookData);
</script>
  
<div class="book-info">
    <h1 class="book-title">{bookData.title}</h1>
    <div class="book-details">
      {#if bookData.authors && bookData.authors.length}
        <p>Autor(es): {bookData.authors.join(', ')}</p>
      {/if}
      {#if bookData.publisher}
        <p>Editorial: {bookData.publisher}</p>
      {/if}
      {#if bookData.publishedDate}
        <p>Fecha de publicación: {bookData.publishedDate}</p>
      {/if}
      {#if bookData.contentVersion}
        <p>Versión de contenido: {bookData.contentVersion}</p>
      {/if}
      {#if bookData.description}
        <p>{bookData.description}</p>
      {/if}
    </div>
</div>
  
<style>
  .book-info {
    padding: 20px;
    font-family: 'Courier New', Courier, monospace;
    color: black;
    max-height: 400px;
    overflow-y: auto;
  }
  
  .book-title {
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    margin-top: 20px;  
    color: black;
  }
  
  .book-details {
    font-size: 16px;
    color: black;
  }
  
  .book-details p {
    margin-bottom: 5px;
  }
</style>