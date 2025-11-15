<script>
  let { items } = $state({
    items: [
      {
        id: 1,
        name: 'Floof Hoodie',
        color: 'Black',
        price: 49.99,
        priceLabel: '$49.99',
        quantity: 1,
        size: 'L',
        imageSrc: 'https://picsum.photos/200'
      },
      {
        id: 2,
        name: 'Floof CrewNeck',
        color: 'Black',
        price: 39.99,
        priceLabel: '$39.99',
        quantity: 1,
        size: 'XL',
        imageSrc: 'https://picsum.photos/200'
      },
      {
        id: 3,
        name: 'Floof CrewNeck by Brock the One and Only Rockstar',
        color: 'Black',
        price: 39.99,
        priceLabel: '$39.99',
        quantity: 1,
        size: 'XL',
        imageSrc: 'https://picsum.photos/200'
      },
      {
        id: 4,
        name: 'Floof CrewNeck',
        color: 'Black',
        price: 39.99,
        priceLabel: '$39.99',
        quantity: 1,
        size: 'XL',
        imageSrc: 'https://picsum.photos/200'
      },
      {
        id: 5,
        name: 'Floof CrewNeck',
        color: 'Black',
        price: 39.99,
        priceLabel: '$39.99',
        quantity: 1,
        size: 'XL',
        imageSrc: 'https://picsum.photos/200'
      },
      {
        id: 6,
        name: 'Floof CrewNeck',
        color: 'Black',
        price: 39.99,
        priceLabel: '$39.99',
        quantity: 1,
        size: 'XL',
        imageSrc: 'https://picsum.photos/200'
      },
      {
        id: 7,
        name: 'Floof CrewNeck',
        color: 'Black',
        price: 39.99,
        priceLabel: '$39.99',
        quantity: 1,
        size: 'XL',
        imageSrc: 'https://picsum.photos/200'
      }
    ]
  });

  const dec = (id) => {
    const item = items.find((i) => i.id === id);
    if (!item) return;
    const current = Number(item.quantity) || 1;
    item.quantity = Math.max(1, current - 1);
  };

  const inc = (id) => {
    const item = items.find((i) => i.id === id);
    if (!item) return;
    const current = Number(item.quantity) || 1;
    item.quantity = current + 1;
  };

  const formatPrice = (price) => `$${price.toFixed(2)}`;

  // reactive subtotal: sum of price * quantity
  const subtotal = $derived(
    items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  );
</script>

<div class="cart-body">
  <main class="items">
    {#if items.length === 0}
      <p class="empty">Your cart is empty.</p>
    {:else}
      {#each items as item (item.id)}
        <div class="cart-item">
          <img
            class="item-image"
            src={item.imageSrc}
            alt={`${item.name} picture`}
          />

          <div>
            <p class="item-name">
              {item.name}
            </p>
            <div class="item-details">
              <span class="item-color">({item.color})</span>
              <p class="item-size">Size: {item.size}</p>
            </div>
          </div>

          <div id="itemmanipulation">
            <div class="qty">
              <button
                type="button"
                class="square"
                onclick={() => dec(item.id)}
                aria-label="Decrease quantity"
              >
                −
              </button>

              <input
                class="count"
                type="number"
                min="1"
                bind:value={item.quantity}
              />

              <button
                type="button"
                class="square"
                onclick={() => inc(item.id)}
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>

            <button
              class="remove-btn"
              type="button"
              aria-label="Remove item from cart"
            >
              🗑
            </button>
          </div>
        </div>
      {/each}
    {/if}
  </main>

<footer>
  <span class="label">Subtotal:</span>
  <div class="subtotal-value">
    <span>${subtotal.toFixed(2)}</span>
    <span class="beforetax">(Before Taxes)</span>
  </div>
</footer>

</div>

<style>
  .cart-body {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

    footer {
    padding-top: 2svh;
    border-top: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.75rem;
    font-weight: 600;
    }

    .subtotal-value {
    display: flex;
    align-items: baseline;
    gap: 6px;
    }

    .beforetax {
    font-style: italic;
    font-weight: 400;
    opacity: 0.6;
    font-size: 0.85rem;
    }


  /* scroll area */
  .items {
    flex: 1;
    overflow-y: auto;
    padding: 1rem;
  }

  .empty {
    color: #666;
  }

  /* individual cart item */
  .cart-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem 0;
    border-bottom: 1px solid #eee;
    border-top: 1px solid #eee;
  }

  .item-image {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 4px;
  }

  .item-details {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .item-name {
    font-weight: 600;
    margin: 0;
    color: #111;
    width: 12ch;
  }

  .item-color {
    font-weight: 400;
  }

  #itemmanipulation {
    justify-content: right;
  }

  .item-meta,
  .item-size {
    font-size: 0.85rem;
    color: #555;
    margin: 2px 0;
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

  .square:hover {
    background-color: var(--BajaHover);
  }

  .count {
    height: 40px;
    border-radius: 10px;
    border: var(--Border);
    text-align: center;
    font-size: 16px;
    width: 56px;
  }

  .remove-btn {
    background: transparent;
    border: none;
    font-size: 1.25rem;
    cursor: pointer;
    color: var(--BajaRed);
    padding: 4px;
  }
</style>
