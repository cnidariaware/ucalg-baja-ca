<script>
  import TopBanner from './MerchTopBanner.svelte';
  import ProductCard from './productcard.svelte';

  const items = [
    { category: 'Category', name: 'Item Name', price: '$49.99', imageSrc: 'https://picsum.photos/200' },
    { category: 'Category', name: 'Item Name', price: '$59.99', imageSrc: 'https://picsum.photos/200' },
    { category: 'Category', name: 'Item Name', price: '$39.99', imageSrc: 'https://picsum.photos/200' },
    { category: 'Category', name: 'Item Name', price: '$39.99', imageSrc: 'https://picsum.photos/200' },
    { category: 'Category', name: 'Item Name', price: '$39.99', imageSrc: 'https://picsum.photos/200' },
    { category: 'Category', name: 'Item Name', price: '$39.99', imageSrc: 'https://picsum.photos/200' },
    { category: 'Category', name: 'Item Name', price: '$39.99', imageSrc: 'https://picsum.photos/200' }

  ];
</script>

<TopBanner
  titleText="All Drops"
  imgUrl="https://res.cloudinary.com/dpgrgsh7g/image/upload/v1755914996/DSC_0393_inuw2z.jpg"
/>
<div style="height: 6svh;"></div>
<div class="product-grid">
  {#each items as i, idx (idx)}
    <div class="card">
      <ProductCard
        category={i.category}
        name={i.name}
        price={i.price}
        imageSrc={i.imageSrc}
      />
    </div>
  {/each}
</div>
<div style="height: 6svh;"></div>


<style>
  .product-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 1svw;              
    justify-content: center; 
    margin: 0 auto;
    padding: 5 1svw;
    max-width: calc(1080px + 8svw);
  }

  .card {
    display: flex;
    justify-content: center;
    color: white;
  }

  /* medium screens: limit max width so only 2 columns fit */
  @media (max-width: 1100px) {
    .product-grid {
      max-width: calc(480px + 4svw); /* 2 * 240px + gap */
    }
  }

  /* small screens: single column */
  @media (max-width: 700px) {
    .product-grid {
      max-width: 100%;
      padding: 0 2svw;
      gap: 2svw;
    }
    .card { flex: 1 1 100%; max-width: 420px; }
  }

  /* visual styles for the product figure (scoped to the grid) */
  .product-grid :global(figure) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: var(--BajaRed);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 1rem;
    padding: 1svw;
    padding-bottom: 3svh;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    min-width: 240px;
  }

  .product-grid :global(figure:hover) {
    transform: scale(1.05);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25),
      0 10px 28px rgba(0, 0, 0, 0.22);
  }

  .product-grid :global(figure > img) {
    display: block;
    width: 230px;
    height: 230px;
    object-fit: contain;
    background-color: grey;
    border-radius: 0.5rem;
    margin: 10px auto;
  }

  .product-grid :global(figure > figcaption) {
    margin-top: 1svh;
    text-align: center;
  }

  .product-grid :global(a) {
    color: white;
    text-decoration: none;
  }

  .product-grid :global(a:hover) {
    color: var(--BajaRed);
  }

</style>
