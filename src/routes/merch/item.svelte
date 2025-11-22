<script>
  const product = {
    category: "HeavyWear",
    name: "Floof Hoodie",
    price: 49.99,
    description:
      "This is a really beautiful hoodie. Please buy it.",
    images: [
      "https://picsum.photos/seed/hoodie-1/800",
      "https://picsum.photos/seed/hoodie-2/800",
      "https://picsum.photos/seed/hoodie-3/800"
    ],
    colors: ["Black", "Red", "Sand"],
    sizes: ["S", "M", "L", "XL"],
    material: "100% Cotton (200gsm jersey)",
    washing: "Cold wash, inside out. Tumble dry low.",
    sizeGuideUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  };

  let idx = 0;
  const prev = () => (idx = (idx - 1 + product.images.length) % product.images.length);
  const next = () => (idx = (idx + 1) % product.images.length);

  let qty = 1;
  const dec = () => (qty = Math.max(1, qty - 1));
  const inc = () => (qty = qty + 1);

  let selectedColor = product.colors[0] ?? "";
  let selectedSize = product.sizes[0] ?? "";

  function addToCart() {
    alert(
      `Added ${qty} × ${product.name}` +
        (selectedColor ? ` (${selectedColor})` : "") +
        (selectedSize ? ` [${selectedSize}]` : "")
    );
  }
</script>

<title>{product.name} – Floof Hoodie</title>

<div class="product-page">
  <section class="gallery">
    <figure class="frame">
      <button type="button" class="nav left" aria-label="Previous image" on:click={prev}>‹</button>

      <img alt={product.name} src={product.images[idx]} />

      <button type="button" class="nav right" aria-label="Next image" on:click={next}>›</button>

    

      <button
        type="button"
        class="icon corner-right"
        aria-label="Open in new tab"
        on:click={() => window.open(product.images[idx], "_blank")}
      >↗</button>
    </figure>
  </section>

  <section class="info">
    <div class="title">
      <div class="category">Merch / {product.category}</div>
      <h1>{product.name}</h1>
      <div class="price">${product.price.toFixed(2)}</div>
    </div>

    <div class="desc">
      <div class="subtitle">Description</div>
      <p>{product.description}</p>
    </div>

    {#if product.colors.length}
      <label class="field">
        <span>Color</span>
        <select bind:value={selectedColor}>
          {#each product.colors as c}
            <option value={c}>{c}</option>
          {/each}
        </select>
      </label>
    {/if}

    {#if product.sizes.length}
      <label class="field">
        <span>Size</span>
        <select bind:value={selectedSize}>
          {#each product.sizes as s}
            <option value={s}>{s}</option>
          {/each}
        </select>
      </label>
    {/if}

    <div class="purchase-row">
      <div class="qty">
        <button type="button" class="square" on:click={dec} aria-label="Decrease quantity">−</button>
        <input class="count" type="number" min="1" bind:value={qty} />
        <button type="button" class="square" on:click={inc} aria-label="Increase quantity">+</button>
      </div>

      <button type="button" class="add-to-cart" on:click={addToCart}>Add to Cart</button>
    </div>

    <hr />

    <div class="details">
      <div class="subtitle">Additional Details</div>
      <dl>
        <dt>Material</dt>
        <dd>{product.material}</dd>

        {#if product.washing}
          <dt>Washing / Drying</dt>
          <dd>{product.washing}</dd>
        {/if}

        <dt>Size Guide</dt>
        <dd><a href={product.sizeGuideUrl}>View size guide</a></dd>
      </dl>
    </div>
  </section>
</div>

<style>

  .product-page {
    max-width: 1100px;
    margin: 0 auto;
    padding: 4svh;
    display: grid;
    grid-template-columns: 1.1fr 1fr;
    gap: 28px;
  }

  @media (max-width: 900px) {
    .product-page { grid-template-columns: 1fr; }
  }

  .gallery .frame {
    position: relative;
    padding: 16px;

    margin: 0;
  }

  .gallery img {
    display: block;
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: 20px;
  }

  .gallery .nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 26px;
    line-height: 1;
    width: 35px;
    height: 35px;
    border-radius: 10px;
    border: none;
    background: #fff;
    cursor: pointer;
  }
  .gallery .nav.left  { left: 20px; }
  .gallery .nav.right { right: 20px; }


  .gallery .icon {
    position: absolute;
    bottom: 25px;
    left: 20px;
    line-height: 1;
    font:26px;
    border: none;
    background: #fff;
    width: 35px;
    height: 35px;
    border-radius: 10px;
    cursor: pointer;
  }


  .title .category {
    font-size: 14px;
    opacity: 0.8;
    margin-bottom: 4px;
    font-style: italic;
  }
  .title h1 {
    margin: 0 0 6px 0;
    font-size: 35px;
  }
  .title .price {
    font-size: 20px;
    font-weight: 600;
  }

  .desc { margin-top: 10px; }
  .subtitle {
    padding-bottom: 5px;
    font-weight: 600;
    font-size: medium;
    margin-bottom: 6px;
  }
  .desc p {
    margin: 0;
    line-height: 1.5;
    font-size: medium;

  }

  .field {
    display: grid;
    grid-template-columns: 120px 1fr;
    align-items: center;
    gap: 10px;
    margin-top: 14px;
    font-weight: 500;
    position: relative; 
  }
  .field > span { font-size: medium; }
  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    height: 44px;
    border-radius: 10px;
    border: var(--Border);
    padding: 0 44px 0 12px; /* leave room on right for arrow */
    background-color: #ffffff;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath d='M5 7l5 5 5-5' stroke='%23000' stroke-width='1.8' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 12px center;
    background-size: 18px;
    color: #000;
    font-size: 16px;
    box-sizing: border-box;
    width: 100%;
    border: 1px solid #ccc;
  }
  /* hide the native dropdown arrow in IE/Edge */
  select::-ms-expand { display: none; }

  select:focus {
    border: none;
    outline: none;
    box-shadow: 0 0 0 3px rgba(196, 18, 48, 0.12); /* subtle Baja red focus */
    border-color: rgba(196, 18, 48, 0.6);
  }

  /* style the options inside the native dropdown (limited cross-browser support) */
  select option {
    padding: 8px 12px;
    font-size: 15px;
    color: #000;
    background: #fff;
  }

  .purchase-row {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 14px;
    margin-top: 16px;
    align-items: center;
  }

  .qty {
    display: inline-grid;
    grid-template-columns: 40px 56px 40px;
    gap: 8px;
  }
  .square {
    height: 40px;
    border-radius: 10px;
    border: var(--Border);
    background: #fff;
    cursor: pointer;
    font-size: 18px;
  }
  .count {
    height: 40px;
    border-radius: 10px;
    border: var(--Border);
    text-align: center;
    font-size: 16px;
    width: 56px;
  }

  .add-to-cart {
  border-radius: 10px;
	background-color: var(--BajaRed);
	border-color: transparent;
	align-items: start;
	margin: 1svh 0svw;
	padding: 1svh 0svw;
	font-size: large;
  color: #ffffff;
  }
 button:hover {
	cursor: pointer;
	background-color: var(--BajaHover);
}

  hr {
    margin: 20px 0;
    border: none;
    border-top: var(--Border);
  }
  .details dl {
    margin: 0;
    display: grid;
    grid-template-columns: 180px 1fr;
    row-gap: 10px;
    column-gap: 12px;
    
  }
  .details dt { font-weight: 600; }
  .details dd { margin: 0; }
  .details a {
    color: #000;
    text-decoration: underline;
  }
  .details a:hover { color: var(--BajaRed); }
  .info {    padding: 16px;}
</style>
