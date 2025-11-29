<script>
	import TopBanner from '../MerchTopBanner.svelte';
	import CartItemScroll from '../cartItemScroll.svelte';
	import { cartStore, formattedSubtotal } from '../cartStore.svelte.js';

	import { goto } from '$app/navigation';

	async function handleSubmit(event) {
		event.preventDefault();
		let formData = new FormData(event.target);
		let formObject = Object.fromEntries(formData.entries());

		// console.log(formObject);

		let orders = [];

		$cartStore.forEach((element) => {
			orders.push({
				order_id: null,
				item_id: element.name,
				colour: element.color,
				size: element.itemSize,
				quantity: element.quantity,
				price: element.price
			});
		});

		let orderRequest = {
			customer_info: {
				order_id: null,
				email: formObject.email,
				phone: formObject.phone,
				name: formObject.name,
				sub_team: subTeam,
				order_total: parseFloat($formattedSubtotal.replace('$', '')),
				ship_full_name: formObject.shippingFullName,
				ship_street_addr: formObject.shippingStreet,
				ship_unit_number: formObject.shippingUnit,
				ship_city: formObject.shippingCity,
				ship_province: formObject.shippingProvince,
				ship_country: formObject.shippingCountry ?? 'Canada',
				ship_postal_code: formObject.shippingPostCode,
				ship_phone: formObject.shippingPhone,
				additional_notes: formObject.additionalInfo
			},
			cart_items: orders,
			order_id: null,
			coupon_code: couponCode
		};
		console.log(orderRequest);

		// console.log(JSON.stringify(orderRequest));

		let res = await fetch('http://localhost:6526/shop/recieve_order', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(orderRequest)
		});
		console.log(await res.json());

		if (true) {
			if (event.target.checkValidity()) {
				goto('/merch/orderconfirmed');
			}
		}
	}

	let { member, subTeam, couponCode } = $state({
		member: false,
		subTeam: null,
		couponCode: ''
	});

	let subTeams = [
		'Chassis',
		'Business',
		'Data Aquisition',
		'Final Drive',
		'Ergonomics',
		'Powertrain',
		'Steering',
		'Telemetry',
		'Suspension',
		'Software',
		'Team'
	];

	const cartHeightLimiter = $derived(member ? 775 : 1318);
	$inspect(member);
</script>

<TopBanner
	titleText="Checkout"
	imgUrl="https://res.cloudinary.com/dpgrgsh7g/image/upload/v1755914996/DSC_0393_inuw2z.jpg"
/>

