<script>
	import TopBanner from '../MerchTopBanner.svelte';
	import CartItemScroll from '../cartItemScroll.svelte';

    import { goto } from '$app/navigation';
    
    function handleSubmit(event) {
        event.preventDefault();
        if (event.target.checkValidity()) {
            goto('/merch/orderconfirmed');
        }
    }

	let { member, subTeam, couponCode } = $state({
		member: false,
		subTeam: '',
		couponCode: ''
	});

	let subTeams = ['Software', 'Team', 'Telemetry', 'Data Aquisition'];

	const cartHeight = $derived(member ? 775 : 1318);
	$inspect(member);
</script>

<TopBanner
	titleText="Checkout"
	imgUrl="https://res.cloudinary.com/dpgrgsh7g/image/upload/v1755914996/DSC_0393_inuw2z.jpg"
/>

<div class="checkout-container">
	<div class="checkout-layout">
		<form class="checkout-form" on:submit={handleSubmit}>
			<div class="field-inline">
				<label for="member">
					Are you a registered member of UCalgary Baja?<span class="required">*</span>
				</label>
				<input
					id="member"
					type="checkbox"
					bind:checked={member}
				/>
			</div>

			<h4>Contact</h4>

			<label for="name">
				Full Name:<span class="required">*</span>
			</label>
			<input id="name" type="text" name="name" required />

			<label for="email">
				Email (UCalgary Email preferred):<span class="required">*</span>
			</label>
			<input id="email" type="email" name="email" required />

			<label for="phone">
				Phone:<span class="required">*</span>
			</label>
			<input id="phone" type="tel" name="phone" required />

			{#if member}
				<label for="sub_team">
					Baja Sub-team:{#if member}<span class="required">*</span>{/if}
				</label>
				<select
					id="sub_team"
					bind:value={subTeam}
					required={member ? true : undefined}
				>
					<option value="" disabled selected>Select a sub-team</option>
					{#each subTeams as option}
						<option value={option}>{option}</option>
					{/each}
				</select>
			{:else}
				<h4>Shipping Address</h4>
				<h5>(We <u><strong>ONLY</strong></u> ship to Canada)</h5>

				<label for="shippingFirstName">
					First Name:<span class="required">*</span>
				</label>
				<input id="shippingFirstName" type="text" name="shippingFirstName" required />

				<label for="shippingLastName">
					Last Name:<span class="required">*</span>
				</label>
				<input id="shippingLastName" type="text" name="shippingLastName" required />

				<label for="shippingStreet">
					Street Address:<span class="required">*</span>
				</label>
				<input id="shippingStreet" type="text" name="shippingStreet" required />

				<label for="shippingUnit">Unit Number:</label>
				<input id="shippingUnit" type="text" name="shippingUnit" />

				<label for="shippingCity">
					City/Town:<span class="required">*</span>
				</label>
				<input id="shippingCity" type="text" name="shippingCity" required />

				<label for="shippingProvince">
					Province/Territory:<span class="required">*</span>
				</label>
				<input id="shippingProvince" type="text" name="shippingProvince" required />

				<label for="shippingPostCode">
					Postal Code:<span class="required">*</span>
				</label>
				<input id="shippingPostCode" type="text" name="shippingPostCode" required />

				<label for="shippingPhone">
					Phone:<span class="required">*</span>
				</label>
				<input id="shippingPhone" type="text" name="shippingPhone" required />
			{/if}

			<label for="couponCode"><h4>Coupon Code:</h4></label>
			<input id="couponCode" type="text" bind:value={couponCode} />

			<label for="additionalInfo"><h4>Additional Information:</h4></label>
			<textarea id="additionalInfo" name="additionalInfo" rows="2"></textarea>

			<h4>Payment:</h4>
			<p class="payment-note">Will be manually processed at a later date.</p>

			<button type="submit" class="place-order-btn">
				Place Order
			</button>
		</form>

		<aside
			class="cart-panel"
			style={`height: ${cartHeight}px;`}
		>
			<CartItemScroll />
		</aside>
	</div>
</div>
<style>
	.checkout-container {
		max-width: 1100px;
		margin: 0 auto 4rem;
		padding: 2rem 1.5rem 0;
		background: #ffffff;
		color: #000000;
		box-sizing: border-box;
	}

	.checkout-layout {
		display: flex;
		align-items: flex-start;
		gap: 2rem;
	}

	.checkout-form {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
	}

	/* UPDATED */
	.cart-panel {
		flex: 1;
		border: 1px solid #ccc;
		background: #ffffff;
		padding: 0.75rem 0.75rem 1rem;
		box-sizing: border-box;

		overflow: hidden;    
		display: flex;
		flex-direction: column;
	}

	.checkout-form h4 {
		margin: 1.2rem 0 0.4rem;
		font-size: large;
	}

	.checkout-form h5 {
		margin: 0 0 0.4rem;
		font-weight: 500;
		font-style: italic;
	}

	label {
		font-size: 0.95rem;
	}

	.required {
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
		border: none
	}

	select option {
		padding: 8px 12px;
		font-size: 15px;
		color: #000;
		background: #fff;
	}

	@media (max-width: 900px) {
		.checkout-layout {
			flex-direction: column;
		}

		.place-order-btn {
			width: 100%;
			text-align: center;
		}
	}
</style>
