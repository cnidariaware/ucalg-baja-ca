<script>
  import TopBanner from './MerchTopBanner.svelte';
  import ProductCard from './productcard.svelte';

  const items = [
    { category: 'Category', name: 'Item Name', price: '$49.99', imageSrc: 'https://picsum.photos/200' },
    { category: 'Category', name: 'Item Name', price: '$59.99', imageSrc: 'https://picsum.photos/200' },
    { category: 'Category', name: 'Item Name', price: '$39.99', imageSrc: 'https://picsum.photos/200' }
  ];
</script>

<TopBanner
  titleText="All Drops"
  imgUrl="https://res.cloudinary.com/dpgrgsh7g/image/upload/v1755914996/DSC_0393_inuw2z.jpg"
/>

<table>
  <tbody>
    <tr>
      {#each items as i, idx (idx)}
        <td>
          <ProductCard
            category={i.category}
            name={i.name}
            price={i.price}
            imageSrc={i.imageSrc}
          />
        </td>
      {/each}
    </tr>
  </tbody>
</table>
<style>
	table {
		margin: 0 auto;
		border-collapse: separate;
		border-spacing: 2svw;
		color: white;
	}

	td {
		vertical-align: top;
		padding: 0;
	}

	td :global(figure) {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		background-color: var(--BajaRed);
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
			0 6px 20px 0 rgba(0, 0, 0, 0.19);
		border-radius: 1rem;
		padding: 1svh 1svw;
		transition: transform 0.3s ease, box-shadow 0.3s ease;
		min-width: 240px;
	}

	td :global(figure:hover) {
		transform: scale(1.05);
		box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25),
			0 10px 28px rgba(0, 0, 0, 0.22);
	}

	td :global(figure > img) {
		display: block;
		width: 230px;
		height: 230px;
		object-fit: contain;
		background-color: grey;
		border-radius: 0.5rem;
		margin: 10px auto; /* Equal margin on all sides */
	}

	td :global(figure > figcaption) {
		margin-top: 1svh;
		text-align: center;
	}

	td :global(a) {
		color: white;
		text-decoration: none;
	}

	td :global(a:hover) {
		color: var(--BajaRed);
	}

</style>