<div class="checkout-container" style="height: {cartHeightLimiter}px;">
	<form onsubmit={handleSubmit}>
		<div class="field-inline">
			<label for="member">
				Are you a registered member of UCalgary Baja?<span>*</span>
			</label>
			<input type="checkbox" bind:checked={member} />
		</div>

		<h4>Contact</h4>

		<label for="name">
			Full Name:<span>*</span>
		</label>
		<input type="text" name="name" required />

		<label for="email">
			Email (UCalgary Email preferred):<span>*</span>
		</label>
		<input type="email" name="email" required />

		<label for="phone">
			Phone:<span>*</span>
		</label>
		<input type="tel" name="phone" required />

		{#if member}
			<label for="sub_team">
				Baja Sub-team:{#if member}<span>*</span>{/if}
			</label>
			<select bind:value={subTeam} required={member ? true : undefined}>
				<option value="" disabled selected>Select a sub-team</option>
				{#each subTeams as option}
					<option value={option}>{option}</option>
				{/each}
			</select>
		{:else}
			<h4>Shipping Address</h4>
			<h5>(We <u><strong>ONLY</strong></u> ship to Canada)</h5>

			<label for="shippingFullName">
				Full Name:<span>*</span>
			</label>
			<input type="text" name="shippingFullName" required />

			<label for="shippingStreet">
				Street Address:<span>*</span>
			</label>
			<input type="text" name="shippingStreet" required />

			<label for="shippingUnit">Unit Number:</label>
			<input type="text" name="shippingUnit" />

			<label for="shippingCity">
				City/Town:<span>*</span>
			</label>
			<input type="text" name="shippingCity" required />

			<label for="shippingProvince">
				Province/Territory:<span>*</span>
			</label>
			<input type="text" name="shippingProvince" required />

			<label for="shippingPostCode">
				Postal Code:<span>*</span>
			</label>
			<input type="text" name="shippingPostCode" required />

			<label for="shippingPhone">
				Phone:<span>*</span>
			</label>
			<input type="text" name="shippingPhone" required />
		{/if}

		<label for="couponCode"><h4>Coupon Code:</h4></label>
		<input name="couponCode" type="text" bind:value={couponCode} />

		<label for="additionalInfo"><h4>Additional Information:</h4></label>
		<textarea name="additionalInfo" rows="2"></textarea>

		<h4>Payment:</h4>
		<p class="payment-note">Will be manually processed at a later date.</p>

		<button type="submit" class="place-order-btn"> Place Order </button>
	</form>

	<aside>
		<CartItemScroll />
	</aside>
</div>

<style>
	.checkout-container {
		display: flex;
		max-width: 1100px;
		margin: 0 auto 4rem;
		padding: 2rem 1.5rem 0;
		background: #ffffff;
		color: #000000;
		box-sizing: border-box;
		align-items: flex-start;
		column-gap: 8svw;
	}

	form {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
		height: fit-content;
	}

	aside {
		border: 1px solid #ccc;
		background: #ffffff;
		padding: 0.75rem 0.75rem 1rem;
		box-sizing: border-box;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		height: 100%;
		min-width: 453px;
	}

	h4 {
		margin: 1.2rem 0 0.4rem;
		font-size: large;
	}

	h5 {
		margin: 0 0 0.4rem;
		font-weight: 500;
		font-style: italic;
	}

	label {
		font-size: 0.95rem;
	}

	span {
		color: var(--BajaRed);
		font-weight: 700;
		margin-left: 2px;
	}

	input[type='text'],
	input[type='email'],
	input[type='tel'],
	textarea,
	select {
		width: 100%;
		padding: 0.45rem 0.55rem;
		border-radius: 4px;
		border: 1px solid #ccc;
		font-size: 0.95rem;
		box-sizing: border-box;
	}

	textarea {
		resize: vertical;
		font: inherit;
	}

	.field-inline {
		display: flex;
		align-items: center;
		gap: 0.6rem;
		margin-bottom: 0.6rem;
	}

	.field-inline input[type='checkbox'] {
		width: 18px;
		height: 18px;
		accent-color: var(--BajaRed);
	}

	.payment-note {
		margin: 0 0 1.2rem;
		font-size: 0.95rem;
	}

	.place-order-btn {
		border-radius: 10px;
		background-color: var(--BajaRed);
		border-color: transparent;
		margin: 1.5rem 0 0;
		padding: 2svh 4svw;
		font-size: large;
		color: #ffffff;
		font-weight: 600;
		cursor: pointer;
		align-self: center;
	}

	.place-order-btn:hover {
		background-color: var(--BajaHover);
	}

	select {
		height: 44px;
		border-radius: 10px;
		border: var(--Border);
		padding: 0 44px 0 12px;
		background-color: #ffffff;
		background-position: right 12px center;
		background-size: 18px;
		color: #000;
		font-size: 16px;
		box-sizing: border-box;
		width: 100%;
		border: 1px solid #ccc;
	}

	select::-ms-expand {
		display: none;
	}

	select:focus {
		outline: none;
		box-shadow: 0 0 0 3px rgba(196, 18, 48, 0.12);
		border-color: rgba(196, 18, 48, 0.6);
		border: none;
	}

	option {
		padding: 8px 12px;
		font-size: 15px;
		color: #000;
		background: #fff;
	}

	@media (max-width: 900px) {
		.place-order-btn {
			width: 100%;
			text-align: center;
		}
	}
</style>
