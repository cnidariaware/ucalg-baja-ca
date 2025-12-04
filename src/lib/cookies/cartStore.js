import { browser } from '$app/environment';
import { writable, derived } from 'svelte/store';

const STORAGE_KEY = 'UCalgaryBajaCart';

function load() {
	if (!browser) return '';
	const json = sessionStorage.getItem(STORAGE_KEY);
	return json
		? JSON.parse(json)
		: [
				{
					name: '',
					colour: '',
					price: 0,
					priceLabel: '',
					quantity: 0,
					itemSize: '',
					imageSrc: 'https://picsum.photos/200'
				}
			];
}

function save(info) {
	if (!browser) return;
	sessionStorage.setItem(STORAGE_KEY, JSON.stringify(info));
}

const store = writable(load());

if (browser) {
	store.subscribe((value) => save(value));
}

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

	formatted_subtotal: derived(store, ($cart) =>
		$cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)
	)
};
