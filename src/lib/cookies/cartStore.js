import { browser } from '$app/environment';
import { writable, derived, get } from 'svelte/store';

const STORAGE_KEY = 'UCalgaryBajaCart';

function load() {
	if (!browser) return [];
	const json = sessionStorage.getItem(STORAGE_KEY);
	try {
		const parsed = json ? JSON.parse(json) : [];
		// ensure it’s always an array
		return Array.isArray(parsed) ? parsed : [];
	} catch {
		return [];
	}

	// return json
	// 	? JSON.parse(json)
	// 	: [
	// 			{
	// 				name: '',
	// 				colour: '',
	// 				price: 0,
	// 				priceLabel: '',
	// 				quantity: 0,
	// 				itemSize: '',
	// 				imageSrc: 'https://picsum.photos/200'
	// 			}
	// 		];
}

function save(info) {
	if (!browser) return;
	sessionStorage.setItem(STORAGE_KEY, JSON.stringify(info));
}

const store = writable(load());

if (browser) {
	store.subscribe((value) => save(value));
}

const formatted_subtotal = derived(store, ($cart) =>
	$cart.reduce((s, i) => s + i.price * i.quantity, 0).toFixed(2)
);

export const cartStore = {
	subscribe: store.subscribe,
	inc(index) {
		store.update((cart) => {
			cart[index].quantity += 1;
			save(cart);
			return cart;
		});
	},
	dec(index) {
		store.update((cart) => {
			cart[index].quantity = Math.max(1, cart[index].quantity - 1);
			save(cart);
			return cart;
		});
	},
	removeItem(index) {
		store.update((cart) => {
			cart.splice(index, 1);
			save(cart);
			return cart;
		});
	},
	getAll() {
		let value;
		store.subscribe((v) => (value = v))();
		return value;
	},

	formatted_subtotal,

	// formatted_subtotal: derived(store, ($cart) =>
	// 	$cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)
	// ),
	// let subtotal = $derived($cartStore.reduce((sum, item) => sum + item.price * item.quantity, 0));

	// get formatted_subtotal() {
	// 	const value = get(store); // get the current cart array
	// 	const subtotal = value.reduce((sum, item) => sum + item.price * item.quantity, 0);
	// 	return subtotal.toFixed(2);
	// },

	// formatted_subtotal: derived(store, ($cart) =>
	// 	$cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)
	// ),

	// (store, ($cart) =>

	addToCart(product, qty, selectedColour, selectedSize) {
		let item = {
			name: product.name,
			colour: selectedColour,
			price: product.price,
			quantity: qty,
			itemSize: selectedSize,
			imageSrc: product.url_images[0]
		};

		store.update((cart) => {
			cart.push(item);
			save(cart);
			return cart;
		});

		return new Promise((resolve) => {
			setTimeout(() => resolve(true), 300);
		});
	}
};
