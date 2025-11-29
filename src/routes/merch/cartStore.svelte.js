import { writable, derived } from "svelte/store";


export const cartStore = writable([
			{
				itemId: 1,
				name: 'Floof Hoodie',
				colour: 'Black',
				price: 49.99,
				priceLabel: '$49.99',
				quantity: 1,
				itemSize: 'L',
				imageSrc: 'https://picsum.photos/200'
			},
			{
				itemId: 2,
				name: 'Floof CrewNeck',
				colour: 'Black',
				price: 39.99,
				priceLabel: '$39.99',
				quantity: 1,
				itemSize: 'XL',
				imageSrc: 'https://picsum.photos/200'
			},
			{
				itemId: 3,
				name: 'Floof CrewNeck by Brock the One and Only Rockstar',
				colour: 'Black',
				price: 39.99,
				priceLabel: '$39.99',
				quantity: 1,
				itemSize: 'XL',
				imageSrc: 'https://picsum.photos/200'
			},
			{
				itemId: 4,
				name: 'Floof CrewNeck',
				colour: 'Black',
				price: 39.99,
				priceLabel: '$39.99',
				quantity: 1,
				itemSize: 'XL',
				imageSrc: 'https://picsum.photos/200'
			},
			{
				itemId: 5,
				name: 'Floof CrewNeck',
				colour: 'Black',
				price: 39.99,
				priceLabel: '$39.99',
				quantity: 1,
				itemSize: 'XL',
				imageSrc: 'https://picsum.photos/200'
			},
			{
				itemId: 6,
				name: 'Floof CrewNeck',
				colour: 'Black',
				price: 39.99,
				priceLabel: '$39.99',
				quantity: 1,
				itemSize: 'XL',
				imageSrc: 'https://picsum.photos/200'
			},
			{
				itemId: 7,
				name: 'Floof CrewNeck',
				colour: 'Black',
				price: 39.99,
				priceLabel: '$39.99',
				quantity: 1,
				itemSize: 'XL',
				imageSrc: 'https://picsum.photos/200'
			},
			{
				itemId: 8,
				name: 'Floof CrewNeck',
				colour: 'Black',
				price: 39.99,
				priceLabel: '$39.99',
				quantity: 1,
				itemSize: 'XL',
				imageSrc: 'https://picsum.photos/200'
			},
			{
				itemId: 9,
				name: 'Floof CrewNeck',
				colour: 'Black',
				price: 39.99,
				priceLabel: '$39.99',
				quantity: 1,
				itemSize: 'XL',
				imageSrc: 'https://picsum.photos/200'
			},
			{
				itemId: 10,
				name: 'Floof CrewNeck',
				colour: 'Black',
				price: 39.99,
				priceLabel: '$39.99',
				quantity: 1,
				itemSize: 'XL',
				imageSrc: 'https://picsum.photos/200'
			},
			{
				itemId: 11,
				name: 'Floof CrewNeck',
				colour: 'Black',
				price: 39.99,
				priceLabel: '$39.99',
				quantity: 1,
				itemSize: 'XL',
				imageSrc: 'https://picsum.photos/200'
			}
		]
);

export const subtotal = derived(cartStore, ($cart) =>
    $cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
);

export const formatPrice = derived(subtotal, ($subtotal) =>
    `$${$subtotal.toFixed(2)}`
);

export const formattedSubtotal = derived(subtotal, ($subtotal) =>
    `$${$subtotal.toFixed(2)}`
);

export const removeItem = (itemId) => {
    cartStore.update(cart => cart.filter(item => item.itemId !== itemId));
};

// increment quantity by itemId
export const inc = (itemId) => {
    cartStore.update(cart =>
        cart.map(item =>
            item.itemId === itemId
                ? { ...item, quantity: item.quantity + 1 }
                : item
        )
    );
};

// decrement quantity by itemId
export const dec = (itemId) => {
    cartStore.update(cart =>
        cart.map(item =>
            item.itemId === itemId
                ? { ...item, quantity: Math.max(1, item.quantity - 1) }
                : item
        )
    );
};
